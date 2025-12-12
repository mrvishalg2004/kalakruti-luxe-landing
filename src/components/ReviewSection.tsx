import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const API_URL = "http://localhost:3001/api";

interface Review {
  _id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  createdAt: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  // Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5,
  });

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/reviews`);
      const data = await response.json();
      if (data.success) {
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      toast({
        title: "Error",
        description: "Failed to load reviews. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
    // Refresh reviews every 30 seconds for real-time updates
    const interval = setInterval(fetchReviews, 30000);
    return () => clearInterval(interval);
  }, []);

  // Submit review
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.content) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Review Submitted! ✨",
          description: "Thank you for your feedback!",
        });

        // Reset form
        setFormData({
          name: "",
          role: "",
          content: "",
          rating: 5,
        });

        // Refresh reviews
        fetchReviews();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Submission Failed",
        description: "Could not submit your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-purple-600 animate-pulse" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
              Share Your Experience
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Customer </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
              Reviews
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your feedback helps us grow and serve you better
          </p>
        </div>

        {/* Display Reviews */}
        <div className="mb-20">
          {/* Enhanced Header for Customer Reviews */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400 animate-bounce" />
                <Star className="w-6 h-6 fill-purple-500 text-purple-500 animate-bounce" style={{ animationDelay: '0.1s' }} />
                <Star className="w-6 h-6 fill-pink-500 text-pink-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">What Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
                Customers Say
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real experiences from our valued customers
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-purple-600 border-t-transparent"></div>
              <p className="mt-6 text-gray-600 text-lg font-medium">Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-6">
                <Sparkles className="w-16 h-16 mx-auto text-purple-300" />
              </div>
              <p className="text-gray-600 text-xl font-medium">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="relative px-4">
              {/* Carousel Container */}
              <div className="overflow-hidden -mx-4" ref={emblaRef}>
                <div className="flex">
                  {reviews.map((review) => (
                    <div
                      key={review._id}
                      className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                    >
                      <div className="h-full">
                        <Card className="relative h-full border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 bg-white/90 backdrop-blur-sm">
                          {/* Gradient Top Border */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-t-xl"></div>
                          
                          {/* Quote Icon */}
                          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl border-4 border-white">
                              <span className="text-white text-2xl font-serif">"</span>
                            </div>
                          </div>

                          <CardContent className="p-6 pt-10">
                            {/* Star Rating */}
                            <div className="flex gap-1 mb-4 justify-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className="w-5 h-5 fill-amber-400 text-amber-400" 
                                />
                              ))}
                            </div>

                            {/* Review Content */}
                            <div className="mb-6 min-h-[120px] flex items-center">
                              <p className="text-gray-700 text-base italic leading-relaxed text-center w-full">
                                "{review.content}"
                              </p>
                            </div>

                            {/* Author Info */}
                            <div className="border-t border-purple-100 pt-4 text-center">
                              <p className="font-bold text-gray-900 text-lg mb-1">{review.name}</p>
                              <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold mb-2">
                                {review.role}
                              </p>
                              <p className="text-xs text-gray-500 font-medium">
                                {new Date(review.createdAt).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-3 mt-10">
                <Button
                  onClick={scrollPrev}
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 text-purple-600 transition-all duration-300 hover:scale-105 shadow-md"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={scrollNext}
                  size="icon"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-purple-200 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Write a Review
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="border-purple-200 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Role/Designation (Optional)
                  </label>
                  <Input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., Bride, Designer, Customer"
                    className="border-purple-200 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="transition-transform hover:scale-125"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= formData.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Your Review <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Share your experience with us..."
                    rows={5}
                    className="border-purple-200 focus:border-purple-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-6 text-lg"
                >
                  {submitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Review
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Add custom animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default ReviewSection;
