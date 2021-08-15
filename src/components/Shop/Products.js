import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

import products from "./../../dummy_data.json";

const Products = (props) => {
  const productsList = products.items.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsList}</ul>
    </section>
  );
};

export default Products;
