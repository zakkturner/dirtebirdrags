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

  return (
    <div className={styles.itemGrid}>
      <div className={styles.itemGrid__close}>
        <i
          className="fa fa-times-circle"
          onClick={(event) => handleRemoveProductClick(event, item.productId)}
        />
      </div>
      <div className={styles.itemGrid__img}>
        <img width="50" src={item.image.sourceUrl} srcSet={item.image.srcSet} />
      </div>
      <div className={styles.item__nameContainer}>
        <h4 className={styles.item__nameContainer_name}>{item.name}</h4>
      </div>
      <div className={styles.item__priceContainer}>
        <p className={styles.item__priceContainer_name}>
          ${item.price.toFixed()}
        </p>
      </div>
      <div className={styles.item__qtyContainer}>
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
