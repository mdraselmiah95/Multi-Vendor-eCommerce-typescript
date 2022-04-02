import React from "react";
import ProductCard from "../common/ProductCard";

export const ProductsArray = ({ products }: { products: any[] }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
