import {
  Banknote,
  CreditCard,
  Landmark,
  MapPin,
  HelpCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import NavBarTop from "../nav-bar";
import Footer from "@/components/footer";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import { Link } from "react-router-dom";
import IMAGES from "@/assets/images";

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
    <div className="flex flex-col min-h-screen bg-white">
      <NavBarTop />

      <main className="flex-1">
        <section className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 py-10">
          {/* Breadcrumb */}
          <div className="pt-12 pb-6">
            <GenBreadcrumb
              items={[
                { label: "Home", to: "/main" },
                { label: "Secure Payment", to: "/payment" },
              ]}
            />
          </div>
          {/* Hero Section */}
          <motion.section
            className="relative w-full py-8 md:py-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-gray-500 to-gray-800 rounded-xl overflow-hidden px-6 md:px-12 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 max-w-2xl">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Safe & Secure Payments
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-6 text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Our secure payment system uses advanced encryption to keep your
                information safe and give you peace of mind while shopping.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 text-sm md:text-base bg-white/10 rounded-full px-4 py-2 w-fit"
              >
                <Clock className="w-4 h-4" />
                <span>Average response time: 2 hours</span>
              </motion.div>
            </div>
            <motion.img
              src={IMAGES.SCUREPAYMENT}
              alt="Support team"
              className="relative z-10 h-48 md:h-64 lg:h-70 object-contain"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.section>
          {/* Header */}
          <div className="text-center mb-16 mt-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secure Payment Options
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the payment method that works best for you
            </p>
          </div>

          {/* Payment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {paymentOptions.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden p-8 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-3 rounded-full bg-gray-100 group-hover:bg-gray-900 transition-colors">
                      <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {method.title}
                      </h3>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </div>
                  {/* <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>

          {/* Help Section */}
          <div className="mx-auto max-w-3xl">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center bg-white p-3 rounded-full mb-4 border border-gray-200">
                <HelpCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Need Payment Assistance?
              </h4>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Our support team is ready to help with any payment questions or
                special arrangements.
              </p>
              <Link
                to="/customer-support"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentMethods;
