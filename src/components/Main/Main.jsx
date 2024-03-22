import React from "react";

const Main = () => {
  return (
    <>
      {products.map((each) => (
        <div class="card-container d-flex flex-wrap justify-content-center my-5">
          <div class="card" style="width: 18rem;">
            <img src={each.photo} class="card-img-top" alt="{{this.title}}" />
            <div class="card-body">
              <h5 class="card-text">{each.title}</h5>
              <p class="card-title fw-bolder">${each.price}</p>
              <p class="card-text fw-light">{each.stock} units in stock</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Main;
