import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
import { v4 as uuidv4 } from 'uuid';
import AppointmentForm from  '../AppointmentForm/AppointmentForm';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
  

  
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

    <div className='bookappointmentcontainer'>
    <Popup trigger= {
        <button className={`bookbutton ${appointments.length > 0 ? 'cancelappointment' : ''}`}>
              {appointments.length > 0 ? (
                <div>Cancel Appointment</div>
              ) : (
                <div>Book Appointment</div>
              )}
              <div>No Booking Fee</div>
            </button>
    }
    modal
    open={showModal}
    onClose={() => setShowModal(false)}
  >

    {(close) => (
<div className='doctorbooked'>
<div>
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
</div>
{appointments.length > 0 ? (
<>
<h3> Appointment Booked Successfully!</h3>
{appointments.map((appointment) => (
    <div className="bookedInfo" key={appointment.id}>
    <p>Name: {appointment.name}</p>
    <p>Phone Number: {appointment.phoneNumber}</p>
    <p>Appointment Date:{appointment.Date}</p>
    <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
    </div>
    ))}
</>
):(
    <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
)}
</div>
   )}
    </Popup>
    </div>
</div>


</div>
)}

export default DoctorCard