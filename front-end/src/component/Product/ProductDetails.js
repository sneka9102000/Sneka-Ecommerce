import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";



const ProductDetails = () => {
    const dispatch = useDispatch();
    const {id}=useParams();
    const{products,loading,error} = useSelector(state=>state.productDetails)
    useEffect(()=>{
        dispatch(getProductDetails(id));
    },[]);

    const options = {
      edit: false,
      color:"rgba(20,20,20,20,0.1)",
      activecolor:"tomato",
      size:window.innerWidth < 600 ? 20 : 25,
      value:2.5,
      isHalf:true,
    };

    if(products)
    {
      return (
        <Fragment>
            <div className="ProductDetails"> 
              <div>
              <img
                      className="CarouselImage"
                      src={products.images[0].url}
                      alt={`image`}
                    />
              </div>
              <div>
              <div className="detailsBlock-1">
                <h2>{products.name}</h2>
                <p>Product # {products._id}</p>
              </div>
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span >({products.numOfReviews} Reviews)</span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹${products.price}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1">
                    <button>-</button>
                    <input value = "1" type = "number" />
                    <button>+</button>
                  </div>{" "}
                  <button>
                    Add to Cart
                  </button>
                </div>

                <p>
                  Status:
                  <b className={products.Stock < 1 ? "redColor" : "greenColor"}>
                    {products.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>{products.description}</p>
              </div>

              <button>
                 Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          {products.reviews && products.reviews[0] ? (
            <div className="reviews">
              {products.reviews &&
                products.reviews.map((review) =>
                  <ReviewCard key={review} />
                )}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </Fragment>
    );
  }; 
};
export default ProductDetails;

