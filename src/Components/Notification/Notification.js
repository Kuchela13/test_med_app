import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ appointmentBooked }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null); 
    const [showNotification, setShowNotification] = useState(false);

useEffect(() => {
    const storedUsername = sessionStorage.getItem('name');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = storedDoctorData
      ? JSON.parse(localStorage.getItem(storedDoctorData.name))
      : null;

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    }
  }, []);

  useEffect(() => {
    if (appointmentBooked) {
      const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
      const storedAppointmentData = storedDoctorData
        ? JSON.parse(localStorage.getItem(storedDoctorData.name))
        : null;

      if (storedAppointmentData) {
        setAppointmentData(storedAppointmentData);
        setShowNotification(true);
      }
    }
  }, [appointmentBooked]);

return (
<div>
<Navbar />
    
{isLoggedIn && showNotification && appointmentData && doctorData && (
        <>
          <div className="appointment-card1">
            <div className="appointment-card__content">
             
              <h3 className="appointment-card__title">Appointment Details</h3>
              <div className="appointment-card__message">
              <p>Appointment booked with Dr. {doctorData?.name}</p>
        <p>Patient: {username}</p>
        <p>Time: {appointmentData.time}</p>
        <p>Date: {appointmentData.date}</p>
              </div>
            </div>
          </div>
        </>
      )}



</div>
);
};

export default Notification