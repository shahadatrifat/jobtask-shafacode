import { useState } from "react";
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
import { Filter, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";

const ProductPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const displayedProducts = productsData.slice(0, 9);

  const FilterContent = () => (
    <ScrollArea className="h-full">
      <div className="p-6">
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

        <Button
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => setIsFilterOpen(false)}
        >
          Apply Filters
        </Button>
      </div>
    </ScrollArea>
  );

  return (
    <div className="min-h-screen bg-background mt-[72px]">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4 sm:mb-6">
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
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 border-b border-border pb-3 sm:pb-4 min-w-max sm:min-w-0">
            {["Plants", "Tools", "Fertilizers", "Seeds", "Medicine", "Equipments"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`text-sm font-medium pb-2 border-b-2 transition-colors whitespace-nowrap ${
                    tab === "Plants"
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-primary hover:border-accent"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        <div className="flex gap-6 lg:gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-secondary rounded-lg p-6 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <FilterContent />
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Plants
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Showing 9 of 40 products
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {/* Mobile Filter Button */}
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="lg:hidden flex-1 sm:flex-none"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
                    <SheetHeader className="p-6 pb-4">
                      <SheetTitle>Filter Products</SheetTitle>
                    </SheetHeader>
                    <FilterContent />
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <Select defaultValue="popular">
                  <SelectTrigger className="w-full sm:w-[180px] md:w-[200px] border-border bg-card">
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
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 w-full sm:w-auto">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;