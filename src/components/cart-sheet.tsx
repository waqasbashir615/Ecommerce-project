import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "@/store/services/fake-store-api";
import { useState } from "react";
import { Trash } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

interface CartSheetProps {
  children: React.ReactNode;
  itemCount: number;
}

const CartSheet = ({ children }: CartSheetProps) => {
  const [deleteProduct] = useDeleteProductMutation();
  const { data: products } = useGetProductsQuery();
  const [visibleCount] = useState(10);
  const [deletedIds, setDeletedIds] = useState<number[]>([]);

  // Delete modal state
  const [deleteModal, setDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<{
    id: number;
    title: string;
  } | null>(null);

  const confirmDelete = async () => {
    if (!productToDelete) return;
    try {
      await deleteProduct(productToDelete.id).unwrap();
      setDeletedIds((prev) => [...prev, productToDelete.id]);
      toast.success("Product deleted", { position: "bottom-left" });
    } catch {
      toast.error("Failed to delete product.");
    } finally {
      setDeleteModal(false);
      setProductToDelete(null);
    }
  };

  const visibleProducts = (products || [])
    .filter((product) => !deletedIds.includes(product.id))
    .slice(0, visibleCount);

  const total = visibleProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-96 bg-white flex flex-col"
      >
        <SheetHeader>
          <SheetTitle>Your Shopping Cart</SheetTitle>
          <SheetDescription>
            {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "item" : "items"} in your cart
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 mt-4 space-y-4">
          {visibleProducts.map((product) => (
            <div key={product.id} className="flex items-center border-b pb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4 flex-1">
                <h4 className="font-medium line-clamp-2">{product.title}</h4>
                <p className="text-sm text-gray-600">${product.price} × 1</p>
              </div>
              <Button
                className="text-gray-500 hover:text-red-500"
                size="icon"
                variant="ghost"
                onClick={() => {
                  setProductToDelete({ id: product.id, title: product.title });
                  setDeleteModal(true);
                }}
              >
                <Trash />
              </Button>
            </div>
          ))}
        </div>

        <div className="border-t mt-4 pt-4 px-4 sticky bottom-0 bg-white">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Checkout Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="my-4 py-2 w-full bg-white border border-black text-black rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors">
                Proceed to Checkout
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle className="text-xl">Confirm Checkout</DialogTitle>
                <DialogDescription className="text-base mt-2 text-gray-700">
                  Are you sure you want to proceed with checkout for:
                  <div className="mt-4 text-center space-y-4">
                    <div>
                      <span className="text-3xl font-bold">
                        {visibleProducts.length}
                      </span>{" "}
                      <span className="text-xl">
                        {visibleProducts.length === 1 ? "item" : "items"}
                      </span>
                    </div>
                    <div>
                      <span className="text-xl">Total:</span>{" "}
                      <span className="text-3xl font-bold">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="mt-6">
                <DialogClose asChild>
                  <div className="w-full  text-center border border-black rounded-lg p-1 hover:bg-black cursor-pointer">
                    <Button
                      onClick={() =>
                        toast.success("Checkout confirmed!", {
                          position: "bottom-left",
                        })
                      }
                      className="w-full bg-black text-white hover:bg-black cursor-pointer"
                    >
                      Yes, Proceed
                    </Button>
                  </div>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </SheetContent>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteModal} onOpenChange={setDeleteModal}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Confirm Deletion
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-700 mt-2">
              Are you sure you want to delete{" "}
              <span className="font-medium">{productToDelete?.title}</span> from
              the cart?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6 flex justify-end">
            <Button
              variant="ghost"
              onClick={() => setDeleteModal(false)}
              className="w-max border"
            >
              Cancel
            </Button>
            <Button
              onClick={confirmDelete}
              className="w-max bg-red-600 text-white hover:bg-red-700"
            >
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sheet>
  );
};

export default CartSheet;
