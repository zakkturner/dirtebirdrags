import { useRef, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./MenuLink.module.scss";
import gsap from "gsap";
import Link from "next/link";
export default function MenuLink({ name, path, cartLink }) {
  const [cart] = useContext(AppContext);
  const productsCount =
    null !== cart && Object.keys(cart).length ? cart.totalProductsCount : "";
  let link = useRef(null);

  const mouseEnter = () => {
    gsap.to(link, { duration: 0.4, css: { background: "#01cfff" } });
  };

  const mouseLeave = () => {
    gsap.to(link, { duration: 0.4, css: { background: "#000" } });
  };

  return (
    <>
      {cartLink === false ? (
        <Link href={`/${path}`}>
          <a>
            <li
              ref={(el) => {
                link = el;
              }}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className={styles.link}
            >
              {name}
            </li>
          </a>
        </Link>
      ) : (
        <Link href={`/${path}`}>
          <a>
            <li
              ref={(el) => {
                link = el;
              }}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className={styles.link}
            >
              {name} <span className={styles.link_pill}>{productsCount}</span>
            </li>
          </a>
        </Link>
      )}
    </>
  );
}
