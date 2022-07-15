import { useState } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meal from "./components/Meals/Meal";
import CartProvider from "./store/CartProvider";

// const DUMMY_MEALS = [
//   {
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     name: "Schnitzmeal",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

// async function addItem(item) {
//   const response = await fetch(process.env.REACT_APP_DB + "/items.json", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(item),
//   });

//   console.log(response);
//   // if(!response.ok)
//   //   throw new Error(response.message)

//   const data = await response.json();

//   console.log("item added", data);
// }
// useEffect(() => {
//   for (let item of DUMMY_MEALS) {
//     addItem(item);
//   }
// }, []);

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  function showCartHandler() {
    setCartVisible(true);
  }
  function hideCartHandler() {
    setCartVisible(false);
  }

  return (
    <CartProvider>
      {cartVisible && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;

/* 

App 
  Header 
  Main
    Front
    Main-card
    

*/
