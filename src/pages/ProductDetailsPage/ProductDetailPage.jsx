import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Star, Heart, Minus, Plus } from "lucide-react";
import ProductCard from "../../shared/ProductCard";
import { productsData } from "../../api/productData";
import { Separator } from "../../components/ui/separator";
import { Badge } from "../../components/ui/badge";
import { Card } from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("150+");
  const [selectedType, setSelectedType] = useState("Deshi");
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

  const product = {
    name: "Tomato Seed",
    price: 300,
    rating: 4.8,
    reviews: 12,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=600&q=80",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
      "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=600&q=80",
      "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=600&q=80",
    ],
    category: "Indoor Plant",
    sizes: ["50 +", "150+", "500+"],
    sizePrices: { "50 +": "৳ 100", "150+": "৳ 300", "500+": "৳ 800" },
    types: ["Deshi", "Hybrid F1", "Bdsrmshi"],
    description: `সাবধানতা আমরা জানাতেই চাই ভোলস্টেরো আমাদের প্রতিষ্ঠান ট্রাই গার্ডেনিং বর্তমান প্যাকেট থেকে গাছটি যেমনটা হবে তেমন কোন বিষয়ে যদি আপনার জানার থাকলে বা অন্যান্য কিছু বুঝতে চাইলে তাহলে আমাদের সাথে যোগাযোগ করুন তাহলে আমরা নিশ্চিত করে দিব। See more...`,
  };

  const youMayLike = [
    {
      id: 1,
      name: "Fiddle Leaf Plant",
      category: "Indoor Plant",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=150&q=80",
    },
    {
      id: 2,
      name: "Snake Plant",
      category: "Indoor Plant",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=150&q=80",
    },
    {
      id: 3,
      name: "Monstera Deliciosa",
      category: "Indoor Plant",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=150&q=80",
    },
    {
      id: 4,
      name: "Vermi Compost",
      category: "Fertilizer",
      price: 380,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&q=80",
    },
    {
      id: 5,
      name: "Vine",
      category: "Outdoor Plant",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=150&q=80",
    },
  ];

  const relatedProducts = productsData.slice(0, 4);

  const reviews = [
    {
      id: 1,
      name: "Arentra Chowdhury",
      verified: true,
      rating: 5,
      date: "5 days ago",
      comment:
        "অসাধারণ প্ৰোডাক্ট ভাল মানের আন্দকার ছিল প্যাকেজিং ভাল ছিল দাম অনুযায়ী এভাবে আমার কাছে সন্তোষজনক মনে হয়েছে",
      reply: {
        name: "Reply From TriGardening",
        date: "4 days ago",
        comment:
          "ধন্যবাদ আপনার প্রশংসার জন্য আমরা সবসময় চেষ্টা করি যে আমাদের প্রতিটি পণ্য যেন সর্বোচ্চ মানের হয়",
      },
    },
    {
      id: 2,
      name: "Ashraful Islam",
      verified: true,
      rating: 4,
      date: "1 week ago",
      comment:
        "ভালো প্রোডাক্ট তবে ডেলিভারি একটু দেরি হয়েছিল সব মিলিয়ে ভালো অভিজ্ঞতা",
      reply: {
        name: "Reply From TriGardening",
        date: "6 days ago",
        comment:
          "আপনার মূল্যবান মতামতের জন্য ধন্যবাদ আমরা ডেলিভারি আরও দ্রুত করার চেষ্টা করছি",
      },
    },
    {
      id: 3,
      name: "Ridwa Koli",
      verified: true,
      rating: 4,
      date: "2 weeks ago",
      comment: "আলহামদুলিল্লাহ অনেক সুন্দর গাছ পেয়েছি খুবই ভালো লাগছে দেখতে",
      images: [
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=150&q=80",
        "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=150&q=80",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background mt-[72px]">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products/medicine">
                Medicine
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Seeds</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Section with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Images */}
          <div className="lg:col-span-5">
            <div className="bg-secondary rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Center: Product Info */}
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
              <Badge
                variant="outline"
                className="text-green-600 border-green-600"
              >
                In Stock
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {product.category}
            </p>

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

          {/* Right: You may also like */}
          <div className="lg:col-span-3">
            <Card className="p-4">
              <h3 className="font-semibold text-lg mb-4">You may also like</h3>
              <div className="space-y-4">
                {youMayLike.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        {item.category}
                      </p>
                      <p className="text-accent font-semibold text-sm">
                        ৳ {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Customer Reviews */}
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
                onClick={() => setIsReviewDialogOpen(true)}
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
                      <h5 className="font-semibold text-sm">
                        {review.reply.name}
                      </h5>
                      <span className="text-xs text-muted-foreground">
                        {review.reply.date}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">
                      {review.reply.comment}
                    </p>
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
      </div>

      {/* Login to Write Review Dialog */}
      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Write a Review
            </DialogTitle>
            <DialogDescription className="text-center">
              Please login to your account to write a review
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full"
              />
            </div>

            {/* Login Button with Social Icons */}
            <div className="flex items-center gap-3">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                Login to Write Review
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-border hover:bg-muted"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-5 w-5"
                />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="border-border hover:bg-muted"
              >
                <img
                  src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                  alt="Facebook"
                  className="h-5 w-5"
                />
              </Button>
            </div>

            {/* Signup Text */}
            <div className="text-center text-sm text-muted-foreground">
              Don’t have an account?{" "}
              <button className="text-primary hover:underline font-medium">
                Sign up
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
