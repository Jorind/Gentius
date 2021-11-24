import Footer from "../../components/Footer";
import Products from "../../components/marketplace/Products";
import Navigation from "../../components/Navigation";

export default function ProductsPage() {
  return (
    <div>
      <Navigation />
      <Products />
      <Footer />
    </div>
  );
}

// export function getServerSideProps() {}
