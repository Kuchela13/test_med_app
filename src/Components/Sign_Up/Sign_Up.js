// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router
    const [errors, setErrors] = useState({});
    
    
    const validate = () => {
        const errors = {};
        if (!name) errors.name = 'Name is required';
        if (!email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Email address is invalid';
        }
        if (!password) errors.password = 'Password is required';
        if (!phone) {
            errors.phone = 'Phone number is required';
          } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = 'Phone number must be exactly 10 digits';
          }
          if (!role) errors.role = 'Role is required';
        return errors;
      };
    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
          console.log('Form submitted');
        } else {
          setErrors(validationErrors);}


        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    // JSX to render the Sign Up form
    return (
        <div className="container1" >

<div>
    <h1 className="signup">Sign Up</h1>
</div>
<div className="login">
    <p className="member"> Already a member?</p>
  
    <Link to="/login" id="lmember"> Login</Link>
</div>
            
                <div id="signupform">
                    <form method="POST">
                        
                    <div className="form_member">
            <label htmlFor="dropdown" className="label">Role</label>
           <select id="dropdown" required className="form-control"   value={role}
          onChange={(e) => setRole(e.target.value)}
        >
                <option id="select1" value="" disabled selected hidden>Select role</option> 
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
           </select>
           {errors.role && <p className="error-message">{errors.role}</p>}
        </div>





                        {/* Apply similar logic for other form elements like name, phone, and password to capture user information */}
                        <div className="form_member">
           <label htmlFor="name" className="label">Name</label>
           <input value={name} type="text" onChange={(e) => setName(e.target.value)} name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
           {errors.name && <p className="error-message">{errors.name}</p>}
       </div>



       <div className="form_member">
           <label htmlFor="phone" className="label">Phone</label>
           <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
           {errors.phone && <p className="error-message">{errors.phone}</p>}
       </div>

       <div className="form_member">
                            <label htmlFor="email" className="label">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>


       <div className="form_member psw">
           <label htmlFor="password" className="label">Password</label>
           <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
           <i className="fa-solid fa-eye" id="show_password"></i>
           {errors.password && <p className="error-message">{errors.password}</p>}
       </div>



                    </form>

                    <div className="sbutton">
    
        <button type="submit" className="submitbtn" onClick={register}>Submit</button>
   
</div>
<div className="rbutton">

        <button type="reset" className="resetbtn">Reset</button>
    
</div>
                </div>
          


        </div>
        
    );
}

export default Sign_Up; // Export the Sign_Up component for use in other components