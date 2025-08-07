// components/NavBarTop.tsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Heart, ShoppingCart, User } from "lucide-react";
import SearchSheet from "../components/search-sheet";
import WishlistSheet from "../components/login-sheet";
import CartSheet from "../components/cart-sheet";
import { useAppSelector } from "@/store/hooks";

const NavBarTop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wishlistCount = useAppSelector((state) => state.wishlist.items.length);

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-15">
      <div className="flex items-center justify-between w-full mx-auto p-5 md:px-10 sm:px-5 max-w-screen-2xl">
        <div className="flex items-center justify-between w-full ">
          <Link to="/main" className="text-xl font-bold text-gray-800">
            BrandMind
          </Link>

          <div className="flex items-center gap-5">
            {/* Search */}
            <SearchSheet>
              <button className="text-gray-600 hover:text-indigo-600 hidden sm:block">
                <Search className="w-5 h-5" />
              </button>
            </SearchSheet>

            {/* User */}
            <WishlistSheet>
              <Link to="/profile" className="hidden sm:block">
                <User className="w-5 h-5 text-gray-700 hover:scale-110 transition" />
              </Link>
            </WishlistSheet>

            {/* Wishlist */}
            <div className="relative hidden sm:block">
              <Link to="/wishlist">
                <Heart className="w-5 h-5 text-gray-700 hover:scale-110 transition" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Cart */}
            <CartSheet itemCount={3}>
              <div className="relative hidden sm:block">
                <ShoppingCart className="w-5 h-5 text-gray-700 hover:scale-110 transition" />
                <span className="absolute -top-1 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </div>
            </CartSheet>

            {/* Mobile Menu */}
            <div className="sm:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <Search className="w-4 h-4" /> Search
              </Link>
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" /> User Profile
              </Link>
              <Link
                to="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <Heart className="w-4 h-4" /> Wishlist
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" /> Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBarTop;
