import React from "react";
import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar";
import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import img from '../../images/logo.webp'


const Header = () => {
  const options={
          logo:img,
          burgerColor:"green",
          burgerColorHover:"#eb4034",
          logoHoverColor: "#eb4034",
          logoWidth:"20vmax",
          navColor1: "white",
          logoHoverSize: "10px",
          link1Text: "Home",
          link2Text: "Products",
          link3Text: "Contact",
          link4Text: "About",
          link1Url: "/",
          link2Url: "/products",
          link3Url: "/contact",
          link4Url: "/about",
          link1Size:"1.5vmax",
          link1Color:"rgba(35, 35, 35,0.8)",
          link1ColorHover:"#eb4034",
          nav1justifyContent: "flex-end",
          nav2justifyContent: "flex-end",
          nav3justifyContent: "flex-start",
          nav4justifyContent: "flex-start",
          link1Margin:"1vmax",
          profileIconUrl: "/login",
          profileIconColor: "rgba(35, 35, 35,0.8)",
          searchIconColor: "rgba(35, 35, 35,0.8)",
          cartIconColor: "rgba(35, 35, 35,0.8)",
          profileIconColorHover: "#eb4034",
          searchIconColorHover: "#eb4034",
          cartIconColorHover: "#eb4034",
          cartIconMargin: "1vmax",
          
        }
    return (

        <ReactNavbar {...options}
          
        />
 
    );
  };
  
  export default Header;