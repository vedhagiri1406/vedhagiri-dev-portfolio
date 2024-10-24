import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS service, template, and public key
    emailjs.send(
      'service_xsf8adr',    // Your actual EmailJS service ID
      'template_xvmmrtj',   // Your actual EmailJS template ID
      formData,             // The form data will be sent
      'p3vPj2YKVNjlHRvQC'     // Use the Public Key here (as User ID)
    )
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      // Optionally, clear form after submission
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
    });
  };

  // Inline styles for background image
  const backgroundStyle = {
    backgroundImage: "url('/icons/contact.jpg')",  // Replace with the actual image path
    backgroundSize: 'cover',                           // Ensure the image covers the entire section
    backgroundPosition: 'center',                      // Center the image
    backgroundRepeat: 'no-repeat',                     // Do not repeat the image
    minHeight: '100vh',                                // Full height of the viewport
    display: 'flex',                                   // Flexbox to center content
    flexDirection: 'column',                           // Column layout
    justifyContent: 'center',                          // Center content vertically
    alignItems: 'center',                              // Center content horizontally
    color: '#f4f4f4',                                  // Light text color
    padding: '20px',                                   // Padding for mobile devices
  };

  return (
    <div style={backgroundStyle}> {/* Apply inline styles here */}
      <h2 className="contact-heading">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {/* Display your email address below the form */}
      <p className="contact-email">
        You can also reach me at: <a href="mailto:vedhagiri1421@gmail.com">vedhagiri1421@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
