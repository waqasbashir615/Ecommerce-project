import {
  Banknote,
  CreditCard,
  Landmark,
  MapPin,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import NavBarTop from "../nav-bar";
import Footer from "@/components/footer";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import { Link } from "react-router-dom";

const paymentOptions = [
  {
    icon: Landmark,
    title: "Bank Transfer",
    description:
      "Send payment directly through wire transfer. SAT's account details are provided on your invoice.",
  },
  {
    icon: CreditCard,
    title: "Credit/Debit Card",
    description:
      "Secure payments with no additional fees. All major cards accepted.",
  },
  {
    icon: Banknote,
    title: "PayPal",
    description:
      "Fast and easy payments with buyer protection. Complete your purchase in just a few clicks.",
  },
  {
    icon: MapPin,
    title: "Visit Our Branch",
    description:
      "Personalized service at any SAT location. Our experts will assist you with payment and next steps.",
  },
];

const PaymentMethods = () => {
  return (
    <div className="flex flex-col min-h-screen hide-scrollbar h-screen overflow-y-scroll">
      <NavBarTop />

      {/* Breadcrumb */}
      <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
        <GenBreadcrumb
          items={[{ label: "Home", to: "/main" }, { label: "Secure Payment" }]}
        />
      </div>

      {/* Main Section */}
      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-20 lg:pt-0 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Secure Payment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Choose the payment method that works best for you
            </p>
          </div>

          {/* Payment Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {paymentOptions.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row gap-4 p-5 sm:p-6 border border-gray-200 rounded-lg hover:border-gray-300 bg-white hover:shadow-md transition-all duration-300 ease-in-out"
                >
                  <div className="flex-shrink-0">
                    <div className="border border-gray-300 p-3 rounded-full h-12 w-12 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900 group-hover:border-gray-900">
                      <IconComponent className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Help Section */}
          <div className="mt-14 sm:mt-16 mx-auto max-w-3xl text-center bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-200">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-gray-100 p-3 rounded-full">
                <HelpCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                Payment Assistance Available
              </h4>
              <p className="text-gray-600 max-w-md">
                Our support team is ready to help with any payment questions or
                issues you may encounter.
              </p>
              {/* <Link to="/customer-support">
                {" "}
                <a
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link> */}
              <div className="border border-black rounded-lg p-1 hover:bg-black cursor-pointer">
               
                 <Link to="/customer-support">
                {" "}
                <a
                  href="/contact"
                  className=" inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-lg transition-colors duration-200"
                >
                  Contact Support
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentMethods;
