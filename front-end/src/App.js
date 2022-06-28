import { BrowserRouter as Router } from "react-router-dom";
// import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar";
// import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import Header from "./component/layout/Header/Header.js";
import WebFont from "webfontloader"
import React from "react";
// import Footer from "./component/layout/Footer/Footer.js"


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
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
  
