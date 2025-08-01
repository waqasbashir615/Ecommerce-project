import { Truck, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import NavBarTop from "../nav-bar";
import Footer from "@/components/footer";

// Properly typed variants
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

const fadeIn = (direction: 'left' | 'right' | 'up' | 'down'): Variants => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
        },
    },
});

const benefits = [
    {
        id: "1",
        title: "Applies to all U.S. addresses",
        description: "Free shipping available for all 50 states and territories"
    },
    {
        id: "2",
        title: "No hidden fees or conditions",
        description: "What you see at checkout is what you pay - no surprises"
    },
    {
        id: "3",
        title: "Track your package in real time",
        description: "Get live updates from dispatch to delivery"
    },
    {
        id: "4",
        title: "Applies automatically at checkout",
        description: "No codes needed - discount applies instantly"
    },
    {
        id: "5",
        title: "Fast processing & dispatch",
        description: "Orders typically ship within 1 business day"
    },
    {
        id: "6",
        title: "Safe, secure packaging",
        description: "Items carefully packed to prevent damage"
    }
];

const FreeShipping = () => {
    return (
        <div className="flex flex-col min-h-screen hide-scrollbar h-screen overflow-y-scroll">
            <NavBarTop />
            <div className="min-h-screen w-full bg-white text-gray-900">
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="w-full bg-gradient-to-r from-gray-50 to-gray-100  text-center pb-20"
                >
                    <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
                        <GenBreadcrumb
                            items={[
                                { label: "Home", to: "/main" },
                                { label: "Free Shipping" }, // current page
                            ]}
                        />
                    </div>
                    <motion.div variants={fadeIn('up')}>
                        <Truck className="w-16 h-16 mx-auto text-primary mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Free <span className="text-primary">Shipping</span> Nationwide
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            Enjoy free shipping on all US orders or any order over $100. Fast, reliable delivery straight to your door.
                        </p>
                    </motion.div>
                </motion.section>
                {/* Benefits Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
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
                                <motion.div key={benefit.id} variants={itemVariants}>
                                    <Card className="h-full border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group">
                                        <CardHeader className="flex items-start gap-4">
                                            <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition">
                                                <CheckCircle className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg font-semibold text-left">
                                                    {benefit.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-gray-600 text-left pb-6 px-6">
                                            {benefit.description}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                {/* Call to Action */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="py-16 px-6 bg-gradient-to-r from-gray-50 to-gray-100 text-center"
                >
                    <div className="max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl font-bold">
                            Ready to Experience <span className="text-primary">Free Shipping</span>?
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Place your order today and enjoy hassle-free shipping on all eligible purchases.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                size="lg"
                                className="px-8 py-6 text-lg rounded-lg bg-primary hover:bg-primary/90 shadow-lg"
                            >
                                Start Shopping Now
                                <Truck className="ml-2 h-5 w-5" />
                            </Button>
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