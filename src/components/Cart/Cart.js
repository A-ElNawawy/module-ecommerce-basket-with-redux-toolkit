import { useSelector } from "react-redux";

import Card from "../UI/Card";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartItemsList = cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.title,
        quantity: item.qty,
        total: item.totPrice,
        price: item.price,
      }}
    />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul> {cartItemsList} </ul>
    </Card>
  );
};

export default Cart;
