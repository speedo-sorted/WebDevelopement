import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import cartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const [isBump, setIsBump] = useState(false);
  const cartCtx = useContext(cartContext);
  console.log("cartctx", cartCtx);
  const totalCartItems = cartCtx.items.reduce((curCnt, item) => {
    console.log("amount", item.amount);
    return curCnt + item.amount;
  }, 0);

  const btnClass = `${classes.button} ${isBump ? classes.bump : " "}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setIsBump(true);
    const timer = setTimeout(() => setIsBump(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
}
