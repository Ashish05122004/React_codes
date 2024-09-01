import "./Item.css"
const Item = (props)=>{
    const itemName = props.name;
    return (
        <div>
            <p>{itemName}</p>
            {props.children}
        </div>
    );
}
export default Item;