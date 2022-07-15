import React, { useState, useEffect } from "react";
import cartContext from "./cart-context";
import useHttp from "./../components/hooks/use-http";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

export default function CartProvider(props) {
  const { isLoading, isError, requester } = useHttp();
  const [cartState, setCartState] = useState(defaultCartState);

  function fetchCart(data) {
    // console.log("data", data);
    const amount = data.totalAmount;
    const items = [];
    if (data.items) {
      for (let key in data.items) {
        items.push(data.items[key]);
      }
    }
    // console.log("items", items);
    setCartState({ totalAmount: amount, items: items });
  }

  useEffect(() => {
    requester(
      {
        url: `${process.env.REACT_APP_DB}/cart.json`,
        body: {},
      },
      fetchCart
    );
  }, []);

  function getNewState(type, item) {
    if (type === "ADD") {
      let newItems;
      if (cartState.items.some((food) => food.id === item.id)) {
        newItems = cartState.items.map((food) => {
          const currentAmount = food.amount;
          return food.id === item.id
            ? { ...food, amount: currentAmount + item.amount }
            : food;
        });
      } else {
        newItems = cartState.items.concat(item);
      }

      const newTotalAmount = cartState.totalAmount + item.price * item.amount;

      return {
        items: newItems,
        totalAmount: newTotalAmount,
      };
    } else if (type === "REMOVE") {
      const myId = item;
      const removableItem = cartState.items.filter(
        (item) => item.id === myId
      )[0];
      const newTotalAmount = cartState.totalAmount - removableItem.price;
      let newItems;
      if (removableItem.amount === 1) {
        newItems = cartState.items.filter((item) => item.id !== myId);
      } else {
        const originalAmount = removableItem.amount;
        newItems = cartState.items.map((item) =>
          item.id === myId ? { ...item, amount: originalAmount - 1 } : item
        );
      }

      return {
        totalAmount: newTotalAmount,
        items: newItems,
      };
    }
    return {};
  }

  function getConfig(type, item) {
    // item amount should be pre evaluated.
    let config = {};

    if (type === "ADD") {
      config.url = `${process.env.REACT_APP_DB}/cart/items/${item.id}.json`;
      config.body = {
        method: "PUT",
        "Content-Type": "application/json",
        body: JSON.stringify(item),
      };
    } else if (type === "AMOUNT") {
      config.url = `${process.env.REACT_APP_DB}/cart/totalAmount.json`;
      config.body = {
        method: "PUT",
        "Content-Type": "application/json",
        body: JSON.stringify(item),
      };
    } else if (type === "DELETE") {
      config.url = `${process.env.REACT_APP_DB}/cart/items/${item.id}.json`;
      config.body = {
        method: "DELETE",
      };
    }

    return config;
  }

  async function addItemHandler(item) {
    const newState = getNewState("ADD", item);
    let newItem = newState.items.filter((food) => food.id === item.id)[0];
    await requester(getConfig("ADD", newItem), () => {});
    await requester(getConfig("AMOUNT", newState.totalAmount), () => {});
    setCartState(newState);
  }
  async function removeItemHandler(id) {
    const newState = getNewState("REMOVE", id);
    const isItemPresent =
      newState.items.filter((food) => food.id === id).length > 0;
    if (isItemPresent) {
      await requester(getConfig("ADD", id), () => {});
    } else {
      await requester(getConfig("DELETE", id), () => {});
    }
    await requester(getConfig("AMOUNT", newState.totalAmount), () => {});
    setCartState(newState);
  }

  const myCartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <>
      {isError && (
        <p style={{ color: "white" }}>
          Something went wrong! Please refresh the page.
        </p>
      )}
      {!isError && isLoading && <p style={{ color: "white" }}>Loading...</p>}
      {!isError && !isLoading && (
        <cartContext.Provider value={myCartContext}>
          {props.children}
        </cartContext.Provider>
      )}
    </>
  );
}
