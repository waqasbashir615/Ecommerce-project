import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import IMAGES from "@/assets/images";
import AOS from "aos";
import "aos/dist/aos.css";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    image: IMAGES.IMG3,
    text: "Save upto 70%",
    para: "SUMMER 2025",
  },
  {
    id: 2,
    image: IMAGES.IMG4,
    text: "Save upto 70%",
    para: "WINTER 2025",
  },
  {
    id: 3,
    image: IMAGES.IMG5,
    text: "Save upto 70%",
    para: "SUMMER 2025",
  },
];

const HeroCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });

    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
      setTimeout(() => {
        AOS.refreshHard();
      }, 50);
    });
  }, [api]);

  return (
    <div className="w-full h-screen overflow-hidden group">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        setApi={setApi}
        className="w-full h-full relative"
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="w-full h-screen relative">
              <img
                src={slide.image}
                alt="Slide"
                className="w-full h-full object-cover absolute inset-0"
                data-aos="fade-in"
                data-aos-delay="50"
                data-aos-once="false"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 h-full flex items-center">
                <div
                  className={`space-y-4 ${
                    slide.id % 2 === 0
                      ? "text-right mr-10 md:mr-20 ml-auto"
                      : "text-left ml-10 md:ml-20"
                  }`}
                  data-aos={slide.id % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  key={`text-${slide.id}-${currentSlide}`}
                >
                  <p className="text-white text-xl md:text-2xl font-semibold">
                    {slide.para}
                  </p>
                  <h2 className="text-white text-4xl md:text-6xl font-bold">
                    {slide.text}
                  </h2>
                  <button
                    className="group relative mt-4 px-6 py-3 font-semibold overflow-hidden bg-white text-black "
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-once="false"
                  >
                    <span className="relative z-10 group-hover:text-white transition duration-500">
                      Explore Now
                    </span>
                    <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-white hover:bg-black transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <CarouselNext className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-white hover:bg-black transition-all duration-300 opacity-0 group-hover:opacity-100" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
