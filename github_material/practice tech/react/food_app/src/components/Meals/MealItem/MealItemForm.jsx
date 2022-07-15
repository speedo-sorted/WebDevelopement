import React, {useRef, useState} from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

export default function MealItemForm(props) {

  const [isAmountValid, setIsAmountValid] = useState(true);

  const quantityRef = useRef();

    function submitHandler(e){
      e.preventDefault();
      const stringAmount = quantityRef.current.value;
      const numberAmount = +quantityRef.current.value;
      
      if(stringAmount.trim().length === 0 || numberAmount < 1 || numberAmount > 5){
        setIsAmountValid(false);
        return;
      }

      setIsAmountValid(true);
      props.addItemToCart(numberAmount);

    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" 
            input={{
                id: "amount_" + props.id, 
                type: "number",
                defaultValue: "1",
                min: "1", 
                max: "5",
                step: "1",
                ref: quantityRef,
            } 
            }
        />
        <button>+ Add</button>
        {!isAmountValid && <p style={{color: "red"}}>Please enter valid amount(1-5)</p>}
    </form>
  )
}
