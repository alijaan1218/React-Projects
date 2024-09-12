//import { pizzaData } from "./data.js";
import "./index.css";
function Pizza(props) {
  //we can also have alternate name to 'props' here but then we have to use that one in our component
  console.log(props);
  // if (props.item.soldOut) return null;
  return (
    <li className={`pizza ${props.item.soldOut ? "sold-out" : ""}`}>
      <img src={props.item.photoName} alt="img" />
      <div>
        <h3>{props.item.name}</h3>
        <p>{props.item.ingredients}</p>
        <span>{props.item.soldOut ? "SOLD OUT" : props.item.price + 2}</span>
      </div>
    </li>
  );
}
export default Pizza;
