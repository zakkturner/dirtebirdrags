import styles from "./AddToCartButton.module.scss";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { addFirstProduct, updateCart } from "../../functions";
import Link from "next/link";

const AddToCartButton = (props) => {
  const { product } = props;
  const [cart, setCart] = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);

  /**
   * Handles adding items to the cart.
   *
   * @return {void}
   */
  const handleAddToCart = () => {
    // If component is rendered client side.
    if (process.browser) {
      let existingCart = localStorage.getItem("dbr-cart");

      // If cart has item(s) already, update existing or add new item.
      if (existingCart) {
        existingCart = JSON.parse(existingCart);

        const qtyToBeAdded = 1;

        const updatedCart = updateCart(existingCart, product, qtyToBeAdded);

        setCart(updatedCart);
      } else {
        /**
         * If No Items in the cart, create an empty array and add one.
         * @type {Array}
         */
        const newCart = addFirstProduct(product);
        setCart(newCart);
      }

      // Show View Cart Button
      setShowViewCart(true);
    }
  };

  return (
    <>
      <button className={styles.button} onClick={handleAddToCart}>
        Add To Cart
      </button>
    </>
  );
};

export default AddToCartButton;
