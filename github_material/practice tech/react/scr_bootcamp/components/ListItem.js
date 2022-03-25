
function ListItem(props){


    return (
        <div>
            <div className="item-name">{props.name}</div>
            <div className="item-age">{props.age}</div>
        </div>
    );

}

export default ListItem;