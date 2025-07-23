import { FaRegUserCircle } from "react-icons/fa";
import { RxColorWheel } from "react-icons/rx";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoCarOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div className="py-12 sm:px-0">
      <div className="max-w-7wxl mx-auto">
        {/* <div className="flex justify-center my-8">
          <fieldset className="border-t-2 border-b-0 border-l-0 border-r-0 border-gray-800">
            <legend className="px-4 text-center">
              <span className="px-2 text-3xl font-bold text-gray-800">
                Our Premium Services
              </span>
            </legend>
            <p className="text-center text-[#928987]">
              Experience excellence with our comprehensive service offerings
            </p>
          </fieldset>
        </div> */}
        <div className="flex justify-center my-8 ">
          <fieldset className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 border-t-2 border-gray-800 border-b-0 border-l-0 border-r-0">
            <legend className="px-4 text-center">
              <span className="px-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                Our Premium Services
              </span>
            </legend>
            <p className="text-center text-[#928987] text-sm sm:text-base">
              Experience excellence with our comprehensive service offerings
            </p>
          </fieldset>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="group bg-white p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <IoCarOutline className="text-2xl group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Free Shipping
            </h4>
            <p className="text-gray-600">
              Free shipping on all US orders or orders above $100
            </p>
          </div>

          <div className="group bg-white p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <RxColorWheel className="text-2xl group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              24/7 Support
            </h4>
            <p className="text-gray-600">
              Contact us 24 hours a day, 7 days a week
            </p>
          </div>

          <div className="group bg-white p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <FaArrowRotateRight className="text-2xl group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Easy Returns
            </h4>
            <p className="text-gray-600">
              Simply return it within 30 days for an exchange
            </p>
          </div>

          <div className="group bg-white p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <FaRegUserCircle className="text-2xl group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Secure Payments 1122
            </h4>
            <p className="text-gray-600">We ensure secure payment with PEV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
