import { RefreshCw, Truck, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBarTop from "../nav-bar";
import Footer from "@/components/footer";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";

const steps = [
    {
        icon: <Truck className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />,
        title: "1. Request Return",
        desc: "Initiate your return through our online portal or contact customer service",
    },
    {
        icon: <CheckCircle className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />,
        title: "2. Package Item",
        desc: "Securely pack your item with original packaging and included accessories",
    },
    {
        icon: <XCircle className="w-6 h-6 transition-colors duration-300 group-hover:text-white" />,
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

const EasyReturns = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBarTop />
            <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:pt-10">
                <GenBreadcrumb
                    items={[
                        { label: "Home", to: "/main" },
                        { label: "Return Policy" }, // current page
                    ]}
                />
            </div>
            <section className="w-full bg-white  md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="mx-auto bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md hover:shadow-lg transition-shadow">
                            <RefreshCw className="w-8 h-8 text-black" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Easy Returns
                        </h1>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Simply return it within 30 days for an exchange
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {steps.map((step, index) => (
                            <div
                                key={index}
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
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-100 rounded-xl p-8 mb-12 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-black mb-6">Return Policy</h2>
                        <div className="space-y-4">
                            {policyPoints.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group cursor-pointer">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 rounded-full bg-white flex border  items-center justify-center group-hover:bg-black">
                                            <div className="w-2 h-2 rounded-full bg-black group-hover:bg-white"></div>
                                        </div>
                                    </div>
                                    <p className="text-gray-800">
                                        <span className="font-medium">{item.title}:</span> {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-black mb-4">
                            Ready to initiate your return?
                        </h3>
                        <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                            Start Return Process
                        </Button>
                        <p className="text-gray-600 text-sm mt-4">
                            Need help?{" "}
                            <a href="#" className="text-black underline hover:text-gray-800 transition-colors">
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
