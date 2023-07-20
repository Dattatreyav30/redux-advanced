import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartMethodActions } from "../../store/redux-store";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const items = useSelector((state) => state.cartMethod.items);
  const dispatch = useDispatch();
  const obj = {
    title: title,
    price: price,
    description: description,
  };

  const addToCartHandler = (title) => {
    const findItem = items.find((product) => {
      return title === product.title;
    });
    if (findItem) {
      dispatch(cartMethodActions.increaseQty());
    } else {
      dispatch(cartMethodActions.addItem(obj));
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler(title)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
