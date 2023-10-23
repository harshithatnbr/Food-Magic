import logo from "../../images/logo.png"



// start of header section
const Header= ()=>
{
    return (
      <div className="header">
        <div className='logo'> 
        <img className="logo-img" src={logo} alt="app-logo"/>
        <label className="food-logo"> Food Magic</label>
        </div>
      <div className="nav-bar">
             <ul className="menu-items">
               <li><a href="#home" className="nav-link">Home</a></li>
                 <li><a href="#about-us" className="nav-link">About Us</a></li>
                 <li> <a href="#contact-us" className="nav-link"> Contact Us </a>  </li>
                 <li> <a href="#cart" className="nav-link"> Cart </a>  </li>
             </ul> 
       </div>
       </div>
    );
}
// end of header section
export default Header;