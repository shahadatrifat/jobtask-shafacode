import { Link } from "react-router";
import { Sprout, Droplet, Wrench, Flower2 } from "lucide-react";

  function ShopByCategory() {
  const categories = [
    {
      id: 1,
      name: "Plants",
      description: "Indoor & Outdoor Plants for lovely living",
      icon: Sprout,
      link: "/category/plants",
    },
    {
      id: 2,
      name: "Medicine",
      description: "Natural Plant Care Solutions",
      icon: Droplet,
      link: "/category/medicine",
    },
    {
      id: 3,
      name: "Equipment",
      description: "Professional Gardening tools",
      icon: Wrench,
      link: "/category/equipment",
    },
    {
      id: 4,
      name: "Fertilizers",
      description: "Solve all farming plant production",
      icon: Flower2,
      link: "/category/fertilizers",
    },
  ];

  return (
    <section className="py-16 px-8 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={category.link}
                className="group relative bg-secondary rounded-lg p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ShopByCategory