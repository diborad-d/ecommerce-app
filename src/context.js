import React, { Component } from "react";

const ProductContext = React.createContext();
class ProductProvider extends Component {
  render() {
    return(
    <ProductContext.Provider value="hello from context">
      {/* using Context: since provider is gonna be sitting on top of our component tree,we need to return all the childern that are gonna be in the app*/}
      {/* right now we are gonna return the children that fall under this componet */}
      {this.props.children}
    </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
