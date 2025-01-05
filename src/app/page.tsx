import GridCard from "@/components/GridCard";
import Brands from "@/components/home/brands/Brands";
import Browse from "@/components/home/browse/Browse";
import Hero from "@/components/home/hero/Hero";
import Testimonial from "@/components/home/testimonial/Testimonial";


const Home = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <GridCard />
      <Browse />
      <Testimonial />
    </>
  )
}

export default Home