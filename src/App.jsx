import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { createContext, useState } from "react";
import Modal from "./components/Modal";

export const ProductContext = createContext([]);
export const cartContext = createContext([]);

const App = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { cartArray, products } = useLoaderData();
  const [cart, setCart] = useState(cartArray);
  console.log(cartArray);

  // session storage
  const cartAlert = sessionStorage.getItem("alert");
  if (cart.length > 0 && cartAlert !== "true") {
    setIsOpen(true);
    sessionStorage.setItem("alert", true);
  }

  return (
    <ProductContext.Provider value={products}>
      <cartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className="min-h-[calc(100vh-137px)]">
          <Outlet />
        </div>
        <Footer />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </cartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
