import React from "react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h4>{product}</h4>
        <p>{product}</p>
      </div>
    </div>
  );
}
