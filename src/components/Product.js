import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import styled from "styled-components";

export default class Product extends Component {
  render() {
    const { id, title, img, price, info, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={() => console.log("you clicked me img cont.")}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/* img footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-solid mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 5px 5px 7px 0px rgba(0, 0, 0, 0.5);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
    .img-container {
      position: relative;
      overflow: hidden;
    }
    .card-img-top{
      transition: all 0.5s linear;
    }
    .img-container:hover .card-img-top {
      transform: scale(1.2);
    }
  }
`;
