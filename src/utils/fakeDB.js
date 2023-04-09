// Add data local storage
const addToDb = (id) => {
  let shoppingCart = {};

  // get previous data from localStorage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  // set id and quantity in local storage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// get stored data from local storage and set it to cart
const getStoredCart = () => {
  let shoppingCart = {};

  // get previous data from localStorage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};

export { addToDb, getStoredCart };
