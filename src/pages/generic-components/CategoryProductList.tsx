import { useState } from "react";
import { Heart, Loader2, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useGetProductsByCategoryQuery } from "@/store/services/fake-store-api";
import CartDialog from "@/components/cart-dialog";
import EditCartForm from "@/components/edit-cart-form";
import AddCartForm from "@/components/add-cart-form";
import { Button } from "@/components/ui/button";
import IMAGES from "@/assets/images";

interface Props {
  category: string;
}

const localImages = [
  IMAGES.LOGINPAGE,
  IMAGES.BACKPACK,
  IMAGES.BEANNIE,
  IMAGES.BRA,
  IMAGES.FAX,
  IMAGES.HIGHHEELS,
  IMAGES.TIES,
  IMAGES.PARTY,
  IMAGES.COAT,
  IMAGES.BRIEFS,
  IMAGES.DRESS,
  IMAGES.FLIP,
  IMAGES.HANGER,
  IMAGES.HEELS,
  IMAGES.HOODIES,
  IMAGES.PANTS,
  IMAGES.POLO,
  IMAGES.RAGGED,
  IMAGES.SHIRT,
  IMAGES.SNAPBACK,
  IMAGES.SOCKS,
  IMAGES.TANKTOP,
  IMAGES.VANS,
  IMAGES.MEN2,
  IMAGES.MEN3,
  IMAGES.MEN4,
  IMAGES.MEN5,
  IMAGES.MEN6,
  IMAGES.MEN7,
  IMAGES.LOGO,
  IMAGES.IMG3,
  IMAGES.IMG4,
  IMAGES.IMG5,
  IMAGES.GIRL,
  IMAGES.BAG,
  IMAGES.WATCH,
  IMAGES.HEADPHONE,
  IMAGES.SHOES,
  IMAGES.SHOESS,
  IMAGES.SHOESV,
  IMAGES.TROSER1,
  IMAGES.TROSER2,
  IMAGES.BANNER1,
  IMAGES.BANNER2,
  IMAGES.IMG18,
  IMAGES.IMG19,
  IMAGES.IMG20,
  IMAGES.IMG21,
  IMAGES.IMG22,
  IMAGES.IMG23,
  IMAGES.IMG24,
  IMAGES.IMG25,
  IMAGES.MENS_CLOTHING,
  IMAGES.PAYPAL,
  IMAGES.SkrillLogo,
  IMAGES.GOOGLEPAY,
  IMAGES.VISA,
  IMAGES.MASTER,
];


const CategoryProductList = ({ category }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

  const { data: products, isLoading, isError } =
    useGetProductsByCategoryQuery(category);

  const filteredProducts = (products ?? []).filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get a random local image for each product
  const getRandomImage = (id: number): string => {
    const index = id % localImages.length;
    return localImages[index];
  };

  if (isLoading)
    return (
      <Loader2 className="animate-spin mx-auto my-16 w-8 h-8 text-blue-600" />
    );
  if (isError)
    return (
      <p className="text-center text-red-600 my-16 text-lg font-semibold">
        Failed to load products.
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Search Bar */}
      <div className="w-full max-w-md mx-auto mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pr-28 rounded-lg border border-black-400 shadow-sm focus:ring-2 focus:black focus:outline-none transition-all"
          />
          <Button className="absolute cursor-pointer top-1/2 right-1 -translate-y-1/2 bg-black text-white h-7 px-4 rounded-md hover:bg-gray-800 active:bg-gray-900 transition-all shadow-md hover:shadow-lg">
            <Search />
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg my-16">
          No products found.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="relative border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-0 relative group overflow-hidden rounded-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={getRandomImage(product.id)}
                    alt={product.title}
                    className="w-full px-2 h-64 object-contain border-b border-gray-200 transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Like Icon */}
                  <button
                    className="absolute top-0 left-3 z-10 p-1 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition"
                    onClick={() =>
                      setLikedItems((prev) => ({
                        ...prev,
                        [product.id]: !prev[product.id],
                      }))
                    }
                  >
                    <Heart
                      className={`w-4 h-4 cursor-pointer transition-colors duration-200 ${
                        likedItems[product.id]
                          ? "text-red-500 fill-current"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  {/* Quick View & Add to Cart Buttons */}
                  <div className="absolute inset-0 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 px-4">
                    <CartDialog
                      triggerLabel="Quick View"
                      buttonBg="bg-white text-black hover:bg-gray-100"
                    >
                      <EditCartForm product={product} />
                    </CartDialog>
                    <CartDialog
                      triggerLabel="Add to Cart"
                      buttonBg="bg-white text-black hover:bg-gray-100"
                    >
                      <AddCartForm product={product} />
                    </CartDialog>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium line-clamp-2 mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg text-gray-700">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProductList;