import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./component/layout/Header/Header.js";
import WebFont from "webfontloader"
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./store";
// import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Routes/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";



function App(){
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    // store.dispatch(loadUser());
    }, [])  

    return (
      <Router>
      <Header/>

      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
         <Route path="/" element={<Home/>} />
         <Route extact path="/product/:id" element={<ProductDetails/>} /> 
         <Route extact path="/products" element={<Products/>} />
         <Route extact path="/products/:keyword" element={<Products match/>} />
         <Route extact path="/search" element={<Search/>} />

         <Route exact path="/account" element={<Profile/>} />
         <Route exact path="/me/update" element={<UpdateProfile/>} />
         <Route exact path="/password/update" element={<UpdatePassword/>} />

         {/* <Route exact path='/account' element={<ProtectedRoute/>}>
            <Route exact path='/account' element={<Profile />}/>
          </Route> */}
          {/* <Route exact path='/account'  >
            <Profile />
          </Route> */}

          
         <Route extact path="/cart" element={<Cart/>} />
 
         <Route extact path="/login" element={<LoginSignUp/>} />
         <Route extact path="/shipping" element={<Shipping/>} />
         <Route extact path="/order/confirm" element={<ConfirmOrder/>} />
         <Route extact path="/orders" element={<MyOrders/>} />
         <Route extact path="/order/:id" element={<OrderDetails/>} />
         <Route extact path="/success" element={<OrderSuccess/>} />


      </Routes>
      <Footer/>
    </Router>

  );
}
export default App;
  
