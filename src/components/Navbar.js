import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar=example-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <i class="fas fa-store-alt fa-2x"></i>
        </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item" ml-5></li>
        <Link to="/" className="nav-link"> Products</Link>
      </ul>
      </nav>
    );
  }
}
