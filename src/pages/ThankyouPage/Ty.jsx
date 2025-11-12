import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const Ty = () => {
  const orderItems = [
    {
      id: 1,
      name: "Snake Plant",
      category: "Indoor Plant",
      price: 350,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=150&q=80",
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      category: "Indoor Plant",
      price: 180,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=150&q=80",
    },
    {
      id: 3,
      name: "Organic Compost",
      category: "Fertilizer",
      price: 120,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&q=80",
    },
  ];

  const subtotal = 1010;
  const shipping = 50;
  const total = 1060;

  return (
    <div
  className="min-h-screen bg-cover bg-center mt-[72px]"
  style={{
    backgroundImage: "url('/bg_shafacode.png')",
  }}
>

      <div className="container mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="font-medium">Shopping Cart</span>
          </div>
          <div className="w-12 h-0.5 bg-primary"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="font-medium">Review & Checkout</span>
          </div>
          <div className="w-12 h-0.5 bg-primary"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="font-medium text-primary">Order Confirmed</span>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              Thank you for purchasing from TriGardening
            </h1>
            <div className="space-y-2 mb-6">
              <h2 className="text-xl font-semibold text-foreground">Order Confirmed</h2>
              <p className="text-muted-foreground">
                Your order has been placed successfully.
              </p>
              <p className="text-sm text-muted-foreground">
                আমরা আমাদের টিম খুব দ্রুত তা পাঠানোর চেষ্টা করবো ধন্যবাদ করি <br />
                কাস্টমার হওয়ার জন্য এই প্রোডাক্টটি সাবধানে কল জালি
              </p>
            </div>

            {/* Order Details */}
            <Card className="p-6 bg-secondary text-left mb-6">
              <h3 className="font-semibold text-lg mb-4">Order #10012</h3>

              <div className="space-y-3">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">৳ {item.price}</p>
                      <p className="text-xs text-muted-foreground">x {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sub Total</span>
                  <span className="font-semibold">৳ {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping Charge</span>
                  <span className="font-semibold">৳ {shipping}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-accent">৳ {total}</span>
                </div>
              </div>
            </Card>

            <Link to="/products">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg mb-4">
                ← Return to My Order List
              </Button>
            </Link>
          </Card>

          {/* Your Information */}
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                <p className="font-medium">Ariful Wadoodhosen</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone Number</p>
                <p className="font-medium">+8801 785 - 640768</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground mb-1">Delivery Address</p>
                <p className="font-medium">House 25, Road 12, Doyaganj, Dhaka-1205</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Ty;