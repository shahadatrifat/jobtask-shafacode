import ProductCard from "../../shared/ProductCard";
import { productsData } from "../../api/productData";
import { Button } from "../../components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";
import { Separator } from "../../components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";
import { ScrollArea } from "../../components/ui/scroll-area";

const ProductPage = () => {
  const displayedProducts = productsData.slice(0, 9);

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
              <BreadcrumbPage>Plants</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Secondary Navigation */}
        <div className="flex flex-wrap gap-6 mb-8 border-b border-border pb-4">
  {[
    "Plants",
    "Tools",
    "Fertilizers",
    "Seeds",
    "Medicine",
    "Equipments",
  ].map((tab) => (
    <button
      key={tab}
      className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
        tab === "Plants"
          ? "text-primary border-primary"
          : "text-muted-foreground border-transparent hover:text-primary hover:border-accent"
      }`}
    >
      {tab}
    </button>
  ))}
</div>


        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-64 flex-shrink-0">
            <ScrollArea className="bg-secondary rounded-lg p-6 sticky  max-h-[calc(100vh-120px)]">
              <h3 className="text-lg font-semibold mb-6 text-foreground">
                Filter Products
              </h3>

              {/* Category */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm">
                    <Checkbox id="indoor" />
                    Indoor Plants (12)
                  </Label>
                  <Label className="flex items-center gap-2 text-sm">
                    <Checkbox id="outdoor" />
                    Outdoor Plants (14)
                  </Label>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  defaultValue="10000"
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>৳ 0</span>
                  <span>৳ 10000+</span>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Size */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Size</h4>
                <div className="space-y-2">
                  {["Small (22)", "Medium (27)", "Large (18)"].map((size) => (
                    <Label key={size} className="flex items-center gap-2 text-sm">
                      <Checkbox />
                      {size}
                    </Label>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {/* Light Requirements */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Light Requirements</h4>
                <div className="space-y-2">
                  {["Low Light (16)", "Medium Light (14)", "Bright Light (8)"].map(
                    (light) => (
                      <Label key={light} className="flex items-center gap-2 text-sm">
                        <Checkbox />
                        {light}
                      </Label>
                    )
                  )}
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Apply Filters
              </Button>
            </ScrollArea>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Plants</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Showing 9 of 40 products
                </p>
              </div>

              <Select defaultValue="popular">
                <SelectTrigger className="w-[200px] border-border bg-card">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Sort By: Popular</SelectItem>
                  <SelectItem value="low">Price: Low to High</SelectItem>
                  <SelectItem value="high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProductPage