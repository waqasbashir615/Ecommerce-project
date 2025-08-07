import { Truck, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import NavBarTop from "../nav-bar";
import Footer from "@/components/footer";

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
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full text-center pb-20"
        >
          <div className="mx-auto py-10  sm:py-16  md:py-16  lg:py-20 ">
            <GenBreadcrumb
              items={[
                { label: "Home", to: "/main" },
                { label: "Free Shipping" },
              ]}
            />
          </div>
          <motion.div variants={fadeIn("up")}>
            <Truck className="w-16 h-16 mx-auto text-primary mb-6" />
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
