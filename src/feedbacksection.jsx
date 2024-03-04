import React, { useState } from 'react';
import './home.css';
const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    additionalDetails: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic can be added here

    // Here, you can use methods like fetch or axios to send data to the server
    // For simplicity, I'm just logging the form data
    console.log(formData);

    // After submission, you can clear the form fields if needed
    setFormData({
      name: '',
      email: '',
      additionalDetails: ''
    });
  };

  return (
    <div>
      <div className="title2" id="feedBACK">
        <span>Give Feedback</span>
        <div className="shortdesc2">
          <p>Please share your valuable feedback with us</p>
        </div>
      </div>
      <div className="feedbox">
        <div className="feed">
          <form onSubmit={handleSubmit}>
            <label>Your Name</label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="fname"
              required
            /><br />
            <label>Email</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br />
            <label>Additional Details</label><br />
            <textarea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleChange}
            ></textarea><br />
            <button type="submit" id="csubmit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
