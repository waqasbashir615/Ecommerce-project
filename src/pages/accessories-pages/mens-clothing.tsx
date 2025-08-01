import Footer from "@/components/footer";
import CategoryProductList from "../generic-components/CategoryProductList";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import NavBarTop from "../nav-bar";

const MensClothing = () => {
  return (
   <div>
    <NavBarTop/>
   <div className="container mx-auto mb-10">
      <div className="py-10 ps-10">
        {/* Breadcrumb */}
        <GenBreadcrumb
          items={[
            { label: "Home", to: "/main" },
            { label: "Men's Clothing" }, // current page
          ]}
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold pb-6">Men's Clothing</h1>
      </div>
      <CategoryProductList category="men's clothing" />
    </div>
    <Footer/>
   </div>
  );
};

export default MensClothing;
