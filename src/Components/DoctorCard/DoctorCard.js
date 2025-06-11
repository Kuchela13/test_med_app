import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
import { v4 as uuidv4 } from 'uuid';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
  
    const handleBooking = () => {
      setShowModal(true);
    };
  
    const handleCancel = (appointmentId) => {
      const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
      setAppointments(updatedAppointments);
    };
  
    const handleFormSubmit = (appointmentData) => {
      const newAppointment = {
        id: uuidv4(),
        ...appointmentData,
      };
      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      setShowModal(false);
    };
  return (
<div className='main-container'>
<div className='doctorcardcontainer'>

    <div className='docimgcontainer'>
    <img className='docimg' src='https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-doctor-silhouette-icon-vector-medical-png-image_4752916.png'
    alt='silhouette of a doctor with a stethescope' />

    </div>

    <div className='docdetailscontainer'>
        <div className='docname'>{name}</div>
        <div className='docspeciality'>{speciality}</div>
        <div className='docexperience'>Experience: {experience} years</div>
        <div className='docrating'>Rating: {ratings}</div>
    </div>

    <div className='bookbuttoncontainer'>
        <button className='bookbutton'>
            <div>Book Appointment</div>
            <div>No Booking Fee</div>
        </button>
    </div>






    
</div>
</div>
)}

export default DoctorCard