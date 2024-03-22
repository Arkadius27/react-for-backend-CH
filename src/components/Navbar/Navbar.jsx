import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.PNG" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/products">
                Catalog
              </a>
              <a id="formButton" className="nav-link" href="/products/form">
                Create
              </a>
              <a id="ordersButton" className="nav-link" href="/orders">
                Your Orders
              </a>
              <div className="nav link registration-container">
                <a id="loginButton" className="nav-link" href="/users/auth/login">
                  Login
                </a>
                <a
                  id="registerButton"
                  className="nav-link"
                  href="/users/auth/register"
                >
                  Register
                </a>
                <a id="signout" className="nav-link" href="/">
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
