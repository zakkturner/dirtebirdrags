import { useEffect, useRef } from "react";
import styles from "../styles/Shop.module.scss";
import ProductList from "../components/ProductList/ProductList";
import clientConfig from "../client-config";

import gsap, { Power4 } from "gsap";
import Layout from "../components/Layout";

import fetch from "isomorphic-unfetch";

const Shop = (props) => {
  let container = useRef(null);
  console.warn(props);
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

Shop.getInitialProps = async () => {
  const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
  const productsData = await res.json();

  return {
    products: productsData,
  };
};

export default Shop;
