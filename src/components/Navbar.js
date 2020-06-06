import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar=example-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <i class="fas fa-store-alt fa-2x"></i>
        </Link>
        <ul className="navbar-nav align-items-center">
          {/* note: center nav items */}
          <li className="nav-item "></li>
          <Link to="/" className="nav-link ml-5">
            products
          </Link>
        </ul>
        <Link to="/cart" className="ml-auto">
          {/* note: use MUI or styles components for a more presentable cart button */}
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border:0.1rem solid;
`;
