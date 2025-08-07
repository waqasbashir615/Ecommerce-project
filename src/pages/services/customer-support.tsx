import { Mail, Phone, MessageSquare, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import NavBarTop from "../nav-bar";
import Footer from "@/components/footer";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";

const contactOptions = [
  {
    icon: Mail,
    label: "Email Us",
    description: "Send us your queries via email.",
    email: "support615@example.com",
  },
  {
    icon: Phone,
    label: "Give Us a Call",
    description: "We're available from 9am to 6pm (Mon - Sat).",
    email: "+92-327-69919615",
  },
  {
    icon: MessageSquare,
    label: "Start a Live Chat",
    description: "Chat in real time with our support team.",
    email: "support615@example.com",
  },
  {
    icon: Users,
    label: "Talk to Sales",
    description: "Discuss your needs with our sales experts.",
    email: "sales615@example.com",
  },
];

const faqs = [
  {
    question: "What technologies did you use in your portfolio?",
    answer:
      "My portfolio is built using React, TypeScript, Tailwind CSS, and ShadCN UI components for accessibility and design consistency.",
  },
  {
    question: "How can I contact you for freelance work?",
    answer:
      "You can email me directly at waqasb711@gmail.com or use the contact form provided in the contact section.",
  },
  {
    question: "Do you build mobile responsive websites?",
    answer:
      "Yes, all my projects are fully responsive across all screen sizes, ensuring a smooth user experience on any device.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I specialize in frontend development with React, building dashboards, landing pages, and full-stack applications with modern architectures.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactFaqSection = () => {
  return (
    <div className="hide-scrollbar h-screen overflow-y-scroll">
      <NavBarTop />
      <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 py-20">
      <div className="py-4 sm:py-6 md:py-8 lg:py-10">
        <GenBreadcrumb
          items={[
            { label: "Home", to: "/main" },
            { label: "Customer Support" }, // current page
          ]}
        />
      </div>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Contact Our Friendly Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Let us know how we can help you
          </p>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12 md:mb-16"
        >
          {contactOptions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full"
              >
                <Card className="p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 border rounded-full bg-white group-hover:bg-black transition-colors flex-shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-black">
                        {item.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 group-hover:text-black">
                        {item.description}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2 group-hover:text-black">
                        {item.email}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="py-4 sm:py-6 md:py-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3 sm:space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-shadow"
              >
                <AccordionTrigger className="px-3 sm:px-5 py-3 sm:py-4 text-left text-sm sm:text-base font-medium hover:bg-black hover:text-white data-[state=open]:bg-black data-[state=open]:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactFaqSection;
