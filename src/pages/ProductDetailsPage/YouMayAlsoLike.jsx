import { Card } from "../../components/ui/card";

const YouMayAlsoLike = ({ products })=> {
  return (
    <div className="lg:col-span-3">
      <Card className="p-4">
        <h3 className="font-semibold text-lg mb-4">You may also like</h3>
        <div className="space-y-4">
          {products.map((item) => (
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
  );
}

export default YouMayAlsoLike