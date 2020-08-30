import Link from "next/link";
import styles from "./ProductList.module.scss";

export default function ProductList() {
  return (
    <>
      <main className={styles.products}>
        <div className={styles.products__grid}>
          <Link href="#">
            <a>
              <div className={styles.products__grid__product}></div>
            </a>
          </Link>
          <Link href="#">
            <a>
              <div className={styles.products__grid__product}></div>
            </a>
          </Link>
          <Link href="#">
            <a>
              <div className={styles.products__grid__product}></div>
            </a>
          </Link>
          <Link href="#">
            <a>
              <div className={styles.products__grid__product}></div>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
