import React, { useEffect, useState } from "react";
import ProductService from "../../../services/Product.service";
import DSlider from "../../components/custom/DSlider";
import { ProductsArray } from "../../components/home/ProductsArray";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

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
