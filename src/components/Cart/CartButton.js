import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/redux-store";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(cartActions.toggleVisibility());
  };
  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
