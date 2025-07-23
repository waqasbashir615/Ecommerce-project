import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import MainPage from "./pages/main-page";
import PrivateRoute from "./route-config/private-route";
import WishListPage from "./components/wish-list-page";
import UserProfile from "./pages/profile";

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
    </Routes>
  );
};

export default App;
