import { useState } from "react";
import { useGetProductsQuery } from "@/store/services/fake-store-api";
import { Grid3X3, Heart, LayoutList, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartDialog from "./cart-dialog";
import EditCartForm from "./edit-cart-form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleWishlist } from "@/store/slice/wishlist-list";
import { addToCart } from "@/store/slice/cart-slice";

const Tranding = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(10);
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const dispatch = useAppDispatch();
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  interface Product {
    id: number;
    price: number;
    title: string;
    image: string;
  }

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        quantity: 1,
        price: product.price,
        title: product.title,
        image: product.image,
      })
    );
  };


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

  return (
    <div className="pt-12">
      <div className=" mx-auto py-3">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Top Trending Products</h1>
          <Button
            variant="outline"
            onClick={() =>
              setLayout((prev) => (prev === "grid" ? "list" : "grid"))
            }
            className="bg-black text-white"
          >
            {layout === "grid" ? (
              <LayoutList className="w-4 h-4" />
            ) : (
              <Grid3X3 className="w-4 h-4" />
            )}
            {layout === "grid" ? " List View" : " Grid View"}
          </Button>
        </div>

        {/* Products */}
        <div
          className={
            layout === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-md p-4 relative group transition-transform hover:scale-105 hover:shadow-lg ${
                layout === "list" ? "flex items-center gap-4" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={
                  layout === "list" ? "w-32 h-32 flex-shrink-0" : "w-full"
                }
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className={`object-contain rounded-md ${
                    layout === "list" ? "w-32 h-32" : "w-full h-48 mb-4"
                  } transition-transform duration-300 hover:scale-105`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/300x400?text=Product+Image";
                  }}
                />
                {/* Heart Icon for Wishlist */}
                <div className="absolute top-3 right-3 z-10">
                  <Heart
                    className={`w-5 h-5 cursor-pointer transition-transform hover:scale-110 ${
                      wishlistItems.includes(product.id)
                        ? "text-red-500 fill-current"
                        : "text-gray-400"
                    }`}
                    onClick={() => dispatch(toggleWishlist(product.id))}
                  />
                </div>
              </div>

              {/* Details Section */}
              <div className={layout === "list" ? "flex-1 ml-4" : "mt-2"}>
                <h2 className="text-sm font-semibold line-clamp-2 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4">${product.price}</p>

                {/* Action Buttons for List Layout */}
                {layout === "list" ? (
                  <div className="flex gap-3 mt-2">
                    <CartDialog triggerLabel="Quick View">
                      <EditCartForm product={product} />
                    </CartDialog>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant="outline"
                      className="bg-gray-200 text-black hover:bg-black hover:text-white transition border-0 rounded-full px-5 shadow-lg"
                    >
                      Add to Cart
                    </Button>
                  </div>
                ) : (
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-3 rounded-lg p-3">
                    <CartDialog triggerLabel="Quick View">
                      <EditCartForm product={product} />
                    </CartDialog>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      variant="outline"
                      className="bg-gray-200 px-5 text-black hover:bg-black hover:text-white transition rounded-full border-0 shadow-lg"
                    >
                      Add to Cart
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center my-10">
          {visibleCount < products.length ? (
            <Button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="bg-black text-white px-6 py-2"
            >
              Load More
            </Button>
          ) : (
            <Button
              onClick={() => setVisibleCount(10)}
              className="bg-gray-500 text-white px-6 py-2"
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tranding;
