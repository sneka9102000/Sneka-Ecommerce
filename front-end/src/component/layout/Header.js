import React from "react";
import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar";
import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import img from '../../images/logo.png'


const Header = () => {
  const options={
    logo:img,
          burgerColor:"green",
          burgerColorHover:"#00ff00",
          logoWidth:"100%",
          link1Size:"1.5vmax",
          link1Color:"white",
          link1Padding:"1vmax",
          link1ColorHover:"#00ff00",
          nav2justifyContent:"flex-end",
          link1Margin:"1vmax",
          link2Margin:"0",
          link3Margin:"0",
          link4Margin:"1vmax",
          nav3justifyContent:"flex-start",
          link1Text:"Home",
          link1Family:"Franklin Gothic Medium",
          link2Text:"Products",
          link3Text:"About Us",
          link4Text:"Contact Us",
          nav4justifyContent:"flex-start",
          searchIconMargin:"0.5vmax",
          cartIconMargin:"1vmax",
          profileIconMargin:"0.5vmax",
          searchIconColorHover:"#00ff00",
          cartIconColorHover:"#00ff00",
          profileIconColorHover:"#00ff00"
        }
    return (

        <ReactNavbar {...options}
          
        />
 
    );
  };
  
  export default Header;