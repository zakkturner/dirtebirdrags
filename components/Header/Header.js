import Link from "next/link";
import styles from "./Header.module.scss";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [cart, setCart] = useContext(AppContext);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__grid}>
          <div className={styles.header__grid__logoCont}>
            <Link href="/">
              <a className={styles.header__grid__logoCont_logo}>
                <img src="/img/logot.png" />
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
              <CartIcon />
            </li>
          </ul>
          <div className={styles.header__grid__menuIcon}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
    </>
  );
}
