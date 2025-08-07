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
    <div className="flex flex-col min-h-screen bg-white">
      <NavBarTop />

      <main className="flex-1">
        <section className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 py-10">
          {/* Breadcrumb */}
          <div className="py-20">
            <GenBreadcrumb
              items={[
                { label: "Home", to: "/main" },
                { label: "Secure Payment", to: "/payment" },
              ]}
            />
          </div>

          {/* Header */}
          <div className="text-center mb-16">
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
