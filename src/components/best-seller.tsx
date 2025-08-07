import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from "@/store/services/fake-store-api";
import IMAGES from "@/assets/images";

const localImages = [
  IMAGES.LOGINPAGE,
  IMAGES.FAX,
  IMAGES.PARTY,
  IMAGES.COAT,
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
  IMAGES.GOOGLEPAY,
  IMAGES.VISA,
  IMAGES.MASTER,
]; // Expand or customize based on your image pool

const CategoryPage = () => {
  const { data: categories, isLoading: catLoading } = useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categories && categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  const {
    data: categoryProducts,
    isLoading: prodLoading,
    isError,
  } = useGetProductsByCategoryQuery(selectedCategory!, {
    skip: !selectedCategory,
  });

  return (
    <div className="mx-auto py-10">
      <div className="">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Best seller Products
          </h1>
          <p className="text-gray-600">Select a category to explore products</p>
        </div>

        {/* Category Buttons */}
        {catLoading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-8 w-8 text-gray-900" />
          </div>
        ) : (
          <div className="flex gap-3 flex-wrap justify-center mb-12">
            {categories?.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full font-medium transition-all uppercase ${
                  selectedCategory === category
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Selected Category Heading */}
        {selectedCategory && (
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 uppercase">
              {selectedCategory}
            </h2>
          </div>
        )}

        {/* Products Grid */}
        {prodLoading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-8 w-8 text-gray-900" />
          </div>
        ) : isError ? (
          <p className="text-center text-red-600">Failed to load products.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts?.map((product, index) => (
              <Card
                key={product.id}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4 h-48">
                  <img
                    src={localImages[index % localImages.length]} // loop through local images
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h2 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h2>
                <div className="flex justify-between items-center mt-2 sm:mt-3">
                  <p className="text-gray-500 font-semibold text-base sm:text-lg">
                    ${product.price}
                  </p>
                  <div className="border border-black rounded-lg p-1 hover:bg-black cursor-pointer">
                    <button className="text-xs sm:text-sm bg-black text-white cursor-pointer px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-gray-800 transition-all duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
