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
import IMAGES from "@/assets/images";

const Footer = () => {
  return (
    <div className="  bg-gray-50 text-gray-800">
      <footer className=" py-10 w-[90%] mx-auto ">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand & Contact */}
          <div>
            <h2 className="text-3xl font-bold mb-4">BrandMind
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MdLocationOn className="mt-1" />
                <span>Nawab Town Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <span>waqasb711@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone />
                <span>+92-308-6996619</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4 text-xl">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaPinterestP />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>Shoes</li>
              <li>Watch</li>
              <li>Dress</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>About us</li>
              <li>Contact us</li>
              <li>Terms & Conditions</li>
              <li>Returns & Exchanges</li>
              <li>Shipping & Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Useful links</h3>
            <ul className="space-y-2 text-sm">
              <li>Latest News</li>
              <li>My Account</li>
              <li>Size Guide</li>
              <li>FAQs</li>
              <li>FAQs 2</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter Signup</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter and get 10% off your first purchase
            </p>
            <div className="w-full max-w-md">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-32 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
                <Button
                  type="submit"
                  className="absolute top-1/2 right-1 cursor-pointer -translate-y-1/2 bg-black text-white h-7 rounded-md hover:bg-gray-800 active:bg-gray-900 transition-all shadow-md hover:shadow-lg"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs">
              <img
                src={IMAGES.PAYPAL}
                alt="PayPal"
                className="size-8 object-contain"
              />
              <img
                src={IMAGES.SkrillLogo}
                alt="Skrill"
                className="size-8 object-contain"
              />
              <img
                src={IMAGES.GOOGLEPAY}
                alt="Google Pay"
                className="size-8 object-contain"
              />
              <img
                src={IMAGES.VISA}
                alt="Visa"
                className="size-8 object-contain"
              />
              <img
                src={IMAGES.MASTER}
                alt="MasterCard"
                className="size-8 object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
