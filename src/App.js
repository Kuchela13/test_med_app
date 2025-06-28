import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login'
import BookingConsultation from './Components/BookingConsultation';  
import HealthBlog from './Components/HealthBlog/HealthBlog';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';

const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1 234 567 890",
  
  };


function App() {

    
  return (
<div className="App">
     
        <BrowserRouter>
    
       <Navbar user={user}/>
          <Routes>
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/landingpage" element={<Landing_Page/>}/>
            <Route path="/signup" element= {<Sign_Up/>}/>
            <Route path="/login" element= {<Login/>}/>
            <Route path="/booking-consultation" element={<BookingConsultation />} />
            <Route path="/reviews" element={<ReviewForm/>}/>
            <Route path="/healthblog" element = {<HealthBlog/>} />
          <Route path="/profile" element={<ProfileCard user={user} />} />
          </Routes>
          <Notification></Notification>
        </BrowserRouter>


        </div>

  );
}

export default App;
