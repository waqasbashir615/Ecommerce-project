import { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";
import IMAGES from "@/assets/images";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Backpack", image: IMAGES.BACKPACK, price: "$49" },
  { id: 2, name: "Beanie", image: IMAGES.BEANNIE, price: "$39" },
  { id: 3, name: "Bra", image: IMAGES.BRA, price: "$29" },
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

const PremiumCollection = () => {
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, sliderInstance] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 2.2,
      spacing: 6,
    },
    breakpoints: {
      "(min-width: 320px)": { slides: { perView: 1, spacing: 6 } },
      "(min-width: 375px)": { slides: { perView: 1, spacing: 6 } },
      "(min-width: 425px)": { slides: { perView: 1, spacing: 6 } },
      "(min-width: 480px)": { slides: { perView: 2, spacing: 6 } },
      "(min-width: 640px)": { slides: { perView: 2, spacing: 6 } },
      "(min-width: 768px)": { slides: { perView: 3, spacing: 6 } },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 6 } },
      "(min-width: 1280px)": { slides: { perView: 5, spacing: 6 } },
    },
    created(slider) {
      setLoaded(true);
      timer.current = setInterval(() => slider.next(), 3000);
    },
    destroyed() {
      if (timer.current) clearInterval(timer.current);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      if (timer.current) clearInterval(timer.current);
      timer.current = setInterval(() => slider.next(), 3000);
    },
  });

  const pauseAutoPlay = () => {
    if (timer.current) clearInterval(timer.current);
  };

  const resumeAutoPlay = () => {
    if (sliderInstance.current) {
      timer.current = setInterval(() => {
        sliderInstance.current?.next();
      }, 3000);
    }
  };

  const maxDotsToShow = 5;
  const totalSlides = sliderInstance.current?.track.details.slides.length || 0;
  const visibleDots = Math.min(totalSlides, maxDotsToShow);

  const getDotIndex = (index: number) => {
    if (totalSlides <= maxDotsToShow) return index;
    const step = totalSlides / maxDotsToShow;
    return Math.round(index * step);
  };

  return (
    <div className="my-16 px-6">
      <div className="mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">
          Premium Collection
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
          Discover our exclusive range of products
        </p>

        <div
          ref={sliderRef}
          className="keen-slider mt-6 sm:mt-10"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {products.map((product) => (
            <div key={product.id} className="keen-slider__slide py-4 px-1 sm:px-2">
              <Link to={`/products/${product.id}`}>
                <Card className="rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-md sm:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 relative cursor-pointer">
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium shadow-sm border border-gray-300">
                    New
                  </div>
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-lg sm:rounded-xl flex items-center justify-center group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 px-3 object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="pt-2 sm:pt-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mt-2 sm:mt-3">
                        <p className="text-gray-500 font-semibold text-base sm:text-lg">
                          {product.price}
                        </p>
                        <div className="border border-black rounded-lg p-1 hover:bg-black cursor-pointer">
                          <button 
                            className="text-xs sm:text-sm bg-black text-white cursor-pointer px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              alert(`${product.name} added to cart!`);
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
            </div>
          ))}
        </div>

        {loaded && sliderInstance.current && (
          <div className="hidden md:flex justify-center space-x-2 mt-4 sm:mt-6">
            {Array.from({ length: visibleDots }).map((_, idx) => {
              const realIdx = getDotIndex(idx);
              return (
                <button
                  key={idx}
                  onClick={() => {
                    sliderInstance.current?.moveToIdx(realIdx);
                    pauseAutoPlay();
                  }}
                  className={`h-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === realIdx
                      ? "w-6 sm:w-5 bg-black"
                      : "w-4 sm:w-3 border border-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${realIdx + 1}`}
                />
              );
            })}
          </div>
        )}

        <div className="text-center mt-8">
          <Link 
            to="/products" 
            className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumCollection;