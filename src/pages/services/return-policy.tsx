import {
  RefreshCw,
  Truck,
  CheckCircle,
  XCircle,
  RotateCcw,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBarTop from "../nav-bar";
import Footer from "@/components/footer";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import { motion } from "framer-motion";
import IMAGES from "@/assets/images";

const steps = [
  {
    icon: (
      <Truck className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
    ),
    title: "1. Request Return",
    desc: "Initiate your return through our online portal or contact customer service",
  },
  {
    icon: (
      <CheckCircle className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
    ),
    title: "2. Package Item",
    desc: "Securely pack your item with original packaging and included accessories",
  },
  {
    icon: (
      <XCircle className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />
    ),
    title: "3. Ship Back",
    desc: "Use provided return label or ship to our return center",
  },
];
const policyPoints = [
  {
    title: "30-Day Window",
    desc: "Items must be returned within 30 days of delivery",
  },
  {
    title: "Condition",
    desc: "Items must be unused, undamaged, and in original packaging",
  },
  {
    title: "Refund Method",
    desc: "Original payment method will be credited within 5-7 business days",
  },
];
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EasyReturns = () => {
  return (
    <div className="flex flex-col min-h-screen hide-scrollbar h-screen overflow-y-scroll">
      <NavBarTop />
      <section className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 py-10">
        <div className="mx-auto ">
          <div className="pt-14 pb-6">
            <GenBreadcrumb
              items={[
                { label: "Home", to: "/main" },
                { label: "Return Policy" },
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
                Easy Returns, Friendly Support
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-6 text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Our support team is ready to assist you with any questions or issues during your return process.
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
              src={IMAGES.RETURNORDER}
              alt="Support team"
              className="relative z-10 h-48 md:h-64 lg:h-70 object-contain"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.section>

          <div className="text-center my-12">
            <div className="group mx-auto bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md hover:shadow-lg transition-shadow">
              <RefreshCw className="w-8 h-8 text-black group-hover:animate-spin transition-transform duration-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Easy Returns
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Simply return it within 30 days for an exchange
            </p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group text-center p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                <div className="bg-white border border-gray-300 group-hover:bg-black p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm transition-colors duration-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            className="bg-gray-100 rounded-xl p-8 mb-12 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold text-black mb-6"
            >
              Return Policy
            </motion.h2>
            <div className="space-y-4">
              {policyPoints.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-white flex border items-center justify-center group-hover:bg-black">
                      <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white"></div>
                    </div>
                  </div>
                  <p className="text-gray-800">
                    <span className="font-medium">{item.title}:</span>{" "}
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-black mb-4">
              Ready to initiate your return?
            </h3>

            <div className="border w-max mx-auto border-black rounded-lg p-1 hover:bg-black cursor-pointer">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                Start Return Process <RotateCcw className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              Need help?{" "}
              <a
                href="#"
                className="text-black underline hover:text-gray-800 transition-colors"
              >
                Contact our support team
              </a>
            </p>

            <p className="text-xs text-gray-400 mt-2 italic">
              We’re here to make things right — always.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EasyReturns;
