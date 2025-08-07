import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { RxColorWheel } from "react-icons/rx";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoCarOutline } from "react-icons/io5";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 sm:px-0">
      <div className="">
        <div className="flex justify-center my-8 pb-6">
          <fieldset className="w-full sm:w-2/3 md:w-1/2 border-t-2 border-gray-800 border-b-0 border-l-0 border-r-0">
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
          {/* Free Shipping */}
          <div
            onClick={() => navigate("/free-shapping")}
            className="group bg-white p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <IoCarOutline className="text-2xl group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Free Shipping</h4>
            <p className="text-gray-600">
              Free shipping on all US orders or orders above $100
            </p>
          </div>

          {/* 24/7 Support */}
          <div
            onClick={() => navigate("/customer-support")}
            className="group bg-white p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <RxColorWheel className="text-2xl group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h4>
            <p className="text-gray-600">Contact us 24 hours a day, 7 days a week</p>
          </div>

          {/* Easy Returns */}
          <div
            onClick={() => navigate("/return-policy")}
            className="group bg-white p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <FaArrowRotateRight className="text-2xl group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Easy Returns</h4>
            <p className="text-gray-600">Simply return it within 30 days for an exchange</p>
          </div>

          {/* Secure Payments */}
          <div
            onClick={() => navigate("/secure-payments")}
            className="group bg-white p-6 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-3 bg-purple-50 rounded-full mb-4">
              <FaRegUserCircle className="text-2xl group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Secure Payments</h4>
            <p className="text-gray-600">We ensure secure payment with PEV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
