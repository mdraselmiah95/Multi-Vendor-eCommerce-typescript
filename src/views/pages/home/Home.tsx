import React from "react";
import DSlider from "../../components/custom/DSlider";
import { ProductsArray } from "../../components/home/ProductsArray";

const Home = () => {
  return (
    <main>
      <div className="py-12">
        <DSlider />
      </div>
      <div>
        <ProductsArray />
      </div>
    </main>
  );
};
export default Home;
