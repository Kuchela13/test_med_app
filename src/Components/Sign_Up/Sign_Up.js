import React from "react";
import "./Sign_Up.css";
import { Link } from "react-router-dom";




const Sign_Up = () => {
return (

<div className="container">
<div>
    <h1 className="signup">Sign Up</h1>
</div>
<div className="login">
    <p className="member"> Already a member?</p>
   <a href="../Login/Login.html" className="lmember">Login</a>
    
</div>
<div id="signupform">
    <form>
         <div className="form_member">
            <label htmlFor="dropdown">Role</label>
           <select id="dropdown" required className="form-control">
                <option id="select1" value="" disabled selected hidden>Select role</option> 
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
           </select>
        </div>



        <div className="form_member">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name"/>
        </div>

         <div className="form_member">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number"/>
        </div>

         <div className="form_member">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email"/>
        </div>

         <div className="form_member psw">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password"/>
            <i className="fa-solid fa-eye" id="show_password"></i>
        </div>

    </form>
</div>

<div className="sbutton">
    <a href="#">
        <button type="submit" className="submitbtn">Submit</button>
    </a>
</div>
<div className="rbutton">
    <a href="#">
        <button type="reset" className="resetbtn">Reset</button>
    </a>
</div>

</div>


 );
};

export default Sign_Up;