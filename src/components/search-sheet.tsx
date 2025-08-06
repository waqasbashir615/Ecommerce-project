import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import IMAGES from "@/assets/images";

// Props
interface SearchSheetProps {
  children: React.ReactNode;
}
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
}

interface RecentSearchItem {
  id: string;
  image: string;
  name: string;
  price: number;
}

const SearchSheet = ({ children }: SearchSheetProps) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const recentSearches: RecentSearchItem[] = [
    { id: "1", image: IMAGES.MEN2, name: "Classic Denim Jeans", price: 59.99 },
    { id: "2", image: IMAGES.MEN3, name: "Slim Fit T-Shirt", price: 29.99 },
    { id: "3", image: IMAGES.MEN4, name: "Running Shoes", price: 89.99 },
  ];

  const categories = [
    { value: "women's clothing", label: "Women Clothing" },
    { value: "men's clothing", label: "Men Clothing" },
    { value: "electronics", label: "Electronics" },
    { value: "jawellary", label: "jawellary" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (!search && !selectedCategory) return;
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await res.json();
        const filtered = data.filter((item: Product) => {
          const matchSearch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());
          const matchCategory = selectedCategory
            ? item.category === selectedCategory
            : true;
          return matchSearch && matchCategory;
        });
        setProducts(filtered);
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search, selectedCategory]);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[400px] bg-white text-black flex flex-col"
      >
        <SheetHeader className="border-b border-gray-300 pb-4">
          <SheetTitle className="text-lg font-semibold text-black">
            Search Our Site
          </SheetTitle>
        </SheetHeader>

        <div className="py-6 px-4 flex flex-col gap-4 flex-1 overflow-y-auto">
          <h3 className="font-semibold text-black text-lg">
            Search Here for Better Results
          </h3>{" "}
              <div className="gap-2 space-y-2 flex">
            <Input
              placeholder="Search products..."
              className="h-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Select onValueChange={(val) => setSelectedCategory(val)}>
              <SelectTrigger className="max-w-25 h-9">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {categories.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {loading && (
            <p className="text-center text-gray-500 mt-4">Searching...</p>
          )}
          {!loading && products.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-black mb-3">Search Results</h3>
              {products.map((item: Product) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center mb-4 pb-4 border-b border-black last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-black line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-800 mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  {/* <Button className="h-10 text-black hover:text-white hover:bg-black border border-black rounded-full">
                    <ArrowRight />
                  </Button> */}
                </div>
              ))}
            </div>
          )}
          {!loading && !search && !selectedCategory && (
            <div className="mt-4">
              <h3 className="font-semibold text-black mb-3">Recent Searches</h3>
              {recentSearches.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center mb-4 pb-4 border-b border-black last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm text-black line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-800 mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  {/* <Button className="h-10 text-black hover:text-white hover:bg-black border border-black rounded-full">
                    <ArrowRight />
                  </Button> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
