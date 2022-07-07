const { addListener } = require("../app");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

class ProductController {
  createProduct = catchAsyncErrors(async (req, res, next) => {

  try{req.body.user=req.user.id;
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product,
    });
  }
  catch (err) {
    res.status(500).json({error: err})
  }
});
// Get All Product
getAllProducts = catchAsyncErrors(async (req, res, next) => {

try{const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFeature.query;

  let filteredProductsCount = products.length;

  apiFeature.pagination(resultPerPage);

  products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
}
catch (err) {
  res.status(500).json({error: err})
}
});


//GET ALL PRODUCTS--admin

getAllProducts =catchAsyncErrors(async(req,res,next) => {

try{ const  products = await Product.find();
    res.status(200).json ({
        sucess:true,
        products,
    })
  }
  catch (err) {
    res.status(500).json({error: err})
  }
});

// Get All Product (Admin)
getAdminProducts = catchAsyncErrors(async (req, res, next) => {

try{const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
}
catch (err) {
  res.status(500).json({error: err})
}
});
//get product details

getProductDetails = catchAsyncErrors(async (req, res, next) => {

try{ const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

    res.status(200).json({
        success: true,
        product,
    });
  }
  catch (err) {
    res.status(500).json({error: err})
  }
});

//update product --admin

updateProduct = catchAsyncErrors(async(req,res,next)=>{

  try{let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }

     product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    
      res.status(200).json({
        success: true,
        product,
    });
  }
  catch (err) {
    res.status(500).json({error: err})
  }
});

//delete product

deleteProduct = catchAsyncErrors(async(req,res,next) =>{
  try{const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found",404));
    }
    
    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Delete Successfully",
    });
  }
  catch (err) {
    res.status(500).json({error: err})
  }
});

// Create New Review or Update the review
createProductReview = catchAsyncErrors(async (req, res, next) => {

  try{const { rating, comment, productId } = req.body;
  
    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };
  
    const product = await Product.findById(productId);
  
    const isReviewed = product.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString()
    );
  
    if (isReviewed) {
      product.reviews.forEach((rev) => {
        if (rev.user.toString() === req.user._id.toString())
          (rev.rating = rating), (rev.comment = comment);
      });
    } else {
      product.reviews.push(review);
      product.numOfReviews = product.reviews.length;
    }
  
    let avg = 0;
  
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    product.ratings = avg / product.reviews.length;
  
    await product.save({ validateBeforeSave: false });
  
    res.status(200).json({
      success: true,
    }); 
 }
 catch (err) {
  res.status(500).json({error: err})
}

 });

  // Get All Reviews of a product
getProductReviews = catchAsyncErrors(async (req, res, next) => {
  try{const product = await Product.findById(req.query.id);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  }
  catch (err) {
    res.status(500).json({error: err})
  }
  });

  // Delete Review
deleteReview = catchAsyncErrors(async (req, res, next) => {
try{
  const product = await Product.findById(req.query.productId);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );
  
    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    let ratings = 0;
  
    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
  
    const numOfReviews = reviews.length;
  
    await Product.findByIdAndUpdate(
      req.query.productId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  
    res.status(200).json({
      success: true,
    });
  }
  catch (err) {
    res.status(500).json({error: err})
  }
});
}

module.exports = ProductController;

