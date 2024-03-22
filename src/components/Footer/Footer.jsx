import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted my-5">
        <section className="d-flex p-4 border-bottom"></section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>TCG Master
                </h6>
                <p>
                  Dive into a world of endless possibilities with our vast
                  collection of cards and accesories.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Cards
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Mats
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sleeves
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Almiron 5621
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +598 92 366 203
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="#">
            TCGMaster.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
