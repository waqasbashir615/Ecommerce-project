import Footer from "@/components/footer";
import CategoryProductList from "../generic-components/CategoryProductList";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import NavBarTop from "../nav-bar";

const MensClothing = () => {
  return (
    <div>
      <NavBarTop />
      <div className="container mx-auto mb-10">
        <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-20 lg:py-10">
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
      <Footer />
    </div>
  );
};

export default MensClothing;
