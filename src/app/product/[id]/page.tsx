import GridCard from "@/components/GridCard";
import ProductGallery from "@/components/product/productGallery/ProductGallery";
import ProductInfo from "@/components/product/productInfo/ProductInfo";
import Tabs from "@/components/product/tabs/Tabs";

const ProductDetails = () => {
  return (
    <>
      {/* breadcrumb todo */}
      <div>
        <ProductGallery />
        <ProductInfo />
      </div>
      <Tabs />
      <GridCard />
    </>
  );
};

export default ProductDetails;
