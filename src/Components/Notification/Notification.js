import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import "./Notification.css"

const Notification = ({ children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    //const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null); 
    const [showNotification, setShowNotification] = useState(false);
    

useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
       const storedAppointmentData = JSON.parse(localStorage.getItem("appointment"));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

 
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      
    }
  }, []);


  
  useEffect(() => {
    const stored = localStorage.getItem('appointment');
    if (stored) {
      setAppointmentData(JSON.parse(stored));
     
    
    }
  }, []);

  const dismissNotification = () => {
    setShowNotification(false);
    setAppointmentData(null);
  };

return (
<div>
<Navbar></Navbar>
{children}
    
{isLoggedIn && appointmentData && (
        <>
          <div className="ncontainer">
            <div className="notification-toast">
             
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
      <strong>Doctor:</strong> {appointmentData.doctorName}<br />
            <strong>Speciality:</strong> {appointmentData.speciality}<br />
            <strong>User:</strong> {appointmentData.patientName || username}<br />
            <strong>Phone:</strong> {appointmentData.phone}<br />
            <strong>Date:</strong> {appointmentData.date}<br />
            <strong>Time:</strong> {appointmentData.time}
              </p>
              <button className='b_t' onClick={dismissNotification} appointment={appointmentData}>Dismiss</button>
            </div>
          </div>
        </>
      )}



</div>
);
};

export default Notification