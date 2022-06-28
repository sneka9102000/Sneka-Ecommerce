import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar";
// import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import Header from "./component/layout/Header/Header.js";
import WebFont from "webfontloader"
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home";
import Product from "./component/Home/Product.js";

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
      {/* <Routes>
        <Route exact path="/" component={Home} />
        </Routes> */}
        <Home />
        {/* <Product /> */}
      <Footer/>
    </Router>
  );
}
export default App;
  
