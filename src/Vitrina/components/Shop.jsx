import React, { useEffect, useContext } from "react";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from "../../config";
import Basketlist from "./Basketlist";
import Cart from "./Cart";
import GoodsList from "./GoodsList";
import Loader from "./Loader";
import { ToastContainer } from 'react-toastify';


function Shop() {
  const {setGoods, loading, order, isBasketShow } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {setGoods(data.featured)});
  }, []);

  return (
    <div className="container content">
      <ToastContainer/>
      <Cart quantity={order.length} />
      <h1>
        {loading ? <Loader /> : <GoodsList />}
        {isBasketShow && <Basketlist />}
      </h1>
    </div>
  );
}

export default Shop;
