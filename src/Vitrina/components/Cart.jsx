import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const {order, handleBasketShow = Function.prototype } = useContext(ShopContext);
  const quantity = order.length;
  return (
    <div className="karta" onClick={handleBasketShow}>
      <i className="large material-icons green ">add_shopping_cart</i>
      {quantity ? (
        <span className="cart-quantity green">{quantity}</span>
      ) : null}
    </div>
  );
}

export default Cart;
