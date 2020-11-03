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
          <img
            width="100"
            src={item.image.sourceUrl}
            srcSet={item.image.srcSet}
          />
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
        <div className={styles.item__nameContainer}>
          <h4 className={styles.item__nameContainer_name}>{item.name}</h4>
        </div>
        <div className={styles.item__priceContainer}>
          <p className={styles.item__priceContainer_name}>
            Price: ${item.price.toFixed()}
          </p>
        </div>
        <div className={styles.item__variationContainer}>
          <p>{item.variationName}</p>
        </div>
        <div className={styles.item__qtyContainer}></div>
        <p className={styles.item__qtyContainer_qty}>
          <input
            type="number"
            className={styles.item__qtyContainer__qty_input}
            min="1"
            value={productCount}
            onChange={handleQtyChange}
          />
        </p>
      </div>
      <div className={styles.item__totalContainer}>
        <p className={styles.item__totalContainer_total}>{item.totalPrice}</p>
      </div>
    </div>
  );
}
