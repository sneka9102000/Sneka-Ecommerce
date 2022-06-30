import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar";
// import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import Header from "./component/layout/Header/Header.js";
import WebFont from "webfontloader"
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";


function App(){
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      }
    })
    }, [])  

    return (
      <Router>

      <Header/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route extact path="/product/:id" element={<ProductDetails/>} /> 
         <Route extact path="/products" element={<Products/>} />
         <Route extact path="/products/:keyword" element={<Products match/>} />
         <Route extact path="/search" element={<Search/>} />
      </Routes>
      <Footer/>
    </Router>
      // </BrowserRouter>

  );
}
export default App;
  
