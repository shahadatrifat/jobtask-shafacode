import { Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { image, name, price, originalPrice, rating, reviews } = product;
  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div 
      className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-[#CC7722] text-secondary text-xs font-semibold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        
        {/* Add to Cart Button on Image - Shows on Hover */}
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-[#CC7722]">৳ {price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ৳ {originalPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-secondary"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>

        {isHovered ? (
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
            size="sm"
          >
            View Details
          </Button>
        ) : (
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            size="sm"
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}