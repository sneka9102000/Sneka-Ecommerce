import React from "react";
// import {ReactNavbar} from "overlay-navbar";
// import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import img from '../../../images/logo.webp';
// import { BiCart } from "react-icons/bi";
import { ReactNavbar} from "overlay-navbar"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const options = {
  burgerColorHover: "#eb4034",
  logo: img,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  // profileIconUrl: "/login",
  // profileIconColor: "rgba(35, 35, 35,0.8)",
  // searchIconColor: "rgba(35, 35, 35,0.8)",
  // cartIconColor: "rgba(35, 35, 35,0.8)",
  // profileIconColorHover: "#eb4034",
  // searchIconColorHover: "#eb4034",
  // cartIconColorHover: "#eb4034",
  // cartIconMargin: "1vmax"
};

const Header = () => {
  return (
  //  <div style={{display:"inline",position:"absolute",float:"right"}}>
  <div>
   <div  style={{display:"inline",position:"absolute",float:"right",margin:"0 0 0 80%",padding:"0 0 0 0",height:"100px"}}>
    <nav  style={{float:"right",display:"inline",margin:"30% 0 0 0"}}> 
  <nav style={{float:"right",display:"inline"}}>
  <a><SearchIcon style={{fontSize:"50px"}}/></a>
   <a><ShoppingCartIcon style={{fontSize:"50px"}}/></a>
   <a><AccountCircleIcon style={{fontSize:"50px"}}/></a>
   </nav>
{/*   
 <SearchIcon style={{display:"inline",fontSize:"50px"}}/> 
 <SearchIcon style={{display:"inline",position:"absolute",float:"right",fontSize:"50px"}}/>
<SearchIcon style={{display:"inline",position:"absolute",float:"right",fontSize:"50px"}}/> */}
 </nav> 

    <ReactNavbar {...options} />
    
    {/* </div> */}
    
  
   </div>
   </div>
  );
};

export default Header;

