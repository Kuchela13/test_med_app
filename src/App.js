import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
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
    const [appointmentBooked, setAppointmentBooked] = useState(false);

    // This function should be called when an appointment is booked
    const handleAppointmentBooked = () => {
      setAppointmentBooked(true);
      setTimeout(() => setAppointmentBooked(false), 5000); // Hide notification after 5 sec
    };
  return (
<div className="App">
     
        <BrowserRouter>
       
        
        <Notification appointmentBooked={appointmentBooked}>
          <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="/landingpage" element={<Landing_Page/>}/>
          <Route path="/signup" element= {<Sign_Up/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path="/healthblog" element = {<HealthBlog/>} />
          <Route path="/Components/Notification/Notification" element= {<Notification/>} />
        <Route path="/book" element={<BookingComponent onBooked={handleAppointmentBooked} />} /> 
          </Routes>
          </Notification>
        </BrowserRouter>



        </div>

  );
}

export default App;
