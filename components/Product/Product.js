import Link from "next/link";
import styles from "./Product.module.scss";

export default function Product(props) {
  const { product } = props;
  return (
    <Link href={`/product/?slug=${product.slug}-${product.productId}`}>
      <a>
        <div
          className={styles.product}
          style={{ backgroundImage: `url(${product.image.sourceUrl})` }}
        ></div>
      </a>
    </Link>
  );
}
