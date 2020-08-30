import { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";

import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  let container = useRef(null);

  useEffect(() => {
    gsap.from(container, {
      duration: 1,
      opacity: 0,
      ease: Power4.easeInOut,
      delay: 1,
    });
  });

  return (
    <>
      <Head>
        <title>DirtE Birds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video loop muted autoPlay poster="true" className={styles.video}>
        <source src="/img/bird4.mp4" type="video/mp4" />
      </video>

      <main className={styles.home}>
        <div
          className={styles.home__container}
          ref={(el) => {
            container = el;
          }}
        >
          <div className={styles.home__container__logoCont}>
            <h1 className={styles.home__container__logoCont_logo}>
              DirtE Bird Rags
            </h1>
          </div>
          <nav className={styles.home__container__navCont}>
            <ul className={styles.home__container__navCont__nav}>
              <li className={styles.home__container__navCont__nav_item}>
                <Link href="/shop">
                  <a>Shop</a>
                </Link>
              </li>
              <li className={styles.home__container__navCont__nav_item}>
                <Link href="/shop">
                  <a>Lookbook</a>
                </Link>
              </li>

              <li className={styles.home__container__navCont__nav_item}>
                <Link href="/shop">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.home__container__copyright}>
            <span className={styles.home__container__copyright_txt}>
              © 2020, DirtE Bird Rags
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
