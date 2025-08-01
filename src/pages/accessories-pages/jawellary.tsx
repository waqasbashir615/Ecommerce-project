// pages/Jawellary.tsx

import Footer from "@/components/footer";
import CategoryProductList from "../generic-components/CategoryProductList";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import NavBarTop from "../nav-bar";

const Jawellary = () => {
  return (
    <div>
    <NavBarTop/>
    <div className="container mx-auto mb-10">
      <div className="py-10 ps-10">
        {/* Breadcrumb */}
        <GenBreadcrumb
          items={[
            { label: "Home", to: "/main" },
            { label: "jewelery" }, // current page
          ]}
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold pb-6">jewelery</h1>
      </div>
      <CategoryProductList category="jewelery" />
    </div>
    <Footer/>
   </div>
  );
};

export default Jawellary;
