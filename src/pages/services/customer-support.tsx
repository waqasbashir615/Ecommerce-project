import {
  Mail,
  Phone,
  MessageSquare,
  Users,
  Clock,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
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
import IMAGES from "@/assets/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactOptions = [
  {
    icon: Mail,
    label: "Email Support",
    description: "Get a response within 24 hours",
    contact: "support@example.com",
    actionLabel: "Send Email",
    action: () => (window.location.href = "mailto:support@example.com"),
  },
  {
    icon: Phone,
    label: "Phone Support",
    description: "Mon-Fri: 9am-6pm (GMT+5)",
    contact: "+92 327 6991961",
    actionLabel: "Call Now",
    action: () => (window.location.href = "tel:+923276991961"),
  },
  {
    icon: MessageSquare,
    label: "Live Chat",
    description: "Instant help from our team",
    contact: "Available 24/7",
    actionLabel: "Start Chat",
    action: () => window.open("/live-chat", "_blank"),
  },
  {
    icon: Users,
    label: "Sales Inquiry",
    description: "For business partnerships",
    contact: "sales@example.com",
    actionLabel: "Contact Sales",
    action: () => (window.location.href = "mailto:sales@example.com"),
  },
];

const faqs = [
  {
    question: "What is your typical response time for support requests?",
    answer:
      "We aim to respond to all support emails within 24 hours during business days. For urgent matters, we recommend using our live chat or phone support options.",
  },
  {
    question: "Do you offer technical support for your products?",
    answer:
      "Yes, we provide comprehensive technical support for all our products. Our support team is trained to help with installation, configuration, and troubleshooting.",
  },
  {
    question: "Where can I find documentation for your services?",
    answer:
      "All product documentation is available in our knowledge base. You can access it through the 'Help Center' link in the website footer.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for most regions. Specific payment options may vary by location.",
  },
  {
    question: "Can I schedule a demo before purchasing?",
    answer:
      "Absolutely! We offer personalized product demos. Please contact our sales team to schedule a session at your convenience.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all our products. If you're not satisfied, you can request a full refund within 30 days of purchase.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactFaqSection = () => {
  return (
    <div className="hide-scrollbar h-screen overflow-y-scroll bg-white">
      <NavBarTop />
      <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="py-2 md:py-6">
          <GenBreadcrumb
            items={[
              { label: "Home", to: "/main" },
              { label: "Support Center", to: "/support" },
              { label: "Contact Us" },
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
              We're Here to Help
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6 text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our support team is ready to assist you with any questions or
              issues you may have.
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
            src={IMAGES.LIVECHAT}
            alt="Support team"
            className="relative z-10 h-48 md:h-64 lg:h-80 object-contain"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.section>

        {/* Contact Options */}
        <section className="py-12 md:py-16">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-black">
              Contact Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our support
              team
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {contactOptions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-5 h-full border border-gray-200 hover:border-black transition-all duration-300 shadow-sm hover:shadow-md flex flex-col bg-white group overflow-hidden">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        className="p-3 rounded-lg bg-gray-100 text-black flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="font-semibold text-lg text-black group-hover:text-gray-800 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {item.label}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-600 mt-1 group-hover:text-gray-800 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <p className="text-sm font-medium text-black mb-3">
                        {item.contact}
                      </p>
                      <motion.div
                        className="relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="absolute inset-0 border border-black rounded-md group-hover:scale-x-110 group-hover:opacity-0 transition-all duration-500" />
                        <Button
                          onClick={item.action}
                          className="w-full bg-black hover:bg-gray-800 text-white relative z-10 flex items-center justify-center gap-2"
                        >
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: -5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {item.actionLabel}
                          </motion.span>
                          <motion.span
                            initial={{ x: -10, opacity: 0 }}
                            whileHover={{ x: 5, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-16 bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 lg:p-12">
          <div className="mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-black">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="border-gray-300 focus:border-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-gray-300 focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  className="border-gray-300 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                />
              </div>

              <div className="flex items-center justify-end">
                <Button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 md:py-12 lg:py-12">
          <div className="">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 mb-4 bg-white text-black px-4 py-2 rounded-full shadow-sm">
                <HelpCircle className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-sm">FAQs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Find quick answers to common questions about our products and
                services
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-all bg-white shadow-sm hover:shadow-md"
                    >
                      <AccordionTrigger className="px-6 py-5 text-left font-medium hover:no-underline text-gray-900 hover:bg-gray-50 data-[state=open]:bg-gray-50 flex items-center justify-between">
                        <span className="text-lg">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5 pt-0 text-gray-700 transition-all duration-200 ease-in-out">
                        <div className="pt-2 border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>  
              </div>
              <div className="w-full lg:w-1/2 hidden lg:block">
                <div className="relative">
                  <img
                    src={IMAGES.FAQICON}
                    alt="FAQ illustration"
                    className="w-full h-auto max-w-lg mx-auto"
                  />
                  <div className="absolute -z-10 w-full h-full bg-blue-100 rounded-lg -bottom-3 -right-3"></div>
                </div>
              </div>
            </div>
            <div className="w-full text-center fex flex-col justify-center mt-12">
              <p className="text-gray-600 mb-5 text-lg">
                Still have questions?
              </p>
              <Button
                variant="default"
                className="bg-black hover:bg-black text-white px-8 py-3 text-lg rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactFaqSection;
