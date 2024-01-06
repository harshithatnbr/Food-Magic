import logo from "../../images/logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";

// start of header section
const Header= ()=>
{
  const [btnName,setbtnName]= useState("Login");
    return (
      <div className="header">
        <div className='logo'> 
        <img className="logo-img" src={logo} alt="app-logo"/>
        <label className="food-logo"> Food Magic</label>
        </div>
      <div className="nav-bar">
             <ul className="menu-items">
               <li><Link to="/" className="nav-link">Home</Link></li>
                 <li><Link to="/about" className="nav-link">About</Link></li>
                 <li><Link to="/contact" className="nav-link">Contact us</Link>  </li>
                 <li> <a href="#cart" className="nav-link"> Cart </a>  </li>
                 <button className="filter-btn" role="button" onClick={()=>
                  {btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
             </ul> 
       </div>
       </div>
    );
}
// end of header section
export default Header;