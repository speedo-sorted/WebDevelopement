import {useState} from 'react';

function Input({placeholder, value, catchInputChange, type, id}){

    const [inputValue, setInputValue] = useState(value);

    function callChangeHandler(event){
        catchInputChange(event.target.value);
        setInputValue(event.target.value);
    }
    return (
        <input placeholder={placeholder} value={inputValue} onChange={callChangeHandler} type={type} id={id} />
    );

}

export default Input;