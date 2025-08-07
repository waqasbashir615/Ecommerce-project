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
import { Hash, Instagram } from "lucide-react";

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
  const [, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
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
    <div className="py-10 bg-gray-100">
      <div className="mx-auto">
        <div className="flex justify-center mb-12">
          <div className="text-center max-w-2xl">
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative z-10">
                Follow Us
                <Instagram className="inline-block ml-3 w-8 h-8 text-pink-600" />
              </h2>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-pink-100 -z-1 transform translate-y-1" />
            </div>
            <p className="text-gray-600 text-lg md:text-xl mt-4">
              Stay updated with our latest news and updates
            </p>
            <a 
              href="https://instagram.com/yourhandle" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="relative group px-4">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              slidesToScroll: "auto",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((slide) => (
                <CarouselItem
                  key={slide.id}
                  className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="relative overflow-hidden aspect-square rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={slide.image}
                      alt={`Instagram post ${slide.id}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div 
                        className="text-white translate-y-4 hover:translate-y-0 transition-transform duration-300"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <Instagram className="w-6 h-6 mb-2" />
                        <p className="text-sm font-medium">View Post</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-black text-gray-900 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg" />
            <CarouselNext className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-black text-gray-900 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg" />
          </Carousel>
        </div>
      </div>
      <div className="mt-12 text-center">
  <h3 className="text-xl font-bold mb-4">Featured Hashtags</h3>
  <div className="flex flex-wrap justify-center gap-3">
    {['#YourBrand', '#TrendingNow', '#InstaDaily', '#PhotoOfTheDay'].map((tag) => (
      <a
        key={tag}
        href={`https://instagram.com/explore/tags/${tag.substring(1)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full transition-colors"
      >
        <Hash className="w-4 h-4 mr-1" />
        {tag}
      </a>
    ))}
  </div>
  <p className="mt-4 text-gray-600">Use these tags for a chance to be featured!</p>
</div>
    </div>
  );
};

export default FollowUs;