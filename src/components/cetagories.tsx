import IMAGES from "@/assets/images";
import { Button } from "./ui/button";

const Categories = () => {
  return (
    <div className="w-full min-h-screen py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative group cursor-pointer min-h-[400px] overflow-hidden">
          <img
            src={IMAGES.GIRL}
            alt="Women's fashion"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <Button className="cursor-pointer  absolute bottom-10 left-1/2 -translate-x-1/2 rounded-none px-6 py-3 bg-white text-black hover:text-white font-semibold overflow-hidden group/button">
            <span className="relative z-10">Women</span>
            <span className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="gap-4 flex flex-col">
            <div className="relative group rounded-lg overflow-hidden min-h-[200px]">
              <img
                src={IMAGES.BAG}
                alt="Designer bag"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <Button className="cursor-pointer  absolute bottom-4 left-1/2 -translate-x-1/2 rounded-none px-6 py-3 bg-white text-black hover:text-white font-semibold overflow-hidden group/button">
                <span className="relative z-10">Accesories</span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
              </Button>
            </div>
            <div className="relative group rounded-lg overflow-hidden min-h-[200px]">
              <img
                src={IMAGES.SHOES}
                alt="Designer bag"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <Button className="cursor-pointer  absolute bottom-4 left-1/2 -translate-x-1/2 rounded-none px-6 py-3 bg-white text-black hover:text-white font-semibold overflow-hidden group/button">
                <span className="relative z-10">Footwear</span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
              </Button>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center">
            <img
              src={IMAGES.WATCH}
              alt="Luxury watch"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <Button className="cursor-pointer  absolute bottom-4 left-1/2 -translate-x-1/2 rounded-none px-6 py-3 bg-white text-black hover:text-white font-semibold overflow-hidden group/button">
              <span className="relative z-10">Watches</span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
