import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__grid}>
          <div className={styles.header__grid__logoCont}>
            <Link href="/">
              <a className={styles.header__grid__logoCont_logo}>
                <img src="./img/logo.jpg" />
              </a>
            </Link>
          </div>
          <ul className={styles.header__grid__links}>
            <li className={styles.header__grid__links__item}>
              <Link href="/shop">
                <a className={styles.header__grid__links__item_link}>Shop</a>
              </Link>
            </li>
            <li className={styles.header__grid__links__item}>
              <Link href="/lookbook">
                <a className={styles.header__grid__links__item_link}>
                  Lookbook
                </a>
              </Link>
            </li>
            <li className={styles.header__grid__links__item}>
              <Link href="/about">
                <a className={styles.header__grid__links__item_link}>About</a>
              </Link>
            </li>
            <li className={styles.header__grid__links__cart}>
              <Link href="/cart">
                <a className={styles.header__grid__links__cart__link}>
                  Cart
                  <span className={styles.header__grid__links__cart__link_num}>
                    0
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
