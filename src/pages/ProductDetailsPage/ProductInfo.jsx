import { useState } from "react";
import { Star, Heart, Minus, Plus } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const ProductInfo=({ product })=> {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("150+");
  const [selectedType, setSelectedType] = useState("Deshi");

  return (
    <div className="lg:col-span-4">
      <h1 className="text-3xl font-bold text-foreground mb-3">
        {product.name}
      </h1>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "fill-orange-400 text-orange-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="text-sm text-orange-400 ml-1">
            ({product.reviews} Reviews)
          </span>
        </div>
        <Badge variant="outline" className="text-green-600 border-green-600">
          In Stock
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground mb-6">{product.category}</p>

      {/* Size Selection */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Size</h3>
        <div className="flex gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                selectedSize === size
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="font-medium">{size}</div>
              <div className="text-xs text-muted-foreground">
                {product.sizePrices[size]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Select Type */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Select Type</h3>
        <div className="flex gap-3">
          {product.types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                selectedType === type
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Price */}
      <div className="text-3xl font-bold text-accent mb-6">
        ৳ {product.price}
      </div>

      {/* Quantity & Actions */}
      <div className="flex items-center gap-4 mb-6">
        <label className="font-semibold">Quantity</label>
        <div className="flex items-center border-2 border-border rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-secondary transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-6 font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-secondary transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="border-2 border-border rounded-full"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductInfo