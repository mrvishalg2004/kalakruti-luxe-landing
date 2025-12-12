const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware - Allow all origins during development
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};

// Review Schema
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    default: 'Customer',
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  approved: {
    type: Boolean,
    default: false
  }
});

const Review = mongoose.model('Review', reviewSchema);

// API Routes

// Get all approved reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(50);
    res.json({ success: true, reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching reviews', error: error.message });
  }
});

// Get all reviews (including unapproved) - for admin
app.get('/api/reviews/all', async (req, res) => {
  try {
    const reviews = await Review.find()
      .sort({ createdAt: -1 });
    res.json({ success: true, reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching reviews', error: error.message });
  }
});

// Submit a new review
app.post('/api/reviews', async (req, res) => {
  try {
    const { name, role, content, rating } = req.body;

    if (!name || !content || !rating) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, content, and rating are required' 
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ 
        success: false, 
        message: 'Rating must be between 1 and 5' 
      });
    }

    const review = new Review({
      name,
      role: role || 'Customer',
      content,
      rating,
      approved: true // Auto-approve for now, you can change this to false for manual approval
    });

    await review.save();

    res.status(201).json({ 
      success: true, 
      message: 'Review submitted successfully!',
      review 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting review', 
      error: error.message 
    });
  }
});

// Approve a review (admin only)
app.patch('/api/reviews/:id/approve', async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }

    res.json({ success: true, message: 'Review approved', review });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error approving review', error: error.message });
  }
});

// Delete a review
app.delete('/api/reviews/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }

    res.json({ success: true, message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting review', error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  console.log('Health check requested');
  res.json({ success: true, message: 'Server is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ success: false, message: 'Server error', error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 Ready to accept requests`);
  });
}).catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
