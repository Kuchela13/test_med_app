import React from "react";
import "./Login.css";
import { useState } from 'react';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({});

   const validate = () => {
        const errors = {};
      
        if (!email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Email address is invalid';
        }
        if (!password) errors.password = 'Password is required';
       
        return errors;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
          console.log('Form submitted');
        } else {
          setErrors(validationErrors);
        }
      };






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
                <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email"   value={email} onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

             <div className="form_member psw">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password"value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
            <i className="fa-solid fa-eye" id="show_password"></i>
            {errors.password && <p className="error-message">{errors.password}</p>}
</div>
        </form>
    </div>

    <div className="lbutton">
        <a href="#">
            <button type="submit" className="loginbtn" onClick={handleSubmit}>Submit</button>
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