import { useContext, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Separator } from "../../components/ui/separator";
import { AuthContext } from "../../contexts/AuthContext";
import ProductCard from "../../shared/ProductCard";
import { productsData } from "../../api/productData";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import YouMayAlsoLike from "./YouMayAlsoLike";
import ReviewLoginDialog from "./ReviewLoginDialog";
import WriteReviewDialog from "./WriteReviewDialog";
import CustomerReviews from "./CustomerReview";


const ProductDetailPage=()=> {
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const { signInWithGoogle, setUser, user } = useContext(AuthContext);

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

  const relatedProducts = productsData.slice(0, 4);

  const handleReviewClick = () => {
    if (user) {
      setIsWriteReviewOpen(true);
    } else {
      setIsReviewDialogOpen(true);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      setUser && setUser(result.user);
      setIsReviewDialogOpen(false);
      setIsWriteReviewOpen(true);
      console.log("Logged in with Google:", result.user);
    } catch (error) {
      console.error("Google login failed:", error.message);
    }
  };

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
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
          <YouMayAlsoLike products={youMayLike} />
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
        <CustomerReviews
          reviews={reviews}
          onWriteReview={handleReviewClick}
        />
      </div>

      {/* Dialogs */}
      <ReviewLoginDialog
        isOpen={isReviewDialogOpen}
        onClose={() => setIsReviewDialogOpen(false)}
        onGoogleLogin={handleGoogleLogin}
      />

      <WriteReviewDialog
        isOpen={isWriteReviewOpen}
        onClose={() => setIsWriteReviewOpen(false)}
        product={product}
      />
    </div>
  );
}

export default ProductDetailPage;