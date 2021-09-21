import React from "react";
import BasketItems from "./BasketItems";
import { useContext } from "react";
import { ShopContext } from "../context";

function Basketlist() {
  const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);
  console.log(order)

  const totalPrice = order.reduce((sum, el) => {return sum + el.price * el.quantity}, 0);
  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket List</li>
        {order.length ? (
          order.map((item) => {
            return(
              <BasketItems
                key={item.id}
                {...item}
              />
            );
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">
          Total Price: {totalPrice}
          <b> so'm</b>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
}

export default Basketlist;
