import React, { Component, Fragment } from "react";
import Product from "./Product";
import Title from "./Title";
// import { storeProducts, detailProducts } from "../data";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title  title="products" />
            <div className="row">
              {/* here we are not accessing the value as a prop, instead we are naming our value and instead returning data from productconsumer */}
              {/* we can name our param whatever we want, doesnt have to be value as long as we are returning the same thing, the key here is we didnt have to pass it in as a prop*/}

              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
