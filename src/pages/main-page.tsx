import Cetagories from "@/components/cetagories";
import HeroSection from "../components/hero-section";
import NavBarTop from "./nav-bar";
import Trending from "@/components/trending";
import BestSeller from "@/components/best-seller";
import LatestBlogs from "@/components/latest-blogs";
import FollowUs from "@/components/follow-us";
import Services from "@/components/services";
import Footer from "@/components/footer";
// import WishListPage from "@/components/wish-list-page";
// import { useNavigate } from "react-router-dom";
// import ApiIntegrationPract from "@/c omponents/api-integration-pract";

const Mainpage = () => {
  // const navigate = useNavigate();

  // const goToWishlist = () => {
  //   navigate("/wishlist");
  // };
  return (
    <div className="bg-white">
      <NavBarTop />
      {/* <button onClick={goToWishlist}>Go to Wishlist</button> */}
      <HeroSection />
      <div className="w-full p-5 lg:p-0 lg:w-[70%] mx-auto ">
        <Cetagories />
        <Trending />
        <BestSeller />
        <LatestBlogs />
      </div>
      <FollowUs />
      <div className="w-full p-5 lg:p-0 lg:w-[70%] mx-auto">
        <Services />
      </div>
      <Footer />
      {/* <ApiIntegrationPract/> */}
      {/* <div className="w-full p-5 lg:p-0  mx-auto">
        <WishListPage />
      </div> */}
    </div>
  );
};

export default Mainpage;
