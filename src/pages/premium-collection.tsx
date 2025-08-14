import { useRef, useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";
import IMAGES from "@/assets/images";
import { Link } from "react-router-dom";
import type { KeenSliderInstance } from "keen-slider/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

const products: Product[] = [
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
];

const AUTO_PLAY_INTERVAL = 4000;
const VISIBLE_DOTS = 5;

const PremiumCollection = () => {
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 5,
          spacing: 16,
        },
      },
    },
    created(slider) {
      setIsLoaded(true);
      startAutoPlay(slider);
    },
    destroyed() {
      stopAutoPlay();
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      resetAutoPlay(slider);
    },
  });

  const startAutoPlay = (slider: KeenSliderInstance) => {
    stopAutoPlay();
    autoPlayTimer.current = setInterval(() => {
      slider.next();
    }, AUTO_PLAY_INTERVAL);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
      autoPlayTimer.current = null;
    }
  };

  const resetAutoPlay = (slider: KeenSliderInstance) => {
    stopAutoPlay();
    startAutoPlay(slider);
  };

  const handleMouseEnter = () => {
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    if (sliderInstance.current) {
      startAutoPlay(sliderInstance.current);
    }
  };

  const handleAddToCart = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
    stopAutoPlay();
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    if (sliderInstance.current) {
      startAutoPlay(sliderInstance.current);
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      stopAutoPlay();
    };
  }, []);

  return (
    <section
      className="py-16 bg-gray-100"
      aria-labelledby="premium-collection-heading"
    >
      <div className="px-4">
        <div className="text-center mb-12">
          <h2
            id="premium-collection-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          >
            Premium Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Discover our exclusive range of products
          </p>
        </div>
        <div
          ref={sliderRef}
          className="keen-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-live="polite"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="keen-slider__slide"
              aria-roledescription="slide"
              aria-label={`${product.name} - ${product.price}`}
            >
              <Card className="h-full rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-6 right-4 bg-white rounded-full px-2 py-1 text-xs font-medium shadow-sm border border-gray-300">
                  New
                </div>
                <CardContent className="p-4 flex flex-col h-full">
                  <Link
                    to={`/all-products-page/${product.id}`}
                    className="block flex-grow"
                    aria-label={`View details for ${product.name}`}
                  >
                    <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-gray-800 font-medium">
                      {product.price}
                    </span>
                    <div className="border border-black rounded-lg p-1 hover:bg-black cursor-pointer">
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className="bg-black hover:bg-black text-white"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {isLoaded && sliderInstance.current && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: VISIBLE_DOTS }).map((_, idx) => {
              const totalSlides =
                sliderInstance.current!.track.details.slides.length;
              const slideIndex = Math.round(
                (idx / (VISIBLE_DOTS - 1)) * (totalSlides - 1)
              );
              const isActive = currentSlide === slideIndex;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    sliderInstance.current?.moveToIdx(slideIndex);
                    stopAutoPlay();
                  }}
                  className={`w-3 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-black scale-125 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${slideIndex + 1}`}
                  aria-current={isActive}
                />
              );
            })}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            to="/all-products-page"
            className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors border border-black hover:border-gray-800"
          >
            View All Products
          </Link>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-center">
              Added to your cart!
            </DialogTitle>
          </DialogHeader>

          {selectedProduct && (
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{selectedProduct.name}</h4>
                  <p className="text-gray-600">{selectedProduct.price}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">{selectedProduct.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">{selectedProduct.price}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  onClick={handleDialogClose}
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
                <Button
                  onClick={() => {
                    handleDialogClose();
                    // Navigation to cart would go here
                  }}
                  className="flex-1 bg-black text-white hover:bg-gray-800"
                >
                  View Cart
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PremiumCollection;
