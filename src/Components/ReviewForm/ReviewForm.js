import React, {useState} from "react";

const ReviewForm =() => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      review: "",
      rating: 0,
      speciality: "",
    
    });
    const [submittedReviews, setSubmittedReviews] = useState([]);
    const [showWarning, setShowWarning] = useState(false);
  
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name && formData.review && formData.rating > 0) {
        setSubmittedReviews([...submittedReviews, formData]);
        setFormData({ name: "", review: "", rating: 0, speciality:"" });
        setShowWarning(false);
        setShowForm(false);
      } else {
        setShowWarning(true);
      }
    };
    
    const handleStarChange = (newRating) => {
        setFormData({ ...formData, rating: newRating });
      };

    return (
<div className="reviewcontainer">

    <h1>Reviews</h1>
<table className="review-table">
    <thead>
        <tr>
        <th>#</th>
        <th>Doctor Name</th>
        <th>Speciality</th>
        <th>Provide Feedback</th>
        <th>Review Given</th>
        </tr>
    </thead>
<tbody>
{submittedReviews.map((review, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{review.name}</td>
              <td>{review.speciality}</td>
              <td>
              <button >Provide Feedback</button>
              </td>
              <td>{review.review} (Rating: {review.rating})</td>
            </tr>
          ))}

</tbody>
</table>

{!showForm ? (
        <button onClick={() => setShowForm(true)}>Add Review</button>
      ) : (
        <form onSubmit={handleSubmit}>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="speciality"
            placeholder="Speciality"
            value={formData.speciality}
            onChange={handleChange}
          />
          <textarea
            name="review"
            placeholder="Write your review"
            value={formData.review}
            onChange={handleChange}
          />
          
     <label>Rating:</label>
      <StarRating rating={formData.rating} onChange={handleStarChange} />
      <button type="submit">Submit</button>

      
        </form>
      )}




</div>
)}

export default ReviewForm
