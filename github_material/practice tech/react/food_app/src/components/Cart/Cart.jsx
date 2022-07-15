import React from "react";
import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);

  const clickHandler = (e) => {
    props.hideCart();
  };

  function removeItemHandler(id) {
    cartCtx.removeItem(id);
  }
  function addItemHandler(item) {
    cartCtx.addItem(item);
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler}
          onAdd={addItemHandler}
          item={item}
        />
      ))}
    </ul>
  );
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const isCartEmpty = cartCtx.items.length === 0;

  return (
    <Modal hideCart={props.hideCart}>
      {isCartEmpty ? <p>The cart is empty!</p> : cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={clickHandler}>
          Close
        </button>
        {!isCartEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
