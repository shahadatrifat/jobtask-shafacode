import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import { Link } from "react-router";

const CheckoutUser = () => {
  const cartItems = [
    {
      id: 1,
      name: "Tomato Seed",
      price: 350,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=150&q=80",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 120,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=150&q=80",
    },
    {
      id: 3,
      name: "Pruning Shears",
      price: 180,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&q=80",
    },
  ];

  const subtotal = 770;
  const shipping = 50;
  const total = 820;

  return (
    <div className="min-h-screen bg-background mt-[72px]">
      <div className="container mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              1
            </div>
            <span className="font-medium">Shopping Cart</span>
          </div>
          <div className="w-12 h-0.5 bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              2
            </div>
            <span className="font-medium text-primary">Review & Checkout</span>
          </div>
          <div className="w-12 h-0.5 bg-border"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary text-muted-foreground flex items-center justify-center font-semibold">
              3
            </div>
            <span className="text-muted-foreground">Order Confirmed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Review & Checkout */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Review & Checkout</h2>
              <p className="text-sm text-muted-foreground mb-6">
                যেকোন কিছু জানার থাকলে আমাদের সাথে যোগাযোগ করুন <span className="text-primary font-semibold">01790367800</span>
              </p>

              {/* Shipping Address */}
              <Card className="p-4 mb-6 bg-secondary border-primary border-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">Shipping Address</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-600">
                    Default
                  </Badge>
                </div>
                <p className="text-sm text-foreground mb-1">
                  Md Arif Hossain Alvi - +8801234567890
                </p>
                <p className="text-sm text-muted-foreground">
                  House 123, Road 12, Mirpur-10, Dhaka-1216, Bangladesh
                </p>
              </Card>

              <div className="space-y-2  mb-6">
                <Label>Payment Method *</Label>
                <Select defaultValue="cod">
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-secondary">
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="bkash">bKash</SelectItem>
                    <SelectItem value="nagad">Nagad</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Payment Number (Optional)</Label>
                <Input placeholder="01XXXXXXXXX" />
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Address 2</h3>
              <p className="text-sm text-muted-foreground mb-6">
                আপনার ঠিকানায় দ্রুত পৌছানোর জন্য সম্পূর্ণ ঠিকানাটি নিচের ঘরে দিন
              </p>
              <div className="space-y-2">
                <Label>Comment</Label>
                <Textarea
                  placeholder="Additional delivery instructions..."
                  rows={4}
                />
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          ৳ {item.price} x {item.quantity}
                        </span>
                        <span className="font-semibold text-sm">
                          ৳ {item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sub Total</span>
                  <span className="font-semibold">৳ {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping Charge</span>
                  <span className="font-semibold">৳ {shipping}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">TOTAL</span>
                  <span className="text-2xl font-bold text-accent">৳ {total}</span>
                </div>
              </div>

              <Link to="/thankyou">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                Proceed to Checkout
              </Button></Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutUser