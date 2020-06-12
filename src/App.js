import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal";

function App() {
  return (
    //REACT.FRAGMENT simulates html elemets
    <React.Fragment>
      <Navbar />
      <Switch>
        {/* if you didnt use exact, the router will despaoly the first thing that matches 
        the route like / before checking if the route is right all the way which means 
        it will alwasy desplay the home page */}
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/productList" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <Route component={Default}></Route>
        {/* for default page you dont need to give it its path because we want to give error for anything 
        that doenst match our path */}
      </Switch>
      {/* since we dont need to route modal, we will keep it outside switch */}
      <Modal />
    </React.Fragment>
  );
}

export default App;
