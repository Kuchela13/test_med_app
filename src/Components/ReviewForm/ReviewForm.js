import React, {useState, useEffect} from "react";
import "./ReviewForm.css"
function StarRating({ rating, onChange }) {
    const stars = [1, 2, 3, 4, 5];
  
    return (
      <div>
        {stars.map((star) => (
          <span
            key={star}
            style={{
              cursor: 'pointer',
              color: star <= rating ? '#FFD700' : '#CCC',
              fontSize: '24px',
            }}
            onClick={() => onChange(star)}
            role="button"
            tabIndex={0}
            aria-label={`${star} Star${star > 1 ? 's' : ''}`}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  }
  
const ReviewForm =() => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        speciality:'',
      rating: 0,
      
    
    });
    const [submittedReviews, setSubmittedReviews] = useState([]);
    const [showWarning, setShowWarning] = useState(false);
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        // Replace the URL below with your actual backend API endpoint if available
        const apiUrl = 'http://localhost:3000/appointments';
    
        async function fetchAppointments() {
          try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error('Failed to fetch appointments');
            }
            const data = await response.json();
            setAppointments(data);
          } catch (error) {
            console.error('Error fetching appointments:', error);
            // Fallback: Use dummy data if API call fails or is not ready
            setAppointments([
              { doctor: { id: 1, name: 'Dr. M. Smith', speciality: 'General Physician' } },
              { doctor: { id: 2, name: 'Dr. J. Jones', speciality: 'Dentist' } },
            ]);
          }
        }
    
        fetchAppointments();
      }, []);

    const handleProvideFeedback = (doctor) => {
        setSelectedDoctor(doctor);
        setFormData({
          name: doctor.name,
          speciality: doctor.speciality,
          review: '',
          rating: 0,
        });
        setShowForm(true);
        setShowWarning(false);
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
      const handleStarChange = (newRating) => {
        setFormData(prev => ({ ...prev, rating: newRating }));
      };
  
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.review && formData.rating > 0) {
          setShowWarning(false);
          // Add the new review to submittedReviews, include doctor id to track
          setSubmittedReviews(prev => [
            ...prev,
            {
              doctorId: selectedDoctor.id,
              name: formData.name,
              speciality: formData.speciality,
              review: formData.review,
              rating: formData.rating,
            },
          ]);
          setShowForm(false);
          setSelectedDoctor(null);
          setFormData({ name: '', speciality: '', review: '', rating: 0 });
        } else {
          setShowWarning(true);
        }
      };
  
    return (
<div className="reviewcontainer">

    <h1>Reviews</h1>
<table className="review-table">
    <thead >
        <tr className="head">
        <th>#</th>
        <th>Doctor Name</th>
        <th>Speciality</th>
        <th>Provide Feedback</th>
        <th>Review Given</th>
        </tr>
    </thead>
    <tbody>
          {appointments.map((appt, index) => {
            const review = submittedReviews.find(r => r.doctorId === appt.doctor.id);
            return (
              <tr key={appt.doctor.id}>
                <td>{index + 1}</td>
                <td>{appt.doctor.name}</td>
                <td>{appt.doctor.speciality}</td>
                <td>
                  {!showForm || selectedDoctor?.id !== appt.doctor.id ? (
                    <button className="providebtn" onClick={() => handleProvideFeedback(appt.doctor)} disabled={review}>
                     {review ? `Reviewed` : 'Provide Feedback'}
                      
                    </button>
                  ) : (
                    <span>Review in progress</span>
                  )}
                </td>
                <td>
                  {review ? `(Rating: ${review.rating})` : 'No review yet'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showForm && selectedDoctor && (
        <form onSubmit={handleSubmit} className="review-form">
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={formData.name}
            readOnly
            className="fixed"
          />
          <input
            type="text"
            name="speciality"
            placeholder="Speciality"
            value={formData.speciality}
            readOnly
            className="fixed"
          />
          <textarea
            name="review"
            placeholder="Write your review"
            value={formData.review}
            onChange={handleChange}
            className="review"
          />
          <label>Rating:</label>
          <StarRating rating={formData.rating} onChange={handleStarChange} />
          <button type="submit" className="btn_1">Submit</button>
          <button type="button" onClick={() => setShowForm(false)} className="btn_2">Cancel</button>
        </form>
      )}
    </div>
  );
}
export default ReviewForm
