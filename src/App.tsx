import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginp-pages/login-page";
import SignUp from "./pages/loginp-pages/sign-up";
import ForGotPassword from "./pages/loginp-pages/forgot-password";
import MainPage from "./pages/main-page";
import PrivateRoute from "./route-config/private-route";
import WishListPage from "./components/wish-list-page";
import UserProfile from "./pages/profile";
import CustomerSupport from "./pages/services/customer-support";
import FreeShapping from "./pages/services/free-shapping";
import ReturnPolicy from "./pages/services/return-policy";
import SecurePayments from "./pages/services/secure-payments";
import ReviewPage from "./pages/review-pages";
import CategoryPage from "./pages/accessories-pages/categories-access";
import Electronics from "./pages/accessories-pages/electronics";
import Jawellary from "./pages/accessories-pages/jawellary";
import MensClothing from "./pages/accessories-pages/mens-clothing";
import WomensClothing from "./pages/accessories-pages/womens-access";
import TestPage from "./pages/test";
import PremiumCollection from "./pages/premium-collection";
// import PremiumPage from "./pages/premium-page";
import ScrollToTop from "./components/scroll-to-top";
// import AllProductsPage from "./pages/all-products-page";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForGotPassword />} />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/free-shapping" element={<FreeShapping />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/secure-payments" element={<SecurePayments />} />
        <Route path="/review-pages" element={<ReviewPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/women-clothing" element={<WomensClothing />} />
        <Route path="/mens-clothing" element={<MensClothing />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jawellary" element={<Jawellary />} />
        
        {/* Premium Collection Routes */}
        <Route path="/premium-collection" element={<PremiumCollection />} />
        {/* <Route path="/premium-collection/products" element={<AllProductsPage />} /> */}
        {/* <Route path="/premium-collection/products/:id" element={<PremiumPage />} /> */}
        
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
};

export default App;