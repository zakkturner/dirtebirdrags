import { useEffect, useRef } from "react";
import styles from "../styles/Shop.module.scss";
import ProductList from "../components/ProductList/ProductList";
import client from "../components/ApolloClient";
import gsap, { Power4 } from "gsap";
import Layout from "../components/Layout";

import Product from "../components/Product/Product";

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
          sourceUrl
          srcSet
        }
        name
        price
      }
    }
  }
`;
const Shop = (props) => {
  console.warn(props);

  let container = useRef(null);
  console.warn(props);
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
                      <Product product={product} key={product.id} />
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
