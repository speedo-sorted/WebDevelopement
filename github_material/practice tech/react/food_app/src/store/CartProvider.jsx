import React, {useReducer} from 'react';
import cartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}
function cartReducer(state, action) {

  if(action.type === "ADD"){
      const newItems = state.items.concat(action.item);
      console.log(newItems);
      const newTotalAmount = state.totalAmount + action.item.price * action.item.quantity;

      return {
        items: newItems, 
        totalAmount: newTotalAmount,
      };
  }

  return defaultCartState;

}

export default function CartProvider(props) {
  
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

  function addItemHandler(item) {
    console.log("dispatcher")
    cartDispatch('ADD', item);  
  }
  function removeItemHandler(id) {
    cartDispatch('REMOVE', id);
  }

  const myCartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount, 
    addItem: (item) => addItemHandler, 
    removeItem: (item) => removeItemHandler,
  };

  return (
    <cartContext.Provider value={myCartContext}>
        {props.children}
    </cartContext.Provider>
  )
}
