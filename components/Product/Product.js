import Link from "next/link";
import styles from "./Product.module.scss";

export default function Product(props) {
  const { product } = props;
  return (
    <Link href="#">
      <a>
        <div
          className={styles.product}
          style={{ backgroundImage: `url(${product.images[0].src})` }}
        ></div>
      </a>
    </Link>
  );
}
