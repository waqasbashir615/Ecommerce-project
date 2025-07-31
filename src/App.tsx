import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import MainPage from "./pages/main-page";
import PrivateRoute from "./route-config/private-route";
import WishListPage from "./components/wish-list-page";
import UserProfile from "./pages/profile";
import CustomerSupport from "./pages/services/customer-support";
import FreeShapping from "./pages/services/free-shapping";
import ReturnPolicy from "./pages/services/return-policy";
import SecurePayments from "./pages/services/secure-payments";
import ReviewPage from "./pages/review-pages";
import TestPage from "./pages/test";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/main"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/profile" element={<UserProfile/>} />
      <Route path="/customer-support" element={<CustomerSupport/>} />
      <Route path="/free-shapping" element={<FreeShapping/>} />
      <Route path="/return-policy" element={<ReturnPolicy/>} />
      <Route path="/secure-payments" element={<SecurePayments/>} />
      <Route path="/review-pages" element={<ReviewPage/>} />
      <Route path="/test" element={<TestPage/>} />
    </Routes>
  );
};

export default App;
