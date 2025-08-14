import Footer from "@/components/footer";
import CategoryProductList from "../generic-components/CategoryProductList";
import GenBreadcrumb from "../generic-components/gen-breadcrumb";
import NavBarTop from "../nav-bar";

const WomensClothing = () => {
  return (
    <div>
      <NavBarTop />
      <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-10 py-10">
        <div className="py-10 sm:py-12 lg:py-16 xl:py-16">
          <GenBreadcrumb
            items={[
              { label: "Home", to: "/main" },
              { label: "Women's Clothing" }, // current page
            ]}
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold pb-6">Women's Clothing</h1>
        </div>
        <CategoryProductList category="women's clothing" />
      </div>
      <Footer />
    </div>
  );
};

export default WomensClothing;
