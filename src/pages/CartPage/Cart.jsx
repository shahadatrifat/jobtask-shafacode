import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router";

const Cart = () => {
  const [cartItems] = useState([
    {
      id: 1,
      name: "Tomato Seed",
      category: "Seeds",
      price: 350,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=150&q=80",
    },
    {
      id: 2,
      name: "Snake Plant",
      category: "Indoor Plant",
      price: 120,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=150&q=80",
    },
    {
      id: 3,
      name: "Pruning Shears",
      category: "Equipment",
      price: 180,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&q=80",
    },
  ]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background mt-[72px]">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">
          Your Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-4">3 Items</p>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-4 border-b border-border last:border-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.category}
                      </p>
                      <p className="text-accent font-bold">৳ {item.price}</p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <button className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <div className="flex items-center border-2 border-border rounded-lg">
                        <button className="p-2 hover:bg-secondary transition-colors">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-semibold">
                          {item.quantity}
                        </span>
                        <button className="p-2 hover:bg-secondary transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-semibold">
                        ৳ {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Item</span>
                  <span className="font-semibold">৳ {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping Charge</span>
                  <span className="font-semibold">৳ {shipping}</span>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <Input placeholder="Coupon Code" />
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Apply
                  </Button>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold text-accent">
                    ৳ {total}
                  </span>
                </div>
              </div>

              <Link to="/checkout">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                  Proceed to Checkout
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
