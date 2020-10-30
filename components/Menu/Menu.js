import { useEffect, useRef, useContext } from "react";

import Link from "next/link";
import styles from "./Menu.module.scss";
import gsap from "gsap";
import MenuLink from "../menu-link/MenuLink";

export default function Menu({ isActive }) {
  let menu = useRef(null);
  let overlay = useRef(null);
  let wrap = useRef(null);

  let menuLinks = [
    {
      name: "shop",
      path: "shop",
      cartLink: false,
    },
    {
      name: "checkout",
      path: "checkout",
      cartLink: false,
    },
    {
      name: "lookbook",
      path: "lookbook",
      cartLink: false,
    },
    {
      name: "about",
      path: "about",
      cartLink: false,
    },
    {
      name: "cart",
      path: "cart",
      cartLink: true,
    },
  ];

  useEffect(() => {
    isActive === true
      ? gsap.to(menu, { duration: 0.5, css: { display: "block" } })
      : gsap.to(menu, { duration: 0.5, css: { display: "none" }, delay: 0.3 });

    isActive === true
      ? gsap.to(overlay, { duration: 0.5, css: { opacity: ".5" } })
      : gsap.to(overlay, { duration: 0.5, css: { opacity: "0" }, delay: 0.5 });

    isActive === true
      ? gsap.to(wrap, { duration: 0.5, css: { right: "0" }, delay: 0.3 })
      : gsap.to(wrap, { duration: 0.5, css: { right: "-100%" }, opacity: 0 });
  });

  return (
    <div
      className={styles.menu}
      ref={(el) => {
        menu = el;
      }}
    >
      <div className={styles.menu__container}>
        <div
          className={styles.menu__container__overlay}
          ref={(el) => {
            overlay = el;
          }}
        ></div>
        <div
          className={styles.menu__container__wrap}
          ref={(el) => {
            wrap = el;
          }}
        >
          <ul className={styles.menu__container__wrap__links}>
            {menuLinks.map((link) => {
              return (
                <MenuLink
                  name={link.name}
                  path={link.path}
                  cartLink={link.cartLink}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
