import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";
import { addToDb } from "../../utils/fakeDB";
import { ProductContext, cartContext } from "../../App";
import { toast } from "react-hot-toast";

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(cartContext);

  // card button handler
  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find(
      (existingProduct) => existingProduct.id === product.id
    );
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((existingProduct) => existingProduct.id !== id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, product];
    }

    toast.success("product added!!!");

    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="product-container">
      {products.map((product) => (
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
