import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/assets/images/home/img1.jpg"
              class="d-block w-100"
              alt="dress"
              height="600px"
            />
            <div class="carousel-caption  d-none d-md-block ustify-content-center">
              <h5 class="text-dark">
                <span class="sr-only">Dark: </span>
                Welcome to Area Boutique
              </h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/home/img2.jpg"
              class="d-block w-100"
              alt="dress"
              height="600px"
            />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/home/img3.jpg"
              class="d-block w-100"
              alt="dress"
              height="600px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-dark">
                <span class="sr-only">Dark: </span>
                We will be with you soon with our new branches
              </h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </div>
  );
};
export default Home;
