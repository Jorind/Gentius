import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import ProductDetail from "../../components/ProductDetail";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div className="pt-6">
      <Navigation />
      <ProductDetail productId={productId} />
      <Footer />
    </div>
  );
}

// export function getServerSideProps() {}
