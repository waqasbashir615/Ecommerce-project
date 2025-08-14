import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaHeadset } from "react-icons/fa";
import { RiExchangeLine } from "react-icons/ri";
import { IoCarSportOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Free Shipping",
      description: "Free shipping on all US orders or orders above $100",
      icon: <IoCarSportOutline className="text-3xl" />,
      path: "/free-shapping",
      color: "bg-gray-100 text-black"
    },
    {
      title: "24/7 Support",
      description: "Contact us 24 hours a day, 7 days a week",
      icon: <FaHeadset className="text-3xl" />,
      path: "/customer-support",
      color:  "bg-gray-100 text-black"
    },
    {
      title: "Easy Returns",
      description: "Simply return it within 30 days for an exchange",
      icon: <RiExchangeLine className="text-3xl" />,
      path: "/return-policy",
      color:  "bg-gray-100 text-black"
    },
    {
      title: "Secure Payments",
      description: "We ensure secure payment with PEV",
      icon: <FaShieldAlt className="text-3xl" />,
      path: "/secure-payments",
      color:  "bg-gray-100 text-black"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-16">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience excellence with our comprehensive service offerings designed for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ y: -5 }}
              onClick={() => navigate(service.path)}
              className={`group p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white border border-gray-100 hover:border-transparent`}
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
              <div className="mt-6 text-center">
                <span className="text-sm font-medium text-blue-600 group-hover:underline">
                  Learn more
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;