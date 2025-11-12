import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Star, Upload } from "lucide-react";

const WriteReviewDialog =({ isOpen, onClose, product })=> {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    console.log("Review submitted:", { rating, reviewText });
    onClose();
    setRating(0);
    setReviewText("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Write Your Review
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Product Info */}
          <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h4 className="font-semibold text-sm">{product.name}</h4>
              <p className="text-accent font-bold">৳ {product.price}</p>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="text-center">
            <p className="text-sm font-medium mb-2">Please Rate This Product</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= rating
                        ? "fill-orange-400 text-orange-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div className="space-y-2">
            <Label>Describe your experience (optional)</Label>
            <Textarea
              placeholder="Share your thoughts about this product..."
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>

          {/* Upload Images */}
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground mb-1">
              Click to Upload or drag and drop
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              id="review-images"
            />
            <label
              htmlFor="review-images"
              className="text-xs text-primary cursor-pointer hover:underline"
            >
              Browse Files
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                onClose();
                setRating(0);
                setReviewText("");
              }}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WriteReviewDialog