
import './DetailForm.scss';
import { useState } from 'react';

function getKey(){
    return (new Date().valueOf().toString(36) + Math.random().toString(36).slice(2));
}


function DetailForm(props) {

  const [state, setState] = useState({formName: "", formAge: "", isNameValid: false, isAgeValid: false});

  function formSubmitHandler(event){
    event.preventDefault();
    props.addListItem({name: state.formName, age: state.formAge, id:getKey() });

    setState({formName: "", formAge:"", isNameValid: false, isAgeValid:false});
    
  }
  
  function nameChangeHandler(event){
      let gotValue = event.target.value;
      if(gotValue.trim() === "" || (/[^a-z]/i.test(gotValue)))
      {
        setState((prevState) => ({...prevState, formName: gotValue, isNameValid: false})); 
      }
      else
      setState((prevState) => ({...prevState, formName: gotValue, isNameValid: true})); 
    }
    
    function ageChangeHandler(event){
      let gotValue = event.target.value;
      if(gotValue.trim() === "" || isNaN(gotValue) || gotValue > 130 || gotValue < 0)
      {
        setState(({formAge, isAgeValid, ...prevState}) => ({...prevState, formAge: gotValue, isAgeValid: false})); 
      }
      else
      setState(({formAge, isAgeValid, ...prevState}) => ({...prevState, formAge: gotValue, isAgeValid: true})); 
      
  }


  return (
    <form onSubmit={formSubmitHandler} action="">

      <label htmlFor="name">Name</label>
      <input placeholder='Name' value={state.formName} onChange={nameChangeHandler} type="text" id="name" />
      
      <label htmlFor="age">Age</label>
      <input placeholder='Age' value={state.formAge} onChange={ageChangeHandler} type="number" id="age" />
      

      <input type="submit" value="Add" disabled={(!state.isNameValid || !state.isAgeValid)} />

    </form>
  );

}

export default DetailForm;
