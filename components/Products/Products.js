import Link from "next/link";
import styles from "./Products.module.scss";

export default function Products(props) {
  const { product } = props;
  return (
    <Link
      as={`/product/${product.slug}-${product.productId}`}
      href={`/product/?slug=${product.slug}-${product.productId}`}
    >
      <a>
        <div
          className={styles.products}
          style={{ backgroundImage: `url(${product.image.sourceUrl})` }}
        ></div>
      </a>
    </Link>
  );
}
