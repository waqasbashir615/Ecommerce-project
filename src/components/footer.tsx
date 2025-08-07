import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import IMAGES from "@/assets/images";

// Data for footer sections to make the code more maintainable
  const sections = [
    {
      title: "Categories",
      links: [
        { text: "Men", to: "/mens-clothing" },
        { text: "Women", to: "/women-clothing" },
        { text: "Accessories", to: "/category" },
        { text: "jawellary", to: "/jawellary" },
        { text: "Watch", to: "/electronics" },
        { text: "Dress", to: "/category" },
      ],
    },
    {
      title: "Information",
      links: [
        { text: "About us", to: "/customer-support" },
        { text: "Contact us", to: "/customer-support" },
        { text: "Terms & Conditions", to: "/return-policy" },
        { text: "Returns & Exchanges", to: "/return-policy" },
        { text: "Shipping & Delivery", to: "/free-shapping" },
        { text: "Privacy Policy", to: "/secure-payments" },
      ],
    },
    {
      title: "Useful links",
      links: [
        { text: "Latest News", to: "/category" },
        { text: "My Account", to: "/profile" },
        { text: "Size Guide", to: "/customer-support" },
        { text: "FAQs", to: "/customer-support" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF aria-label="Facebook" />, to: "https://facebook.com" },
    { icon: <FaXTwitter aria-label="Twitter" />, to: "https://twitter.com" },
    {
      icon: <FaInstagram aria-label="Instagram" />,
      to: "https://instagram.com",
    },
    {
      icon: <FaLinkedinIn aria-label="LinkedIn" />,
      to: "https://linkedin.com",
    },
    {
      icon: <FaPinterestP aria-label="Pinterest" />,
      to: "https://pinterest.com",
    },
  ];

const Footer = () => {
  

  return (
    <footer className="bg-gray-50 text-gray-800 ">
      <div className="w-full p-5 md:px-10 sm:px-5 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              <Link to="/" className="hover:text-gray-600 transition-colors">
                BrandMind
              </Link>
            </h2>

            <address className="not-italic space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MdLocationOn className="mt-1 flex-shrink-0" />
                <span>Nawab Town Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <a
                  href="mailto:waqasb711@gmail.com"
                  className="hover:underline"
                >
                  waqasb711@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone />
                <a href="tel:+923086996619" className="hover:underline">
                  +92-308-6996619
                </a>
              </div>
            </address>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic sections */}
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      className="hover:underline hover:text-gray-600 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter Signup</h3>
            <p className="text-sm">
              Subscribe to our newsletter and get 10% off your first purchase
            </p>

            <form className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email for newsletter subscription"
                  required
                  className="w-full px-4 py-3 pr-32 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
                <Button
                  type="submit"
                  className="absolute top-1/2 right-1 -translate-y-1/2 bg-black text-white h-7 rounded-md hover:bg-gray-800 active:bg-gray-900 transition-all shadow-md hover:shadow-lg"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            <div className="flex flex-wrap items-center gap-3">
              <img
                src={IMAGES.PAYPAL}
                alt="PayPal"
                className="size-4 w-auto object-contain"
                loading="lazy"
              />
              <img
                src={IMAGES.SkrillLogo}
                alt="Skrill"
                className="size-4 w-auto object-contain"
                loading="lazy"
              />
              <img
                src={IMAGES.GOOGLEPAY}
                alt="Google Pay"
                className="size-4 w-auto object-contain"
                loading="lazy"
              />
              <img
                src={IMAGES.VISA}
                alt="Visa"
                className="size-4 w-auto object-contain"
                loading="lazy"
              />
              <img
                src={IMAGES.MASTER}
                alt="MasterCard"
                className="size-4 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} BrandMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
