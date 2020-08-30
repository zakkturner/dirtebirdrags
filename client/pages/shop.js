import styles from "../styles/Shop.module.scss";

import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

const Shop = () => {
  return (
    <>
      <section className={styles.shop}>
        <div className={styles.shop__container}>
          <Header />
          <ProductList />
        </div>
      </section>
    </>
  );
};

export default Shop;
