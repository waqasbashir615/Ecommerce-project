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

const Footer = () => {
  return (
    <div className="  bg-gray-50 text-gray-800">
      <footer className=" py-10 w-[90%] mx-auto ">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand & Contact */}
          <div>
            <h2 className="text-3xl font-bold mb-4">kalles</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MdLocationOn className="mt-1" />
                <span>
                  184 Main Rd E, St Albans VIC 3021,
                  <br />
                  Australia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone />
                <span>+001 2233 456</span>
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
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
              />
              <Button className="bg-black text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </div>
            {/* <div className="flex gap-4 mt-6 opacity-60 text-xs">
              <img src="/paypal.svg" alt="PayPal" />
              <img src="/visa.svg" alt="Visa" />
              <img src="/amex.svg" alt="Amex" />
              <img src="/skrill.svg" alt="Skrill" />
              <img src="/bank.svg" alt="Bank Transfer" />
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
