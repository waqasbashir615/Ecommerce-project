import { Truck, CheckCircle, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import NavBarTop from "../nav-bar";
import Footer from "@/components/footer";
import IMAGES from "@/assets/images";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = (direction: "left" | "right" | "up" | "down"): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
});

const benefits = [
  {
    id: "1",
    title: "Applies to all U.S. addresses",
    description: "Free shipping available for all 50 states and territories",
  },
  {
    id: "2",
    title: "No hidden fees or conditions",
    description: "What you see at checkout is what you pay - no surprises",
  },
  {
    id: "3",
    title: "Track your package in real time",
    description: "Get live updates from dispatch to delivery",
  },
  {
    id: "4",
    title: "Applies automatically at checkout",
    description: "No codes needed - discount applies instantly",
  },
  {
    id: "5",
    title: "Fast processing & dispatch",
    description: "Orders typically ship within 1 business day",
  },
  {
    id: "6",
    title: "Safe, secure packaging",
    description: "Items carefully packed to prevent damage",
  },
];

const FreeShipping = () => {
  return (
    <div className="flex flex-col min-h-screen hide-scrollbar h-screen overflow-y-scroll">
      <NavBarTop />
      <div className="w-full  mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 py-10">
        <div className="mx-auto py-6 lg:pt-12 ">
          <GenBreadcrumb
            items={[{ label: "Home", to: "/main" }, { label: "Free Shipping" }]}
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
              We’re Here to Help and Ship for Free
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6 text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our support team is ready to assist you and make sure your free
              shipping experience is seamless.
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
            src={IMAGES.SHIPING}
            alt="Support team"
            className="relative z-10 h-48 md:h-64 lg:h-80 object-contain"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.section>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full text-center pb-20"
        >
          <motion.div variants={fadeIn("up")}>
            <Truck className="w-16 h-16 mx-auto text-primary my-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free <span className="text-primary">Shipping</span> Nationwide
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Enjoy free shipping on all US orders or any order over $100. Fast,
              reliable delivery straight to your door.
            </p>
          </motion.div>
        </motion.section>

        <section className="mx-auto py-20 bg-white">
          <div className="">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Shipping <span className="text-primary">Benefits</span>
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full"
                >
                  <Card className="h-full border border-black rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardHeader className="flex items-start gap-4">
                      <div className="p-3 border rounded-full bg-white group-hover:bg-black transition-colors">
                        <CheckCircle className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-left group-hover:text-black">
                          {benefit.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-gray-600 text-left pb-6  group-hover:text-black">
                      {benefit.description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold">
              Ready to Experience{" "}
              <span className="text-primary">Free Shipping</span>?
            </h2>
            <p className="text-gray-700 text-lg">
              Place your order today and enjoy hassle-free shipping on all
              eligible purchases.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <div className="border w-max mx-auto border-black rounded-lg p-1 hover:bg-black cursor-pointer">
                <Button className="bg-black cursor-pointer hover:bg-gray-800 text-white px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                  Start Return Process
                  <Truck className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
            <p className="text-sm text-gray-500 mt-4">
              *Some exclusions may apply. See our shipping policy for details.
            </p>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default FreeShipping;
