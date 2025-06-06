import React from "react";
import "./Sign_Up.css";
import { useState } from 'react';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
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
    <h1 className="signup">Sign Up</h1>
</div>
<div className="login">
    <p className="member"> Already a member?</p>
   <a href="../Login/Login.html" className="lmember">Login</a>
    
</div>
<div id="signupform">
    <form >
         <div className="form_member">
            <label htmlFor="dropdown">Role</label>
           <select id="dropdown" required className="form-control"   value={role}
          onChange={(e) => setRole(e.target.value)}
        >
                <option id="select1" value="" disabled selected hidden>Select role</option> 
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
           </select>
           {errors.role && <p className="error-message">{errors.role}</p>}
        </div>



        <div className="form_member">
            <label htmlFor="name">Name</label>
            <input type="text"  id="name" required className="form-control" placeholder="Enter your name"  value={name}
          onChange={(e) => setName(e.target.value)}/>
                 {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

         <div className="form_member">
            <label htmlFor="phone">Phone</label>
            <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number"  value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

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

<div className="sbutton">
    <a href="#">
        <button type="submit" className="submitbtn" onClick={handleSubmit}>Submit</button>
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