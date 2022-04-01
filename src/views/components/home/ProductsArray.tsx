import React from "react";
import ProductCard from "../common/ProductCard";

export const ProductsArray = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => (
        <ProductCard />
      ))}
    </div>
  );
};
