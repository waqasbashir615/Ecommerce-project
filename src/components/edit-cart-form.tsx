import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Minus, Plus, Star, Heart } from "lucide-react";
// import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { useState } from "react";
import { Badge } from "./ui/badge";
import type { Product } from "@/type/product";
import { Separator } from "@radix-ui/react-select";

interface EditCartFormProps {
  product: Product;
}

const EditCartForm = ({ product }: EditCartFormProps) => {
  // const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* ✅ Carousel Section */}
      <div className="relative group py-6">
        <Carousel className="w-full">
          <CarouselContent>
            {[1, 2, 3].map((_, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="w-full h-[500px] flex items-center justify-center bg-white">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 group-hover:opacity-100 opacity-0 transition" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 group-hover:opacity-100 opacity-0 transition" />
        </Carousel>
      </div>

      {/* ✅ Product Details Section */}
      <div className="text-black h-[550px] p-6 leading-relaxed text-sm md:text-base overflow-y-auto scrollbar-hidden">
        <div className="space-y-4 max-w-md text-sm">
          <h2 className="text-2xl font-bold mb-2 cursor-pointer pb-3 pt-3">
            {product.title}
          </h2>

          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-xl font-semibold">
              ${product.price}
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating?.rate || 4)
                      ? "fill-amber-400 stroke-amber-400"
                      : "fill-none stroke-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-gray-600">{product.description}</p>

          {/* <div>
            <p className="font-semibold mb-2">SIZE: {size}</p>
            <ToggleGroup
              type="single"
              value={size}
              onValueChange={(val) => val && setSize(val)}
            >
              <ToggleGroupItem value="S">S</ToggleGroupItem>
              <ToggleGroupItem value="M">M</ToggleGroupItem>
              <ToggleGroupItem value="L">L</ToggleGroupItem>
            </ToggleGroup>
          </div> */}

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded">
              <Button
                variant="ghost"
                size="icon"
                onClick={decreaseQty}
                className="bg-black text-white rounded-xs"
              >
                <Minus />
              </Button>
              <span className="px-2 font-semibold">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseQty}
                className="bg-black text-white rounded-xs"
              >
                <Plus />
              </Button>
            </div>
            <Button className="border border-black text-black hover:bg-black hover:text-white hover:border-black">
              ADD TO CART
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label={isFavorite ? "Unfavorite" : "Favorite"}
            >
              <Heart
                className={`w-4 h-4 ${
                  isFavorite ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
          </div>

          <Button className="w-full bg-black text-white text-md">
            BUY IT NOW
          </Button>

          {/* <div className="flex space-x-4 text-xs text-muted-foreground">
            <p className="cursor-pointer">Size Guide</p>
            <p className="cursor-pointer">Delivery & Return</p>
            <p className="cursor-pointer">Ask a Question</p>
          </div> */}

          <Separator />

          <div className="text-xs space-y-1 text-muted-foreground">
            <p className="text-[14px]">
              <strong>Size:</strong> S, M, L
            </p>
            <strong>Category</strong>
            <div className="my-3 flex flex-wrap gap-4 gap-y-2 whitespace-pre-wrap">
              <Badge className="bg-gray-100 px-3 py-1 text-black">
                {product.category}
              </Badge>
            </div>
            <strong className="mt-6">Tags:</strong>
            <div className="flex m2-4 mt-3 flex-wrap gap-4 gap-y-2 whitespace-pre-wrap">
              <Badge className="bg-gray-100 px-3 py-1 text-black">White</Badge>
              <Badge className="bg-gray-100 px-3 py-1 text-black">Black</Badge>
              <Badge className="bg-gray-100 px-3 py-1 text-black">S M L</Badge>
              <Badge className="bg-gray-100 px-3 py-1 text-black">
                Kalles $7-$50
              </Badge>
              <Badge className="bg-gray-100 px-3 py-1 text-black">Women</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCartForm;
