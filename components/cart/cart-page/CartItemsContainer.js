import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";
import styles from "./CartItemsContainer.module.scss";
import CartItem from "./CartItem";
import { removeItemFromCart } from "../../../functions";

const CartItemsContainer = () => {
  const [cart, setCart] = useContext(AppContext);
  console.log(cart);
  const handleRemoveProductClick = (event, productId) => {
    const updatedCart = removeItemFromCart(productId);

    setCart(updatedCart);
  };

  return (
    <>
      {cart === null ? (
        <div>No Items in cart</div>
      ) : (
        <div className={styles.cartContainer}>
          {cart.products.length &&
            cart.products.map((item) => (
              <CartItem
                key={item.productId}
                item={item}
                setCart={setCart}
                handleRemoveProductClick={handleRemoveProductClick}
              />
            ))}
          <div className={styles.cartContainer__cartTotal__container}>
            <h2>Total</h2>
            <div>{cart.totalProductsPrice}</div>
          </div>
        </div>
      )}

      <Link href="/checkout">
        <a>Proceed To Checkout</a>
      </Link>
    </>
  );
};

export default CartItemsContainer;
