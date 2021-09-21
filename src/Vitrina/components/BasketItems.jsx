import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItems(props) {
  const {
    id,
    name,
    price,
    quantity
  } = props;

  const { incrementQuantity, decrementQuantity, removeFromBasket} = useContext(ShopContext);

  return (
    <div>
      <li className="collection-item">
        {name} x{quantity} * {price} = {price * quantity}
        <b> so'm</b>
        <span className="secondary-content">
          <button
            className="bsk-button-add"
            onClick={() => incrementQuantity(id)}
          >
            +
          </button>
          <button
            className="bsk-button-dec"
            onClick={() => decrementQuantity(id)}
          >
            -
          </button>
          <i
            className="material-icons basket-delete"
            onClick={() => removeFromBasket(id)}
          >
            delete
          </i>
        </span>
      </li>
    </div>
  );
}

export default BasketItems;
