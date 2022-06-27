import { BrowserRouter as Router } from "react-router-dom";
import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar";
import "overlay-navbar/dist/lib/ReactNavbar.min.css";
import Header from "./component/layout/Header";

export default function App() {
    return (
    <Router>
      <Header/>
    </Router>
  );
}
