// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';
// Apply CSS according to your design theme or the CSS provided in week 2 lab 2
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {

  // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
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

  // Get navigation function from react-router-dom
  const navigate = useNavigate();

  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);

  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted');
    } else {
      setErrors(validationErrors);}
    // Send a POST request to the login API endpoint
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // Parse the response JSON
    const json = await res.json();
    if (json.authtoken) {
      // If authentication token is received, store it in session storage
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('email', email);

      // Redirect to home page and reload the window
      navigate('/');
      window.location.reload();
    } else {
      // Handle errors if authentication fails
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

  return (
    <div>
      <div className="container">
        
          <div >
            <h2 id="login1">Login</h2>
          </div>
          <div className="login">
            Are you a new member? 
            <span>
              <Link to="/signup" className="lmember">
                Sign Up Here
              </Link>
            </span>
          </div>
          <br />
          <div className="signupform">
            <form>
              <div className="form_member">
                <label htmlFor="email" className="label">Email</label>
                {/* Input field for email */}
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  aria-describedby="helpId" 
                />
                 {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
              <div className="form_member psw">
               <label htmlFor="password" className="label">Password</label>
               <input
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 type="password"
                 name="password"
                 id="password"
                 className="form-control"
                 placeholder="Enter your password"
                 aria-describedby="helpId"
               />
                <i className="fa-solid fa-eye" id="show_password"></i>
                {errors.password && <p className="error-message">{errors.password}</p>}
             </div>


             
             
            </form>
            <div className="lbutton">
        <a href="#">
            <button type="submit" className="loginbtn" onClick={login}>Submit</button>
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

 

        </div>
      </div>
    
  )
}

export default Login;
