import { Minus, Plus, Star, Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/type/product";
import { Separator } from "@radix-ui/react-select";
import { Button } from "./ui/button";

interface AddCartFormProps {
  product: Product;
}

const AddCartForm = ({ product }: AddCartFormProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="space-y-4  text-sm p-10">
      <h2 className="text-2xl font-bold mb-2 cursor-pointer pb-3 pt-3">
        {product.title}
      </h2>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-xl font-semibold">${product.price}</p>
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
      <div className="text-xs space-y-1 text-muted-foreground">
        <p className="text-[14px]">
          <strong>Size:</strong> S, M, L
        </p>
      </div>
      <div className="flex gap-6 justify-end">
        <Button className="px-6 border border-black hover:bg-black hover:text-white text-black text-md">
          BUY IT NOW
        </Button>
        <Button className="px-6 border border-black hover:bg-black hover:text-white text-black text-md">
          Quick Shop
        </Button>
        <Separator />
      </div>
    </div>
  );
};

export default AddCartForm;
