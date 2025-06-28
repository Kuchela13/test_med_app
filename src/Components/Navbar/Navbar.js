import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProfileCard from '../ProfileCard/ProfileCard';



const Navbar = ({ user }) => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("username");
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
       // setEmail('');
        window.location.reload();
    }
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
      };
    useEffect(() => { 
      const storedname = sessionStorage.getItem("username");
      const storedemail=sessionStorage.getItem("email");  
      const storedphone=sessionStorage.getItem("phone");
      if (storedname) {
            setIsLoggedIn(true);
            setUsername(storedname);
          }
          if (storedemail) {
            setIsLoggedIn (true);
            setEmail (storedemail);
        }

        if (storedphone) {
            setPhone (storedphone);
        }
   
        }, []);
       
  return (
    <div>
    <nav>
      <div className="nav__logo">
        <Link to="/landingpage" className="SH">
        StayHealthy   <img src="https://cdn.pixabay.com/photo/2020/04/10/12/34/sign-5025586_1280.png" alt="logo of medical hospital" height="50" width="50" viewBox="0 0 1000 1000" style={{fill:"#3685fb"}}/></Link>
        <span></span>
        <div id="Nicon1" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      </div>
      
      <ul className={`nav_links ${click ? 'active' : ''}`}>
        <li className="link">
          <Link to="/landingpage" className="newlink">Home</Link>
        </li>
        <li className="link">
          <Link to="/booking-consultation" className="newlink">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog" className="newlink">Health Blog</Link>
          
        </li>
        <li className="link">
         <Link to="/reviews" className="newlink">Reviews</Link>
        </li>

 
      
      
        {isLoggedIn?(



          <>

<div className="profile-dropdown">
        <button onClick={toggleDropdown} className="profile-button">
        {username ? username : 'Guest'} ▼
        </button>

        {dropdownOpen && username && (
          <div className="dropdown-content">
           <li className="link">
         <Link to="/profile" className="newlink " id="profile1">Your Profile</Link>
        </li>
          </div>
        )}
      </div>


            <li className="link user-info">
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

