import GridCard from "@/components/GridCard";
import Heading from "@/components/Heading";
import Brands from "@/components/home/brands/Brands";
import Browse from "@/components/home/browse/Browse";
import Hero from "@/components/home/hero/Hero";
import Testimonials from "@/components/home/testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero/>
      <Brands/>
      <Heading title="top selling"/>
      <GridCard />
      <Browse />
      <Testimonials />
    </>
  )
}

export default Home