import { useEffect, useRef } from "react";
import styles from "../styles/Shop.module.scss";

import client from "../components/ApolloClient";
import gsap, { Power4 } from "gsap";
import Layout from "../components/Layout";

import Products from "../components/Products/Products";

import gql from "graphql-tag";

const PRODUCTS_QUERY = gql`
  query {
    products(first: 20) {
      nodes {
        id
        productId
        averageRating
        slug
        description
        image {
          uri
          title
          srcSet
          sourceUrl
        }
        name
      }
    }
  }
`;
const Shop = (props) => {
  let container = useRef(null);

  const { products } = props;

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
            <main className={styles.shop__container__products}>
              <div className={styles.shop__container__products__grid}>
                {products.length
                  ? products.map((product) => (
                      <Products product={product} key={product.id} />
                    ))
                  : ""}
              </div>
            </main>
          </Layout>
        </div>
      </section>
    </>
  );
};

Shop.getInitialProps = async () => {
  const result = await client.query({ query: PRODUCTS_QUERY });
  return {
    products: result.data.products.nodes,
  };
};

export default Shop;
