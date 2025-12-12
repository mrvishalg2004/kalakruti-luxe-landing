# Kalakruti Review System Setup

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Backend Server
Open a terminal and run:
```bash
npm run server
```

The server will start on `http://localhost:5000`

### 3. Start the Frontend
Open another terminal and run:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Or Run Both Together
```bash
npm run start:all
```

## 📋 Features

✨ **Real-time Reviews** - Users can submit reviews and see them instantly
⭐ **Star Ratings** - 5-star rating system
💾 **MongoDB Storage** - All reviews are stored in MongoDB
🎨 **Beautiful UI** - Modern, responsive design
🔄 **Auto-refresh** - Reviews auto-update every 30 seconds

## 🔧 API Endpoints

- `GET /api/reviews` - Get all approved reviews
- `POST /api/reviews` - Submit a new review
- `GET /api/reviews/all` - Get all reviews (including pending)
- `PATCH /api/reviews/:id/approve` - Approve a review
- `DELETE /api/reviews/:id` - Delete a review

## 📝 Environment Variables

The `.env` file contains:
- `MONGODB_URI` - Your MongoDB connection string
- `PORT` - Server port (default: 5000)

## 🎯 Usage

1. Navigate to the Review Section on the website
2. Fill in your name, role (optional), rating, and review
3. Click "Submit Review"
4. Your review will appear on the page immediately!

## 🛡️ Note

Reviews are currently auto-approved. To enable manual approval:
- In `server/index.js`, change `approved: true` to `approved: false` on line 87
- Use the approve endpoint to manually approve reviews
