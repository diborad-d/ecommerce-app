import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar=example-sm navbar-dark px-sm-5">
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
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
