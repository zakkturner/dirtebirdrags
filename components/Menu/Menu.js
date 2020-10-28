import { useEffect, useRef } from "react";
import styles from "./Menu.module.scss";
import gsap from "gsap";

export default function Menu({ isActive }) {
  let menu = useRef(null);
  let overlay = useRef(null);
  let wrap = useRef(null);

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
          hi
        </div>
      </div>
    </div>
  );
}
