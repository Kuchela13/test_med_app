import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div>
<nav>
<div className="nav__logo">

<a className="SH" href="#">
  StayHealthy 

  <img src="https://cdn.pixabay.com/photo/2020/04/10/12/34/sign-5025586_1280.png" alt="logo of medical hospital" height="50" width="50" viewBox="0 0 1000 1000" style={{fill:"#3685fb"}}/>
</a>

<span></span>
</div> 

<div className="Nicon" onClick="handleClick()">
<i className="fa fa-bars"></i>
</div>


<ul className="active_nav_links">
<li className="link">
    <Link to="/landingpage">Home</Link>

</li>

<li className="link">
<a href="#">Appointments</a>
</li>

<li className="link">
<a href="#">Health Blogs</a>
</li>

<li className="link">
<a href="#">Reviews</a>
</li>

<li className="link">
<Link to="/signup" id="btn1">Sign Up</Link>


</li>

<li className="link">
<Link to="/login" id="btn1">Login</Link>


</li>
</ul>

</nav>

</div>
);
}

export default Navbar;