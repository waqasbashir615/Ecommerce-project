import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeFromCart, updateQuantity } from "@/store/slice/cart-slice";
import { useAppDispatch } from "@/store/hooks";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CartItemType {
  id: number;
  quantity: number;
  price: number;
  title: string;
  image: string;
}

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [quantityInput, setQuantityInput] = useState(item.quantity.toString());

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    setQuantityInput(newQuantity.toString());
  };

  const handleInputBlur = () => {
    const num = parseInt(quantityInput);
    if (!isNaN(num) && num >= 1 && num <= 99) {
      handleQuantityChange(num);
    } else {
      setQuantityInput(item.quantity.toString());
    }
  };

  return (
    <>
      <div className="flex items-start gap-4 py-4 border-b h-fit">
  {/* Product Image */}
  <div className="flex-shrink-0">
    <img
      src={item.image}
      alt={item.title}
      className="w-20 h-20 object-contain rounded-md bg-gray-50"
      onError={(e) => {
        (e.target as HTMLImageElement).src = "/placeholder-product.jpg";
        (e.target as HTMLImageElement).classList.add("bg-gray-100");
      }}
    />
  </div>

  {/* Product Details */}
  <div className="flex-1 flex flex-col gap-2">
    {/* Title and Price */}
    <div>
      <h3 className="font-medium line-clamp-2 text-gray-900">{item.title}</h3>
      <p className="text-sm font-semibold text-gray-800">${item.price.toFixed(2)}</p>
    </div>

    {/* Quantity Controls and Delete */}
    <div className="flex items-center justify-between">
      {/* Quantity Adjuster */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 border-gray-300 hover:bg-gray-50"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
          aria-label="Decrease quantity"
        >
          <Minus className="h-3 w-3 text-gray-600" />
        </Button>
        
        <Input
          type="number"
          min="1"
          max="99"
          value={quantityInput}
          onChange={(e) => setQuantityInput(e.target.value)}
          onBlur={handleInputBlur}
          className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-gray-300"
          aria-label="Product quantity"
        />
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 border-gray-300 hover:bg-gray-50"
          onClick={() => handleQuantityChange(item.quantity + 1)}
          disabled={item.quantity >= 99}
          aria-label="Increase quantity"
        >
          <Plus className="h-3 w-3 text-gray-600" />
        </Button>
      </div>

      {/* Delete Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-destructive hover:text-destructive/90 cursor-pointer h-8 w-8 hover:bg-destructive/10"
        onClick={() => setOpenDeleteDialog(true)}
        aria-label="Remove item"
      >
        <Trash2 className="text-2xl text-red-400 cursor-pointer" />
      </Button>
    </div>
  </div>
</div>

      <Dialog open={openDeleteDialog} onOpenChange={setOpenDeleteDialog}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>Remove this item?</DialogTitle>
            <DialogDescription>
              This will remove "{item.title}" from your cart.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpenDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              className="bg-black text-white hover:bg-black hover:text-white"
              onClick={() => {
                dispatch(removeFromCart(item.id));
                setOpenDeleteDialog(false);
              }}
            >
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CartItem;
