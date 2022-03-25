
import DetailForm from './components/DetailForm';
import ItemList from './components/ItemList';
import './App.scss';
import { useState } from 'react';


function App(){

    const [list, setList] = useState([]);
    function modifyList(newItem){
        console.log(newItem);
        setList(prevList => {
            return [...prevList, newItem];
        });
    }
    function removeItemHandler(itemKey){
        setList(prevList => prevList.filter(el => el.id !== itemKey));
    }

    return (
        <div className="container">
            <DetailForm addListItem={modifyList} />
            <ItemList list={list} removeItem={removeItemHandler}/>
        </div>
    );

}

export default App;