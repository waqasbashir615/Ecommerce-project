import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import IMAGES from "@/assets/images";
import { Link } from "react-router-dom";
import { X, Search } from "lucide-react";
import GenBreadcrumb from "./generic-components/gen-breadcrumb";
import NavBarTop from "./nav-bar";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const products = [
  { id: 1, name: "Backpack", image: IMAGES.BACKPACK, price: "$49" },
  { id: 2, name: "Beanie", image: IMAGES.BEANNIE, price: "$39" },
  { id: 3, name: "Glassses", image: IMAGES.BRA, price: "$29" },
  { id: 4, name: "Briefs", image: IMAGES.BRIEFS, price: "$25" },
  { id: 5, name: "Dress", image: IMAGES.DRESS, price: "$79" },
  { id: 6, name: "Flip Flops", image: IMAGES.FLIP, price: "$19" },
  { id: 7, name: "Hanger", image: IMAGES.HANGER, price: "$9" },
  { id: 8, name: "Heels", image: IMAGES.HEELS, price: "$69" },
  { id: 9, name: "Hoodies", image: IMAGES.HOODIES, price: "$59" },
  { id: 10, name: "Pants", image: IMAGES.PANTS, price: "$44" },
  { id: 11, name: "Polo", image: IMAGES.POLO, price: "$34" },
  { id: 12, name: "Ragged", image: IMAGES.RAGGED, price: "$55" },
  { id: 13, name: "Shirt", image: IMAGES.SHIRT, price: "$29" },
  { id: 14, name: "Snapback", image: IMAGES.SNAPBACK, price: "$15" },
  { id: 15, name: "Socks", image: IMAGES.SOCKS, price: "$12" },
  { id: 16, name: "Tanktop", image: IMAGES.TANKTOP, price: "$22" },
  { id: 17, name: "Vans", image: IMAGES.VANS, price: "$65" },
  { id: 2, name: "Beanie", image: IMAGES.BEANNIE, price: "$39" },
  { id: 3, name: "Glassses", image: IMAGES.BRA, price: "$29" },
  { id: 4, name: "Briefs", image: IMAGES.BRIEFS, price: "$25" },
  { id: 5, name: "Dress", image: IMAGES.DRESS, price: "$79" },
  { id: 6, name: "Flip Flops", image: IMAGES.FLIP, price: "$19" },
  { id: 7, name: "Hanger", image: IMAGES.HANGER, price: "$9" },
  { id: 8, name: "Heels", image: IMAGES.HEELS, price: "$69" },
  { id: 9, name: "Hoodies", image: IMAGES.HOODIES, price: "$59" },
  { id: 10, name: "Pants", image: IMAGES.PANTS, price: "$44" },
  { id: 11, name: "Polo", image: IMAGES.POLO, price: "$34" },
  { id: 12, name: "Ragged", image: IMAGES.RAGGED, price: "$55" },
  { id: 13, name: "Shirt", image: IMAGES.SHIRT, price: "$29" },
  { id: 14, name: "Snapback", image: IMAGES.SNAPBACK, price: "$15" },
  { id: 15, name: "Socks", image: IMAGES.SOCKS, price: "$12" },
  { id: 16, name: "Tanktop", image: IMAGES.TANKTOP, price: "$22" },
  { id: 17, name: "Vans", image: IMAGES.VANS, price: "$65" },
];

const AllProducts = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (productName: string) => {
    setSelectedProduct(productName);
    setDialogOpen(true);
  };

  return (
    <div>
      <NavBarTop />
      <div className="py-8 w-[90%] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2 pt-6">
          All Products
        </h2>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our full premium collection
        </p>
        <div className="flex justify-between items-center mb-6">
          <div className="py-6">
            <GenBreadcrumb
              items={[
                { label: "Home", to: "/main" },
                { label: "All Premium Collection Products" },
              ]}
            />
          </div>
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={`${product.id}-${Math.random()}`}
            >
              <Card className="rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform duration-300 relative cursor-pointer">
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-xs font-medium shadow border border-gray-300">
                  New
                </div>
                <CardContent className="p-4 sm:p-6 space-y-4">
                  <div className="relative h-48 w-full overflow-hidden rounded-lg flex items-center justify-center group">
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedImage(product.image);
                      }}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center pt-10">
                      <p className="text-gray-500 font-semibold text-sm sm:text-base">
                        {product.price}
                      </p>
                      <div className=" border border-black rounded-lg p-1 hover:bg-black cursor-pointer">
                        <button
                          className="text-xs sm:text-sm bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddToCart(product.name);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-full max-h-full p-4">
              <button
                className="absolute top-2 right-2 text-white hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Zoomed"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-gray-900">
              Added to your cart!
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-20 h-20 flex-shrink-0">
                {selectedProduct && (
                  <img
                    src={
                      products.find((p) => p.name === selectedProduct)?.image
                    }
                    alt={selectedProduct}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{selectedProduct}</h4>
                <p className="text-sm text-gray-600">
                  {selectedProduct &&
                    products.find((p) => p.name === selectedProduct)?.price}
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h5 className="font-medium text-gray-900 mb-2">Order Summary</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    {selectedProduct &&
                      products.find((p) => p.name === selectedProduct)?.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2">
                  <span className="text-gray-900 font-medium">Total</span>
                  <span className="font-bold text-gray-900">
                    {selectedProduct &&
                      products.find((p) => p.name === selectedProduct)?.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => setDialogOpen(false)}
                variant="outline"
                className="flex-1 border-gray-300 hover:bg-gray-100 text-gray-800"
              >
                Continue Shopping
              </Button>
              <Button
                onClick={() => {
                  setDialogOpen(false);
                  // Navigate to cart page would go here
                }}
                className="flex-1 bg-black hover:bg-gray-800 text-white"
              >
                View Cart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllProducts;
