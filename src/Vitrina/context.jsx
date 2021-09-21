import { createContext, useReducer } from "react";
import { Reducer } from "./reducer";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(Reducer, initialState);

  value.addToBasket = (item) => {
    toast.success("Mahsulot savatchaga qo'shildi");
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.incrementQuantity = (itemID) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemID } });
  };

  value.decrementQuantity = (itemID) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemID } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.removeFromBasket = (itemID) => {
    toast.error("Mahsulot savatchadan olib tashlandi");
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemID } });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
