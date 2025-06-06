import React from "react";
import "./Login.css";

const Login = () => {
    return (



 <div className="container">
    <div>
        <h1 className="login1">Login</h1>
    </div>
    <div className="login">
        <p className="member"> Are you a new member?</p>
       <a href="../Sign_Up/Sign_Up.html" className="lmember">Sign Up Here</a>
        
    </div>
    <div id="signupform">
        <form>

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

    <div className="lbutton">
        <a href="#">
            <button type="submit" className="loginbtn">Submit</button>
        </a>
    </div>
    <div className="rbutton">
        <a href="#">
            <button type="reset" className="resetbtn">Reset</button>
        </a>
    </div>
    <div>
        <a href="#" className="fpw"> Forgot password? </a>
    </div>

</div>
    );
};

export default Login;