import { useSelector, useDispatch } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const totalQty = useSelector((state) => state.cart.totalQty);

  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(uiSliceActions.toggleCart());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
