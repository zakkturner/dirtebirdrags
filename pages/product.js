import Layout from "../components/Layout";
import { withRouter } from "next/router";
import client from "../components/ApolloClient";
import gql from "graphql-tag";

import styles from "../styles/Product.module.scss";
import AddToCartButton from "../components/cart/AddToCartButton";

const Product = withRouter((props) => {
  const { product } = props;
  console.log(
    product.variations.nodes.map((el) => {
      return el.attributes.nodes[0].value;
    })
  );
  console.log(product.variations.nodes[0].attributes.nodes[0].value);
  return (
    <Layout>
      {product ? (
        <div className={styles.product}>
          <h1>{product.name}</h1>
          <img src={product.image.sourceUrl}></img>
          <select>
            {product.variations.nodes.map((item) => {
              return <option>{item.attributes.nodes[0].value}</option>;
            })}
          </select>
          <AddToCartButton product={product} />
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
});

Product.getInitialProps = async function (context) {
  console.warn(context);

  let {
    query: { slug },
  } = context;
  const id = slug ? parseInt(slug.split("-").pop()) : context.query.id;

  const PRODUCT_QUERY = gql`
    query Product($id: ID!) {
      product(id: $id, idType: DATABASE_ID) {
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
        ... on SimpleProduct {
          price
          id
        }
        ... on VariableProduct {
          price
          id
          name
          variations {
            nodes {
              attributes {
                nodes {
                  id
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await client.query({
    query: PRODUCT_QUERY,
    variables: { id },
  });

  return {
    product: res.data.product,
  };
};

export default Product;
