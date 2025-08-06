import Cetagories from "@/components/cetagories";
import HeroSection from "../components/hero-section";
import NavBarTop from "./nav-bar";
import Trending from "@/components/trending";
import BestSeller from "@/components/best-seller";
import LatestBlogs from "@/components/latest-blogs";
import FollowUs from "@/components/follow-us";
import Services from "@/components/services";
import Footer from "@/components/footer";
import PremiumCollection from "./premium-collection";

const Mainpage = () => {
  return (
    <div className="bg-white hide-scrollbar h-screen">
      <NavBarTop />
      <HeroSection />
      <div className="w-full p-5 lg:p-0 lg:w-[70%] mx-auto ">
        <Cetagories />
        <Trending />
      </div>
      <div className="w-full mx-auto ">
        <PremiumCollection />
      </div>
      <div className="w-full p-5 lg:p-0 lg:w-[70%] mx-auto ">
        <BestSeller />
        <LatestBlogs />
      </div>
      <FollowUs />
      <div className="w-full p-5 lg:p-0 lg:w-[70%] mx-auto">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
