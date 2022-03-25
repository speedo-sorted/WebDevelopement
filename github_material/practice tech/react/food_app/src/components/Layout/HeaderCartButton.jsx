import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import cartContext from '../../store/cart-context';

export default function HeaderCartButton(props) {
  const cartCtx = useContext(cartContext);
  const totalCartItems = cartCtx.items.reduce((curCnt, item) => {
    return curCnt + item.amount;
  }, 0);  

  return (
    <button className={classes.button + ' ' + classes.bump} onClick={props.onClick}>
      
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{totalCartItems}</span>

    </button>
  );
}
