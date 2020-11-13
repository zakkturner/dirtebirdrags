import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Link from "next/link";
import styles from "./CartItemsContainer.module.scss";
import CartItem from "./CartItem";
import { removeItemFromCart } from "../../../functions";

const CartItemsContainer = () => {
  const [cart, setCart] = useContext(AppContext);
  // console.log(cart);
  const handleRemoveProductClick = (event, productId) => {
    const updatedCart = removeItemFromCart(productId);

    setCart(updatedCart);
  };

  return (
    <>
      {cart === null ? (
        <div className={styles.cartContainer}>No Items in cart</div>
      ) : (
        <div className={styles.cartContainer}>
          <h2>Your Cart</h2>
          {cart.products.length &&
            cart.products.map((item) => (
              <CartItem
                key={item.productId}
                item={item}
                setCart={setCart}
                handleRemoveProductClick={handleRemoveProductClick}
              />
            ))}
          <div className={styles.cartContainer__cartTotal}>
            <h5 className={styles.cartContainer__cartTotal_total}>Total</h5>
            <div className={styles.cartContainer__cartTotal_price}>
              {cart.totalProductsPrice}
            </div>
          </div>

          <div className={styles.cartContainer__cartBtns}>
            <Link href="/checkout">
              <a className={styles.cartContainer__cartBtns_ckBtn}>
                Proceed To Checkout
              </a>
            </Link>
            <Link href="/shop">
              <a className={styles.cartContainer__cartBtns_btn}>
                Continue Shopping
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItemsContainer;
