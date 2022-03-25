import {Fragment} from 'react';
import mealImage from '../../assets/meals.jpg';         // import .jpg and use 
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

export default function Header(props) {
  
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Meals</h1>
              <HeaderCartButton onClick={props.showCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="this is a meal" />
        </div>
    </Fragment>
  );
}
