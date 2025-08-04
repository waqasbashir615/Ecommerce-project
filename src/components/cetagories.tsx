import { useNavigate } from "react-router-dom";
import IMAGES from "@/assets/images";
import { Button } from "./ui/button";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-h-screen py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Women's Clothing */}
        <div
          onClick={() => navigate("/women-clothing")}
          className="relative group cursor-pointer min-h-[400px] overflow-hidden"
        >
          <img
            src={IMAGES.GIRL}
            alt="Women's fashion"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <Button className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-none px-6 py-3 bg-white text-black hover:text-white font-semibold overflow-hidden group/button">
            <span className="relative z-10">Women</span>
            <span className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Electronics */}
          <div className="gap-4 flex flex-col justify-between">
            <div
              onClick={() => navigate("/electronics")}
              className="relative group rounded-lg overflow-hidden min-h-[200px] cursor-pointer"
            >
              <img
                src={IMAGES.HEADPHONE}
                alt="Electronics"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-none px-6 py-3 bg-white text-black hover:text-white font-semibold overflow-hidden group/button">
                <span className="relative z-10">Electronics</span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
              </Button>
            </div>
            {/* Jawellary */}
            <div
              onClick={() => navigate("/jawellary")}
              className="relative group rounded-lg overflow-hidden min-h-[200px] cursor-pointer"
            >
              <img
                src={IMAGES.WATCH}
                alt="Jewellery"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-none px-6 py-3 bg-white text-black hover:text-white font-semibold overflow-hidden group/button">
                <span className="relative z-10">Jawellary</span>
                <span className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
              </Button>
            </div>
          </div>
          {/* Men's Clothing */}
          <div
            onClick={() => navigate("/mens-clothing")}
            className="relative group rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center cursor-pointer"
          >
            <img
              src={IMAGES.MENS_CLOTHING}
              alt="Men's clothing"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-none px-6 py-3 bg-white text-black hover:text-white font-semibold overflow-hidden group/button">
              <span className="relative z-10">Mens</span>
              <span className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition-transform duration-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
