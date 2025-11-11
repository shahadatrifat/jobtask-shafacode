import ProductCard from "../shared/ProductCard";

function PopularProducts() {
  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 2000,
      originalPrice: 3400,
      rating: 4.5,
      reviews: 124,
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80",
    },
    {
      id: 2,
      name: "Organic Compost Fertilizer",
      price: 60,
      originalPrice: 440,
      rating: 4.8,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    },
    {
      id: 3,
      name: "Pruning Shears",
      price: 180,
      originalPrice: 450,
      rating: 4.6,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    },
    {
      id: 4,
      name: "Snake Plant",
      price: 150,
      originalPrice: 500,
      rating: 4.7,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&q=80",
    },
  ];

  return (
    <section className="py-16 px-8 bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Popular Products
          </h2>
          <p className="text-muted-foreground">
            Discover our most popular gardening essentials
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default PopularProducts;
