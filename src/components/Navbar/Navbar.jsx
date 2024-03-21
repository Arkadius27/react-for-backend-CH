import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="/images/logo.PNG" alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link" href="/products">
                Catalog
              </a>
              <a id="formButton" class="nav-link" href="/products/form">
                Create
              </a>
              <a id="ordersButton" class="nav-link" href="/orders">
                Your Orders
              </a>
              <div class="nav link registration-container">
                <a id="loginButton" class="nav-link" href="/users/auth/login">
                  Login
                </a>
                <a
                  id="registerButton"
                  class="nav-link"
                  href="/users/auth/register"
                >
                  Register
                </a>
                <a id="signout" class="nav-link" href="/">
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar