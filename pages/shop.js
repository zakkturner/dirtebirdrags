import { useEffect, useRef } from "react";

import styles from "../styles/Shop.module.scss";

import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";

import gsap, { Power4 } from "gsap";
import Layout from "../components/Layout";
const Shop = () => {
  let container = useRef(null);

  useEffect(() => {
    gsap.from(container, {
      duration: 1,
      opacity: 0,
      ease: Power4.easeInOut,
    });
  });
  return (
    <>
      <section className={styles.shop}>
        <div
          className={styles.shop__container}
          ref={(el) => {
            container = el;
          }}
        >
          <Layout>
            <ProductList />
          </Layout>
        </div>
      </section>
    </>
  );
};

export default Shop;
