import styles from "./CartItem.module.scss";

export default function CartItem({ item, setCart }) {
  return (
    <div className={styles.itemGrid}>
      <div className={styles.itemGrid__close}>
        <i className="fa fa-times-circle" />
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
          <input type="number" />
        </p>
      </div>
    </div>
  );
}
