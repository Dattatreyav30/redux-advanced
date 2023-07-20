import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Cart = (props) => {
  const visibleCart = useSelector((state) => state.cart.isCartVisible);
  return (
    <Fragment>
      {visibleCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
            />
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
