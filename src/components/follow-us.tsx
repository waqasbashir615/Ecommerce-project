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
  { id: 1, image: IMAGES.IMG18 },
  { id: 2, image: IMAGES.IMG19 },
  { id: 3, image: IMAGES.IMG20 },
  { id: 4, image: IMAGES.IMG18 },
  { id: 5, image: IMAGES.IMG19 },
  { id: 6, image: IMAGES.IMG20 },
  { id: 7, image: IMAGES.IMG21 },
  { id: 8, image: IMAGES.IMG22 },
  { id: 9, image: IMAGES.IMG23 },
  { id: 10, image: IMAGES.IMG24 },
  { id: 11, image: IMAGES.IMG25 },
];

const FollowUs: React.FC = () => {
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
    <div className="">
      {/* <div className="flex justify-center my-8">
          <fieldset className="w-full sm:w-2/3 md:w-1/2 border-t-2 border-b-0 border-l-0 border-r-0 border-gray-800">
            <legend className="px-4 text-center">
              <span className="px-2 text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                @ FOLLOW US
              </span>
            </legend>
            <p className="text-center text-[#928987] text-sm sm:text-base">
              The freshest and most exciting news
            </p>
          </fieldset>
        </div> */}
      <div className="flex justify-center my-8 px-4">
        <fieldset className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 border-t-2 border-gray-800 border-b-0 border-l-0 border-r-0">
          <legend className="px-4 text-center">
            <span className="px-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              @ FOLLOW US
            </span>
          </legend>
          <p className="text-center text-[#928987] text-sm sm:text-base">
            The freshest and most exciting news
          </p>
        </fieldset>
      </div>
      <div className="w-full overflow-hidden group px-2 sm:px-4">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          setApi={setApi}
          className="w-full h-full relative"
          opts={{
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="h-full -ml-4">
            {slides.map((slide) => (
              <CarouselItem
                key={slide.id}
                className="pl-4 p-0 basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/5"
              >
                <div className="relative h-full rounded-none">
                  <img
                    src={slide.image}
                    alt={`slide-${slide.id}`}
                    className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] object-cover border-0 rounded-none"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-md" />
                  <div className="relative z-10 h-full flex items-center">
                    <div
                      className={`space-y-4 px-2 text-center`}
                      data-aos={slide.id % 2 === 0 ? "fade-left" : "fade-right"}
                      data-aos-delay="100"
                      data-aos-easing="ease-in-out"
                      data-aos-once="false"
                      key={`text-${slide.id}-${currentSlide}`}
                    ></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-white hover:bg-black transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <CarouselNext className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-white hover:bg-black transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </Carousel>
      </div>
    </div>
  );
};

export default FollowUs;
