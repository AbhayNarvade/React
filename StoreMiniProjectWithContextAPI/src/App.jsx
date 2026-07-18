import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CartScreen from "./components/CartScreen";
import Product from "./components/Product";
import { Mystore } from "./context/MyContext";

const App = () => {
  console.log("isCartOpen")
  const [data, setData] = useState([]);
  let { isCartOpen, setIsCartOpen } = useContext(Mystore);
  const productData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    productData();
    console.log(data);
  }, []);
  // console.log(data);
  return (
    <div>
      <Navbar setIsCartOpen={setIsCartOpen} />

      <div>
        {isCartOpen ? (
          <div>
            <CartScreen  />
          </div>
        ) : (
          <div className="flex gap-10 p-8 justify-center flex-wrap">
            {data.map((e) => {
              return (
                <Product
                  key={e.id}
                  product={e}
              
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
