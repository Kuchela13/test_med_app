import React, { useState } from 'react'
import './AppointmentForm.css'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
       const [appointmentDate, setAppointmentDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
      setAppointmentDate ('');
      setTimeSlot ('');
    };
  
    return (
      <form className="appointment-form">
        <div className="form-group1">
          <label htmlFor="name" className='form_label'>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="phoneNumber" className='form_label'>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group1" >
      <label htmlFor="appointment-date" className='form_label'>Select Appointment Date:</label>
      <input
      className='date_input'
        type="date"
        id="appointment-date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
      /> 
        </div>

<div className="form-group1">
<label htmlFor="timeslot" className='form_label'>Time Slot:</label>
           <select id="timeslot" required   value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        >
                <option id="select1" value="" disabled selected hidden>Select a time slot</option> 
                <option value="09:00" className='option'>09:00 AM</option>
                <option value="10:00" className='option'>10:00 AM</option>
                <option value="11:00" className='option'>11:00 AM</option>
                <option value="12:00" className='option'>12:00 PM</option>
                <option value="13:00" className='option'>01:00 PM</option>
                <option value="14:00" className='option'>02:00 PM</option>
                <option value="15:00" className='option'>03:00 PM</option>
                <option value="16:00" className='option'>04:00 PM</option>
                <option value="17:00" className='option'>05:00 PM</option>
           </select>
</div>

        <button type="submit" onClick={handleFormSubmit} className='book_btn'>Book Now</button>
      </form>
    );
  };

export default AppointmentForm
