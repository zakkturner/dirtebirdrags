import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Link from "next/link";
import styles from "./CartIcon.module.scss";

const CartIcon = () => {
  const [cart] = useContext(AppContext);
  const productsCount =
    null !== cart && Object.keys(cart).length ? cart.totalProductsCount : "";
  const totalPrice =
    null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : "";
  return (
    <React.Fragment>
      <Link href="/cart">
        <a>
          <div className={styles.cart}>
            {totalPrice ? (
              <span className={styles.cart__price}>{totalPrice}</span>
            ) : (
              ""
            )}
            <span className={styles.cart__iconContainer}>
              <i className="fa fa-shopping-cart"></i>
              {productsCount ? (
                <div className={styles.cart__iconContainer_count}>
                  {productsCount}
                </div>
              ) : (
                ""
              )}
            </span>
          </div>
        </a>
      </Link>
    </React.Fragment>
  );
};

export default CartIcon;
