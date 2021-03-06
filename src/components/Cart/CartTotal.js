import React from "react";
import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";
const CartTotal = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  console.log(value);
  return (
    <React.Fragment>
      <div className="contianer">
        <div className="row">
          <div className="col-12 mt-2 ml-sm-5 ml-mg-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                clear cart
              </button>
            </Link>
            <h5>
              <span className="span text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="span text-title">Tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="span text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton ></PayPalButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotal;
