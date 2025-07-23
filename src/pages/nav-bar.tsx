import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Heart, ShoppingCart, User } from "lucide-react";
import SearchSheet from "../components/search-sheet";
import WishlistSheet from "../components/login-sheet";
import CartSheet from "../components/cart-sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-3 w-[90%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">BrandName</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <SearchSheet>
              <button className="p-1 text-gray-600 hover:text-indigo-600 hidden sm:block">
                <div className="hidden sm:block">
                  <Search className="w-5 h-5 text-gray-700 transition-all duration-300 hover:scale-140" />
                </div>
                <span className="sm:hidden text-sm font-medium">Search</span>
              </button>
            </SearchSheet>
            <WishlistSheet>
              <div className="relative cursor-pointer hidden sm:block">
                <div className="hidden sm:block">
                  {/* <User className="w-5 h-5 text-gray-700 transition-all duration-300 hover:scale-140" /> */}

                  <Link to="/profile" className="flex items-center">
                    <User className="w-5 h-5 text-gray-700 transition-all duration-300 hover:scale-140" />
                  </Link>
                </div>
                <span className="sm:hidden text-sm font-medium">Account</span>
              </div>
            </WishlistSheet>
            <div className="relative cursor-pointer hidden sm:block">
              <div className="hidden sm:block">
                <Link to="/wishlist" className="flex items-center">
                  <Heart className="w-5 h-5 text-gray-700 transition-all duration-300 hover:scale-140" />
                </Link>
                <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </div>
              <span className="sm:hidden text-sm font-medium">Wishlist</span>
            </div>
            <div className="hidden sm:block">
              <CartSheet itemCount={3}>
                <div className="relative cursor-pointer">
                  <ShoppingCart className="w-5 h-5 text-gray-700 transition-all duration-300 hover:scale-140" />
                  <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    2
                  </span>
                </div>
              </CartSheet>
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 text-gray-600 hover:text-indigo-600"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Only on small screens when burger clicked */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="py-2 text-gray-700 hover:text-indigo-600 font-medium flex"
                onClick={() => setIsMenuOpen(false)}
              >
                {/* <Search className="text-lg gap-4" /> */}
                Search
              </Link>
              <Link
                to="/shop"
                className="py-2 text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Account
              </Link>
              <Link
                to="/wishlist"
                className="py-2 text-gray-700 hover:text-indigo-600 font-medium"
              >
                Wishlist
              </Link>
              <Link
                to="/sale"
                className="py-2 text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
