import React, { useState } from 'react';
import '../Assets/Contact.css'; 

function Contact() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>This is the Contact Us page content.</p>
      <p>
        If you have any questions or need assistance with your grocery orders,
        feel free to get in touch with our customer support team. We are here to
        help you!
      </p>
      <p>
        You can reach us via email at support@example.com or by phone at +1
        (123) 456-7890. We value your feedback and strive to provide the best
        service.
      </p>

      {submitted ? (
        <p style={{fontSize:'30px'}}>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleFeedbackSubmit}>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              cols="50"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
