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
    <div className="w-full rounded-lg p-10 bg-gray-200 animate-pulse">
      <div className="bg-white hide-scrollbar min-h-screen flex flex-col">
        <NavBarTop />
        <HeroSection />
        {/* Main Content Container */}
        <main className="w-full max-w-screen-2xl mx-auto flex-1 md:px-10 px-6">
          <Cetagories />
          <Trending />
          <PremiumCollection />
          <BestSeller />
          <LatestBlogs />
          <FollowUs />
          <Services />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Mainpage;
