
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login'
import BookingConsultation from './Components/BookingConsultation';  
//import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import HealthBlog from './Components/HealthBlog/HealthBlog';
import Notification from './Components/Notification/Notification';
import NotificationOverlay from './Components/Notification/NotificationOverlay';
function App() {
   const [showNotification, setShowNotification] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);
  useEffect(() => {
    const stored = localStorage.getItem('appointment');
    if (stored) {
      setAppointmentData(JSON.parse(stored));
      setShowNotification(true);
    }
  }, []);

  const dismissNotification = () => {
    setShowNotification(false);
    setAppointmentData(null);
  };
  return (
<div className="App">
     
        <BrowserRouter>
       <Navbar/>
        
       
          <Routes>
          <Route path="/" element={<Landing_Page/>}/>
          <Route path="/landingpage" element={<Landing_Page/>}/>
          <Route path="/signup" element= {<Sign_Up/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path="/healthblog" element = {<HealthBlog/>} />
          <Route path="/Components/Notification/Notification" element= {<Notification/>} />
        
          </Routes>
   
        </BrowserRouter>

        {showNotification && appointmentData && (
      <NotificationOverlay appointment={appointmentData} onClose={dismissNotification} />
    )}

        </div>

  );
}

export default App;
