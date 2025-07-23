import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { useGetProductsQuery } from "@/store/services/fake-store-api";
import CartDialog from "./cart-dialog";
import EditCartForm from "./edit-cart-form";

const BestSeller = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});
  const [visibleCount, setVisibleCount] = useState(4);

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
      {/* Title Section */}
      <div className="flex justify-center my-8 px-4">
        <fieldset className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 border-t-2 border-gray-800">
          <legend className="px-4 text-center">
            <span className="px-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Best Seller
            </span>
          </legend>
          <p className="text-center text-[#928987] text-sm sm:text-base">
            Top view in this week
          </p>
        </fieldset>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer gap-4">
        {products.slice(0, visibleCount).map((product) => (
          <Card key={product.id} className="border-none shadow-none gap-0 p-0">
            <CardContent className="p-0 relative group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full max-w-[300px] min-h-[300px] max-h-[300px] object-contain rounded mb-2 group-hover:opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-110 border border-gray-300 p-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/300x400?text=Product+Image";
                  }}
                />
                {/* Action Icons */}
                <div className="absolute h-auto top-0 left-3 gap-4 pt-5 grid items-center justify-center z-10 bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {likedItems[product.id] ? (
                    <FaHeart
                      className="text-red-500 text-lg cursor-pointer transition-colors"
                      onClick={() =>
                        setLikedItems((prev) => ({
                          ...prev,
                          [product.id]: false,
                        }))
                      }
                    />
                  ) : (
                    <CiHeart
                      className="text-black text-lg cursor-pointer transition-colors"
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

                {/* Quick View & Add to Cart */}
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
              </div>

              <h3 className="font-medium mt-1 text-sm line-clamp-2">
                {product.title}
              </h3>
            </CardContent>
            <CardFooter className="p-0">
              <div className="flex">
                <span className="font-semibold text-[#747474]">
                  ${product.price}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Load More / Show Less Buttons */}
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
