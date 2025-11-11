import ShopByCategory from "../../components/ShopByCategory";
import Hero from "../../components/Hero";
import React from "react";
import PopularProducts from "../../components/PopularProducts";
import FeaturedProducts from "../../components/FeaturedProducts";
import PlantClinic from "../../components/PlantClinic";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ShopByCategory></ShopByCategory>
            <PopularProducts  ></PopularProducts>

      <FeaturedProducts></FeaturedProducts>
      <PlantClinic></PlantClinic>
    </div>
  );
};

export default Home;
