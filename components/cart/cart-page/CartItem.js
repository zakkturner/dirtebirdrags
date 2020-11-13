import { useState } from "react";
import styles from "./CartItem.module.scss";
import { updateCart } from "../../../functions";

export default function CartItem({ item, setCart, handleRemoveProductClick }) {
  const [productCount, setProductCount] = useState(item.qty);
  const handleQtyChange = (event) => {
    if (process.browser) {
      const newQty = event.target.value;

      // Set the new qty in State
      setProductCount(newQty);

      let existingCart = localStorage.getItem("dbr-cart");
      existingCart = JSON.parse(existingCart);

      // Update the cart in localStorage.
      const updatedCart = updateCart(existingCart, item, false, newQty);

      // Update the cart in global context
      setCart(updatedCart);
    }
  };
  console.log(item);

  return (
    <div className={styles.itemGrid}>
      <div className={styles.itemGrid__imgCont}>
        <div className={styles.itemGrid__imgCont_img}>
          <img src={item.image.sourceUrl} srcSet={item.image.srcSet} />
        </div>
        <div className={styles.itemGrid__imgCont__close}>
          <i
            className="fa fa-times-circle"
            onClick={(event) => handleRemoveProductClick(event, item.productId)}
          />{" "}
          <span className={styles.itemGrid__imgCont__close_txt}>remove</span>
        </div>
      </div>
      <div className={styles.itemGrid__desc}>
        <div className={styles.itemGrid__desc__nameContainer}>
          <h4 className={styles.itemGrid__desc__nameContainer_name}>
            {item.name}
          </h4>
        </div>
        <div className={styles.item__priceContainer}>
          <p className={styles.item__priceContainer_name}>
            Price: ${item.price.toFixed()}
          </p>
        </div>
        <div className={styles.itemGrid__desc__variationContainer}>
          <p className={styles.itemGrid__desc__variationContainer_varTitle}>
            Color/Size
          </p>
          <p className={styles.itemGrid__desc__variationContainer_varName}>
            {item.variationName}
          </p>
        </div>
        <div className={styles.itemGrid__desc__qtyContainer}></div>
        <p className={styles.itemGrid__desc__qtyContainer__qty}>
          <input
            type="number"
            className={styles.itemGrid__desc__qtyContainer__qty_input}
            min="1"
            value={productCount}
            onChange={handleQtyChange}
          />
        </p>
        <div className={styles.itemGrid__desc__totalContainer}>
          <p className={styles.itemGrid__desc__totalContainer_total}>
            {item.totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}
