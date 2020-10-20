import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";
import styles from "./CartItemsContainer.module.scss";
import CartItem from "./CartItem";

const CartItemsContainer = () => {
  const [cart, setCart] = useContext(AppContext);
  console.log(cart);
  return (
    <div className={styles.cartContainer}>
      {cart.products.length &&
        cart.products.map((item) => (
          <CartItem key={item.productId} item={item} setCart={setCart} />
        ))}
    </div>
  );
};

export default CartItemsContainer;
