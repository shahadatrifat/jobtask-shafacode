import { Star } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const CustomerReviews = ({ reviews, onWriteReview })=> {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Customer Reviews & Ratings
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        See what other gardeners are saying about this product
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Rating Summary */}
        <div className="lg:col-span-1 bg-card rounded-lg p-6 text-center border">
          <div className="text-5xl font-bold text-foreground mb-2">4.7</div>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Based on 247 reviews
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onWriteReview}
          >
            Write Review
          </Button>
        </div>

        {/* Rating Bars */}
        <div className="lg:col-span-2 space-y-3">
          {[
            { star: 5, count: 847, percentage: 90 },
            { star: 4, count: 674, percentage: 70 },
            { star: 3, count: 75, percentage: 30 },
            { star: 2, count: 37, percentage: 15 },
            { star: 1, count: 14, percentage: 5 },
          ].map((item) => (
            <div key={item.star} className="flex items-center gap-3">
              <span className="text-sm font-medium w-12">
                {item.star} Star
              </span>
              <div className="flex-1 bg-secondary rounded-full h-3 overflow-hidden">
                <div
                  className="bg-accent h-full rounded-full transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground w-12 text-right">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Highlights */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4">Review Highlights</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Easy to Grow",
            "Good Quality",
            "Arrival Healthy",
            "Worth Value",
            "Smaller than Expected",
          ].map((tag) => (
            <Badge key={tag} variant="secondary" className="px-4 py-2">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-card rounded-lg p-6 border">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary" />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{review.name}</h4>
                    {review.verified && (
                      <Badge variant="outline" className="text-xs">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {review.date}
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-foreground mb-4">{review.comment}</p>
            {review.images && (
              <div className="flex gap-2 mb-4">
                {review.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Review ${idx + 1}`}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                ))}
              </div>
            )}
            {review.reply && (
              <div className="ml-8 mt-4 bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-semibold text-sm">{review.reply.name}</h5>
                  <span className="text-xs text-muted-foreground">
                    {review.reply.date}
                  </span>
                </div>
                <p className="text-sm text-foreground">{review.reply.comment}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="border-2 border-border px-8">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
}

export default CustomerReviews;