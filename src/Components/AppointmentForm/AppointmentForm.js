import React, { useState } from 'react'
import './AppointmentForm.css'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
       const [appointmentDate, setAppointmentDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [errors, setErrors] = useState({});
   
    const validate = () => {
        const errors = {};
        if (!name) errors.name = 'Name is required';
        if (!phoneNumber) {
            errors.phoneNumber = 'Phone number is required';
          } else if (!/^\d{10}$/.test(phoneNumber)) {
            errors.phoneNumber = 'Phone number must be exactly 10 digits';
          }
        if (!appointmentDate) errors.appointmentDate="You must choose an appointment date";
        if (!timeSlot) errors.timeSlot="You must choose a time slot";

         setErrors(errors);
         console.log(errors);
        return errors;  
      };
     
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length === 0) {
        console.log('Form submitted');
        onSubmit({ name, phoneNumber });
        setName('');
        setPhoneNumber('');
        setAppointmentDate ('');
        setTimeSlot ('');
  
      } else {
        setErrors(validationErrors);}
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
            name="name"
            placeholder="Enter your name"
            className='input'
          />
           {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group1">
          <label htmlFor="phoneNumber" className='form_label'>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className='input'
          />
           {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
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
       {errors.appointmentDate && <p className="error-message">{errors.appointmentDate}</p>}
        </div>

<div className="form-group1">
<label htmlFor="timeslot" className='form_label'>Time Slot:</label>
         
            <input
            type="time"
            id="timeslot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
            />
           {errors.timeSlot && <p className="error-message">{errors.timeSlot}</p>}
</div>

        <button type="submit" onClick={handleFormSubmit} className='book_btn'>Book Now</button>
      </form>
    );
  };

export default AppointmentForm
