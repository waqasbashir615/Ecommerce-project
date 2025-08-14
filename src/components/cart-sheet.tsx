import { useState } from "react";
import { ShoppingCart, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartItem from "./cart-item";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CartSheet = ({ children }: { children?: React.ReactNode }) => {
  const cartItems = useAppSelector((state) => state.cart.items || []);
  const [openCheckoutDialog, setOpenCheckoutDialog] = useState(false);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // const handleProceedToCheckout = () => {
  //   // Add your checkout logic here
  //   console.log("Proceeding to checkout with items:", cartItems);
  //   setOpenCheckoutDialog(false);
  //   // You might want to redirect to a checkout page here
  // };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          {children || (
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {totalItems}
                </Badge>
              )}
            </Button>
          )}
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md bg-white p-5">
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              Your Cart
              {totalItems > 0 && (
                <Badge variant="secondary" className="px-2 py-1 text-sm">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </Badge>
              )}
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-4 py-4 h-[calc(100vh-220px)] overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                <p className="text-lg font-medium text-muted-foreground">
                  Your cart is empty
                </p>
                <p className="text-sm text-muted-foreground">
                  Start shopping to add items to your cart
                </p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="border border-black rounded-lg p-1 hover:bg-black cursor-pointer transition-colors duration-200">
                <Button
                  className="w-full bg-black text-white hover:bg-black hover:text-white cursor-pointer"
                  size="lg"
                  onClick={() => setOpenCheckoutDialog(true)}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Checkout Confirmation Dialog */}
      <Dialog open={openCheckoutDialog} onOpenChange={setOpenCheckoutDialog}>
        <DialogContent className="sm:max-w-[425px] bg-white p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Proceed to Checkout?
            </DialogTitle>
            <DialogDescription>
              You're about to checkout with {totalItems}{" "}
              {totalItems === 1 ? "item" : "items"} totaling $
              {totalPrice.toFixed(2)}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <h4 className="font-medium">Order Summary</h4>
              <div className="text-sm text-muted-foreground">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpenCheckoutDialog(false)}
            >
              Continue Shopping
            </Button>
            {/* <Button onClick={handleProceedToCheckout} className="gap-2">
              <CreditCard className="h-4 w-4" />
              Proceed to Payment
            </Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CartSheet;
