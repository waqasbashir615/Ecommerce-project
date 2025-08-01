import { useState } from "react";
import { useGetProductsQuery } from "@/store/services/fake-store-api";
import { Grid3X3, Heart, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import CartDialog from "./cart-dialog";
import EditCartForm from "./edit-cart-form";
import IMAGES from "@/assets/images";

const Tranding = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});
  const [visibleCount, setVisibleCount] = useState(10);
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
    <div className="pt-12">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Top Trending Products
          </h1>
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

        {/* Products Grid */}
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
              className={`bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition relative group ${
                layout === "list" ? "flex items-center gap-4" : ""
              }`}
            >
              <div
                className={`relative ${
                  layout === "list" ? "w-32 h-32" : "w-full"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className={`rounded-lg object-contain ${
                    layout === "list" ? "w-32 h-32" : "w-full h-48 mb-4"
                  }`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/300x400?text=Product+Image";
                  }}
                />

                {/* Action Icons */}
                <div
                  className={`absolute ${
                    layout === "list" ? "top-0 left-0" : "top-0 "
                  } gap-4  grid items-center justify-center z-10 bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  {likedItems[product.id] ? (
                    <Heart
                      className="text-red-500 w-4 h-4 cursor-pointer fill-current"
                      onClick={() =>
                        setLikedItems((prev) => ({
                          ...prev,
                          [product.id]: false,
                        }))
                      }
                    />
                  ) : (
                    <Heart
                      className="text-black w-4 h-4 cursor-pointer"
                      onClick={() =>
                        setLikedItems((prev) => ({
                          ...prev,
                          [product.id]: true,
                        }))
                      }
                    />
                  )}
                </div>

                {/* Quick View & Add to Cart */}
                {layout === "grid" && (
                  <div className="grid justify-center absolute bottom-1/3 left-0 right-0 gap-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <h2
                  className={`font-semibold text-gray-800 ${
                    layout === "list" ? "text-lg" : "text-sm line-clamp-2"
                  }`}
                >
                  {product.title}
                </h2>
                <p className="text-gray-500">${product.price}</p>

                {layout === "list" && (
                  <div className="flex gap-2 mt-2">
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
            </div>
          ))}
        </div>

        {/* Load More / Show Less Buttons */}
        <div className="flex justify-center gap-4 mt-6 py-6">
          {visibleCount < products.length ? (
            <Button
              className="text-1xl px-8 py-5 rounded-full relative overflow-hidden text-black border border-black before:absolute before:inset-0 before:-translate-x-full before:bg-black hover:border-black before:transition-transform before:duration-700 hover:before:translate-x-0 hover:text-white"
              onClick={() => setVisibleCount((prev) => prev + 10)}
            >
              <span className="relative z-10">Load More</span>
            </Button>
          ) : (
            <Button
              className="bg-gray-700 text-white px-8 py-5 rounded-full"
              onClick={() => setVisibleCount(10)}
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
      {/* Banner Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-7">
        <div className="md:col-span-6 overflow-hidden">
          <div className="relative group">
            <img
              src={IMAGES.BANNER1}
              alt=""
              className="w-full h-auto transition-all duration-[2000ms] ease-in-out transform group-hover:scale-125 group-hover:rotate-6"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-5xl text-white font-semibold text-center">
                LOOKBOOK 2025
              </h1>
              <p className="text-xl md:text-2xl text-white text-center">
                MAKE LOVER THIS LOOK
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 overflow-hidden">
          <div className="relative group h-full">
            <img
              src={IMAGES.BANNER2}
              alt=""
              className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-2"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-xl md:text-2xl text-white text-center">
                SUMMER SALE
              </p>
              <h1 className="text-3xl md:text-5xl text-white font-semibold text-center">
                UP TO 70%
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tranding;
