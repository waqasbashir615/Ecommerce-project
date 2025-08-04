import { Link } from "react-router-dom";
import TopNavBar from "../pages/nav-bar";
import Footer from "./footer";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Loader2, Search, Star } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { useGetProductsQuery } from "@/store/services/fake-store-api";
import CartDialog from "./cart-dialog";
import EditCartForm from "./edit-cart-form";
import AddCartForm from "./add-cart-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import GenBreadcrumb from "@/pages/generic-components/gen-breadcrumb";

const WishListPage = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !products) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500">Oops!</h2>
          <p className="text-gray-600 mt-2">Failed to load products.</p>
        </div>
        <Button onClick={() => window.location.reload()} variant="outline">
          Try Again
        </Button>
      </div>
    );
  }

  const filteredProducts = products
    .slice(0, 10)
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <main className="flex-grow container mx-auto py-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          {/* <Button
            onClick={handleClick}
            variant="ghost"
            className="mb-6 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button> */}

          {/* Title Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Your Wishlist
            </h1>
            <p className="text-gray-500 max-w-md mx-auto">
              {filteredProducts.length > 0
                ? "All your favorite products in one place"
                : "Your wishlist is currently empty"}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
            <div>
              {/* Breadcrumb */}
              <GenBreadcrumb
                items={[{ label: "Home", to: "/main" }, { label: "Wishlist" }]}
              />
            </div>
            {/* <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search your wishlist..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border-gray-300 focus-visible:ring-primary"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div> */}
            <div className="w-full max-w-md mb-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search your wishlist..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pr-28 rounded-lg border border-black-400 shadow-sm focus:ring-2 focus:ring-black focus:outline-none transition-all"
                />
                <Button className="absolute top-1/2 right-1 -translate-y-1/2 bg-black text-white h-8 px-4 rounded-md hover:bg-gray-800 active:bg-gray-900 transition-all shadow-md hover:shadow-lg">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <FaHeart className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No items found
              </h3>
              <p className="text-gray-500 mb-6 text-center max-w-md">
                {searchTerm
                  ? "No products match your search. Try a different term."
                  : "You haven't added any products to your wishlist yet."}
              </p>
              <Button asChild>
                <Link to="/main">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 py-0"
                >
                  <CardContent className=" relative group px-0">
                    <div className="relative overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-contain rounded-t-lg p-4 transition-transform duration-500 ease-in-out group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/300x400?text=Product+Image";
                        }}
                      />
                      {/* Like Button */}
                      <button
                        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
                        onClick={() =>
                          setLikedItems((prev) => ({
                            ...prev,
                            [product.id]: !prev[product.id],
                          }))
                        }
                      >
                        {likedItems[product.id] ? (
                          <FaHeart className=" text-red-500" />
                        ) : (
                          <CiHeart className=" text-gray-700" />
                        )}
                      </button>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2 justify-center">
                          <CartDialog
                            triggerLabel="Quick View"
                            buttonBg="bg-white text-gray-900 hover:bg-gray-100"
                          >
                            <EditCartForm product={product} />
                          </CartDialog>
                          <CartDialog triggerLabel="Add to Cart">
                            <AddCartForm product={product} />
                          </CartDialog>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                        {product.title}
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating.rate)
                                  ? "fill-current"
                                  : ""
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">
                          ({product.rating.count})
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pb-4 pt-0 flex justify-between items-center">
                    <span className="font-bold text-lg text-gray-900">
                      ${product.price}
                    </span>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <CiShare2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WishListPage;
