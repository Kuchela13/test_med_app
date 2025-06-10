import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



const Navbar = () => {
    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
    useEffect(() => { 
      const storedname = sessionStorage.getItem("name");

      if (storedname) {
            setIsLoggedIn(true);
            setUsername(storedname);
          }
        }, []);
  return (
    <div>
    <nav>
      <div className="nav__logo">
        <Link to="/landingpage" className="SH">
        StayHealthy   <img src="https://cdn.pixabay.com/photo/2020/04/10/12/34/sign-5025586_1280.png" alt="logo of medical hospital" height="50" width="50" viewBox="0 0 1000 1000" style={{fill:"#3685fb"}}/></Link>
        <span></span>
        <div className="Nicon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      </div>
      
      <ul className="nav_links">
        <li className="link">
          <Link to="/landingpage" className="newlink">Home</Link>
        </li>
        <li className="link">
          <Link to="/search/doctors" className="newlink">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog" className="newlink">Health Blog</Link>
        </li>
        <li className="link">
         <Link to="/reviews" className="newlink">Reviews</Link>
        </li>
        {isLoggedIn?(
          <>
            <li className="link user-info">
            <span className="user-name">{username}</span>
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
            
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;

