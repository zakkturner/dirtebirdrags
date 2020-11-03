import { useState } from "react";
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import client from "../components/ApolloClient";
import gql from "graphql-tag";

import styles from "../styles/Product.module.scss";
import AddToCartButton from "../components/cart/AddToCartButton";

const Product = withRouter((props) => {
  const [sizeState, setSize] = useState({ size: null });
  const { product } = props;
  // console.log(
  //   product.variations.nodes.map((el) => {
  //     return el.attributes.nodes[0].value;
  //   })
  // );
  // console.log(product.variations.nodes[0].attributes.nodes[0].value);

  const handleChange = (e) => {
    setSize({
      size: e.target.value,
    });
  };

  let variableProd = product.variations.nodes.filter((el) => {
    return el.attributes.nodes[0].value === sizeState.size ? el : "";
  });

  let variationId;
  if (variableProd.length === 0) {
    variationId = null;
  } else {
    variationId = variableProd[0].variationId;
    // console.log("yea");
  }

  // console.log(variationId);

  return (
    <Layout>
      {product ? (
        <div className={styles.product}>
          <h1>{product.name}</h1>
          <img src={product.image.sourceUrl}></img>
          {product.variations ? (
            <select onChange={handleChange}>
              {product.variations.nodes.map((item) => {
                let variable = item.attributes.nodes[0].value;
                return <option value={variable}>{variable}</option>;
              })}
            </select>
          ) : (
            ""
          )}
          <AddToCartButton
            product={product}
            variationId={variationId}
            size={sizeState}
          />
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
              id
              variationId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice

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
