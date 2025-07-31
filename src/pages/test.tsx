import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { Grid3X3, LayoutList } from "lucide-react";
import { useGetProductsQuery } from "@/store/services/fake-store-api";
import { Button } from "@/components/ui/button";
import CartDialog from "@/components/cart-dialog";
import EditCartForm from "@/components/edit-cart-form";

const BestSeller = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});
  const [visibleCount, setVisibleCount] = useState(4);
  const [layout, setLayout] = useState<"grid" | "list">("grid");

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
    <div className="py-4">
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-center my-8 px-4 gap-4">
        <fieldset className="w-full sm:w-auto border-t-2 border-gray-800 text-center">
          <legend className="px-4">
            <span className="text-xl sm:text-2xl font-bold text-gray-800">
              Best Seller
            </span>
          </legend>
          <p className="text-[#928987] text-sm">Top view in this week</p>
        </fieldset>

        {/* Layout Toggle */}
        <Button
          variant="outline"
          onClick={() =>
            setLayout((prev) => (prev === "grid" ? "list" : "grid"))
          }
          className="flex items-center gap-2"
        >
          {layout === "grid" ? (
            <>
              <LayoutList className="w-4 h-4" />
              List View
            </>
          ) : (
            <>
              <Grid3X3 className="w-4 h-4" />
              Grid View
            </>
          )}
        </Button>
      </div>

      {/* Products Display */}
      <div
        className={`${
          layout === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            : "space-y-4"
        }`}
      >
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className={`${
              layout === "list" ? "flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md" : ""
            }`}
          >
            <Card
              className={`${
                layout === "list" ? "flex-1 flex gap-4 items-center" : ""
              } border-none shadow-none p-0`}
            >
              <CardContent className={`relative group ${layout === "list" ? "flex gap-4 items-center" : "p-0"}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`object-contain rounded ${
                      layout === "list"
                        ? "w-32 h-32"
                        : "w-full max-w-[300px] min-h-[300px] max-h-[300px] border border-gray-300 p-10 mb-2"
                    } group-hover:opacity-90 group-hover:scale-110 transition-transform duration-500`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/300x400?text=Product+Image";
                    }}
                  />

                  {/* Hover Icons */}
                  <div className="absolute top-0 left-3 gap-4 pt-5 grid z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    {likedItems[product.id] ? (
                      <FaHeart
                        className="text-red-500 text-lg cursor-pointer"
                        onClick={() =>
                          setLikedItems((prev) => ({
                            ...prev,
                            [product.id]: false,
                          }))
                        }
                      />
                    ) : (
                      <CiHeart
                        className="text-black text-lg cursor-pointer"
                        onClick={() =>
                          setLikedItems((prev) => ({
                            ...prev,
                            [product.id]: true,
                          }))
                        }
                      />
                    )}
                    <CiShare2 className="text-black text-lg cursor-pointer" />
                  </div>

                  {/* Quick View & Add to Cart Buttons */}
                  {layout === "grid" && (
                    <div className="grid justify-center absolute bottom-1/3 left-0 right-0 gap-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CartDialog
                        triggerLabel="Quick View"
                        buttonBg="bg-black text-white hover:bg-gray-800"
                      >
                        <EditCartForm product={product} />
                      </CartDialog>
                      <CartDialog triggerLabel="Add to Cart">
                        <EditCartForm product={product} />
                      </CartDialog>
                    </div>
                  )}
                </div>

                <div className={`${layout === "list" ? "flex-1" : ""}`}>
                  <h3 className="font-medium mt-1 text-sm line-clamp-2">
                    {product.title}
                  </h3>
                  <span className="font-semibold text-[#747474]">
                    ${product.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Load More / Show Less */}
      <div className="flex justify-center gap-4 mt-6">
        {visibleCount < products.length ? (
          <Button
            className="text-1xl px-8 py-5 rounded-full relative overflow-hidden text-black border border-black before:absolute before:inset-0 before:-translate-x-full before:bg-black hover:border-black before:transition-transform before:duration-700 hover:before:translate-x-0 hover:text-white"
            onClick={() => setVisibleCount((prev) => prev + 4)}
          >
            <span className="relative z-10">Load More</span>
          </Button>
        ) : (
          <Button
            className="bg-gray-700 text-white px-8 py-5 rounded-full"
            onClick={() => setVisibleCount(4)}
          >
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
