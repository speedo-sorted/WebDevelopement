import { useState } from 'react';

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Meal from './components/Meals/Meal';
import CartProvider from './store/CartProvider';

function App() {

  const [cartVisible, setCartVisible] = useState(false);

  function showCartHandler(){
    setCartVisible(true);
  }
  function hideCartHandler(){
    setCartVisible(false);
  }

  return (
    <CartProvider>

      {cartVisible && <Cart hideCart={hideCartHandler} />}
      <Header showCart={showCartHandler}/>
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