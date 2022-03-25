
import ListItem from "./ListItem";
import './ItemList.scss';



function ItemList({list, removeItem}){

    return (
        <div className="list-box">
            <ul className="list">
                {list.map(item => (
                <li key={item.id} >
                    <ListItem name={item.name} age={item.age} />
                    <button onClick={() => {removeItem(item.id)}}>remove</button>
                </li>
                ) )}
            </ul>
        </div>
    );

}

export default ItemList;