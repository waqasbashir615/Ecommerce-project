import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGetCategoriesQuery, useGetProductsByCategoryQuery } from "@/store/services/fake-store-api";

const CategoryPage = () => {
  const { data: categories, isLoading: catLoading } = useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const {
    data: categoryProducts,
    isLoading: prodLoading,
    isError,
  } = useGetProductsByCategoryQuery(selectedCategory!, {
    skip: !selectedCategory,
  });

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Best seller Products</h1>
          <p className="text-gray-600">Select a category to explore products</p>
        </div>

        {/* Categories */}
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

        {/* Category Products */}
        {selectedCategory && (
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              
            </h2>
          </div>
        )}

        {prodLoading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-8 w-8 text-gray-900" />
          </div>
        ) : isError ? (
          <p className="text-center text-red-600">Failed to load products.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts?.map((product) => (
              <Card 
                key={product.id} 
                className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-contain"
                  />
                </div>
                <h2 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-gray-900 font-bold">${product.price}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;