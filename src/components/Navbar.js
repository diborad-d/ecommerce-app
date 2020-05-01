import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar=example-sm navbar-dark px-sm-5">
        <Link to="/">
          <i class="fas fa-store-alt fa-3x"></i>
          {/* <img src="/images/logo.svg" alt="Logo" className="navbar-brand" /> */}
        </Link>
      </nav>
    );
  }
}
