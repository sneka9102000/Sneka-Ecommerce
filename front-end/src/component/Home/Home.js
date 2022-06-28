import React, { Fragment} from "react";
import "./Home.css";
import Product from "./Product.js"
import MetaData from "../layout/MetaData";

const product = {
    name:"watch",
    images:[{url:"https://www.gstatic.com/webp/gallery/1.sm.webp"}],
    price:"3500",
    _id:"Sneka",

}

const Home = () => {
  return (
  <Fragment>
    <MetaData title="WATCH WIZARD" />
    <div className="banner">
        <p>Welcome to Watch Wizard</p>
        <h1>FIND AMAZING BRANDS BELOW</h1>
            <a href="#container">
              <button>
                Scroll 
              </button>
            </a>
        </div>
        <h2 className="homeHeading">OUR EXCLUSIVE BRANDS</h2>
        <div className="container" id="container">
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        </div>


        
    </Fragment>
    );
};

export default Home;
