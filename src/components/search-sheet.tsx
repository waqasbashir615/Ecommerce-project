import { FaSearch } from "react-icons/fa";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import IMAGES from "@/assets/images";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface SearchSheetProps {
  children: React.ReactNode;
}

interface RecentSearchItem {
  id: string;
  image: string;
  name: string;
  price: number;
}

const SearchSheet = ({ children }: SearchSheetProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const recentSearches: RecentSearchItem[] = [
    { id: "1", image: IMAGES.MEN2, name: "Classic Denim Jeans", price: 59.99 },
    { id: "2", image: IMAGES.MEN3, name: "Slim Fit T-Shirt", price: 29.99 },
    { id: "3", image: IMAGES.MEN4, name: "Running Shoes", price: 89.99 },
  ];

  const categories = [
    { value: "jeans", label: "Jeans" },
    { value: "t-shirts", label: "T-Shirts" },
    { value: "shoes", label: "Shoes" },
    { value: "caps", label: "Caps" },
    { value: "sneakers", label: "Sneakers" },
    { value: "bags", label: "Bags" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      "Searching for:",
      searchQuery,
      "in category:",
      selectedCategory
    );
  };
  const navigate = useNavigate();

  const goToNext = () => {
    navigate("/wishlist");
  };
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
          <form onSubmit={handleSearch} className="space-y-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full h-10 py-5 rounded-lg border border-black focus:ring-2 focus:ring-black focus:border-transparent text-black bg-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black border border-black">
                <SelectGroup>
                  <SelectLabel className="text-black">Categories</SelectLabel>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value}
                      className="hover:bg-black hover:text-white cursor-pointer"
                    >
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full h-10 pl-10 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              </div>

              {/* <Button
                type="submit"
                className="h-10 w-auto   bg-black text-white rounded-lg font-medium hover:bg-white hover:text-black border border-black transition-colors"
              >
                Search
              </Button> */}
            </div>
          </form>

          {recentSearches.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-black mb-3">Recent Searches</h3>

              {recentSearches.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center mb-4 pb-4 border-b border-black last:border-b-0 last:pb-0 last:mb-0"
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
                  <Button className="h-10 text-black hover:text-white hover:bg-black border border-black-1 rounded-full">
                    <ArrowRight />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <SheetFooter className="px-4 py-4 border-t border-black">
          <Button
            onClick={goToNext}
            className="flex items-center gap-2 text-black font-medium hover:text-white hover:bg-black border border-black transition-colors rounded-full px-4 py-2"
          >
            View All <ArrowRight size={18} />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
