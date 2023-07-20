import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartMethodActions } from "../../store/redux-store";

const CartItem = (props) => {
  const { title, total, price } = props.item;
  const quantity = useSelector((state) => state.cartMethod.quantity);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartMethod.items);

  const increaseQtyHandler = () => {
    dispatch(cartMethodActions.increaseQty());
  };
  const decreaseQtyHandler = (product) => {
    if (quantity === 1) {
      const filteredItems = items.filter((item) => {
        return item !== product;
      });
      return dispatch(cartMethodActions.removeItem(filteredItems));
    }
    dispatch(cartMethodActions.decreaseQty());
  };

  return (
    <>
      <li className={classes.item}>
        {items.map((item) => (
          <>
            <header>
              <h3>{item.title}</h3>
              <div className={classes.price}>
                ${total.toFixed(2)}
                <span className={classes.itemprice}>
                  (${item.price.toFixed(2)}/item)
                </span>
              </div>
            </header>
            <div className={classes.details}>
              <div className={classes.quantity}>
                x <span>{quantity}</span>
              </div>
              <div className={classes.actions}>
                <button
                  onClick={() => {
                    decreaseQtyHandler(item);
                  }}
                >
                  -
                </button>
                <button onClick={increaseQtyHandler}>+</button>
              </div>
            </div>
          </>
        ))}
      </li>
    </>
  );
};

export default CartItem;
