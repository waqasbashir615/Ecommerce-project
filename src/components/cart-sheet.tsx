import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
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
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface CartSheetProps {
  children: React.ReactNode;
  itemCount: number;
}

const CartSheet = ({ children }: CartSheetProps) => {
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [visibleCount] = useState(10);
  const [deletedIds, setDeletedIds] = useState<number[]>([]); // 👈 Track deleted products locally

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (isError || !products) {
    return (
      <p className="text-center text-red-500 font-semibold">
        Failed to load products.
      </p>
    );
  }

  const handleDelete = async (id: number, title: string) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );
    if (!confirmDelete) return;

    try {
      const response = await deleteProduct(id).unwrap();
      console.log("Deleted product response:", response);

      // Simulate deletion in frontend
      setDeletedIds((prev) => [...prev, id]);
    } catch (error) {
      alert("Failed to delete product.");
      console.error(error);
    }
  };

  // Filter out "deleted" items from UI
  const visibleProducts = products
    .filter((product) => !deletedIds.includes(product.id))
    .slice(0, visibleCount);

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
                disabled={isDeleting}
                onClick={() => handleDelete(product.id, product.title)}
              >
                {isDeleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <FaTimes />
                )}
              </Button>
            </div>
          ))}
        </div>

        <div className="border-t mt-4 pt-4 px-4 sticky bottom-0 bg-white z-10">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>
              $
              {visibleProducts
                .reduce((sum, product) => sum + product.price, 0)
                .toFixed(2)}
            </span>
          </div>

          <Button className="mt-4 w-full bg-white border border-black text-black py-2 rounded-lg hover:bg-black hover:text-white hover:border-black transition-colors">
            Proceed to Checkout
          </Button>

          <Link
            to="/cart"
            className="block mt-2 text-center text-[#4FC1D2] hover:text-indigo-800 text-sm pb-2"
          >
            View full cart details
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
