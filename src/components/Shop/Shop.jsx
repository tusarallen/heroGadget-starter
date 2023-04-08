import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";

const Shop = () => {
  const productData = useLoaderData();

  //   card button handler
  const handleAddToCart = (id) => {
    console.log(id);
  };

  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard
          handleAddToCart={handleAddToCart}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Shop;
