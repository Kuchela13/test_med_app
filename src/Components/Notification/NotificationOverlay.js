import React from 'react';
import './NotificationOverlay.css';

const NotificationOverlay = ({ appointment, onClose }) => {
  if (!appointment) return null;

  return (
    <div className="notification-toast">
      <h4>✅ Appointment Confirmed</h4>
      <p><strong>Doctor:</strong> {appointment.doctorName}</p>
      <p><strong>Speciality:</strong> {appointment.speciality}</p>
      <p><strong>Patient:</strong> {appointment.patientName}</p>
      <p><strong>Phone Number:</strong> {appointment.phone}</p>
      <p><strong>Date:</strong> {appointment.date}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
      <button onClick={onClose}>Dismiss</button>
    </div>
  );
};

export default NotificationOverlay;