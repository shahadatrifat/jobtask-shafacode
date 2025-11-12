import { Card } from "../../components/ui/card";

export default function SuggestedProducts({ items }) {
  return (
    <Card className="p-4">
      <h3 className="font-semibold text-lg mb-4">You may also like</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h4 className="font-medium text-sm">{item.name}</h4>
              <p className="text-xs text-muted-foreground">{item.category}</p>
              <p className="text-accent font-semibold text-sm">৳ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
