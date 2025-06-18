import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login'
import BookingConsultation from './Components/BookingConsultation';  
//import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import HealthBlog from './Components/HealthBlog/HealthBlog';
import Notification from './Components/Notification/Notification';
function App() {
  return (
<div className="App">
     
        <BrowserRouter>
       
        
          <Notification>
          <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="/landingpage" element={<Landing_Page/>}/>
          <Route path="/signup" element= {<Sign_Up/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path="/healthblog" element = {<HealthBlog/>} />
          <Route path="/Components/Notification/Notification" element= {<Notification/>} />
          </Routes>
          </Notification>
        </BrowserRouter>



        </div>

  );
}

export default App;
