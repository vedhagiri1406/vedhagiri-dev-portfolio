import React from 'react';
import './About.css'; // Importing the CSS file for styling except background image

const About = () => {
  // Inline styles for the background image
  const backgroundStyle = {
    backgroundImage: "url('/icons/background2.jpg')",  // Replace with your image path
    backgroundSize: 'cover',                           // Cover the entire section
    backgroundPosition: 'center',                      // Center the image
    backgroundRepeat: 'no-repeat',                     // Do not repeat the image
    height: '100vh',                                   // Full height of the viewport
    display: 'flex',                                   // Flexbox for centering content
    flexDirection: 'column',                           // Column layout
    justifyContent: 'space-around',                    // Space around for child elements
    alignItems: 'center',                              // Center items horizontally
  };

  return (
    <div style={backgroundStyle}> {/* Apply inline styles for background image */}
      <h2 className="about-heading">About Me</h2>
      
      {/* Flex container for intro and skills */}
      <div className="about-content">
        {/* Introduction */}
        <div className="intro-section">
          <p className="about-intro">
            Hi, I'm <strong>Vedhagiri S</strong>, a passionate Full Stack Developer. I specialize in building efficient, scalable, and elegant solutions using modern technologies like Python, Django, React, and AWS. My goal is to use technology to solve real-world problems and create a positive impact.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3 className="about-subheading">Technical Skills</h3>
          <ul className="about-list">
            <li>Python, JavaScript</li>
            <li>Django, Flask, React.js</li>
            <li>AWS (S3, Lambda), Docker</li>
            <li>MySQL, PostgreSQL</li>
            <li>Git, GitHub</li>
            <li>HTML, CSS, JavaScript</li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="get-in-touch">
        <h3 className="about-subheading">Get in Touch</h3>
        <p className="about-text">If you'd like to connect or collaborate, feel free to <a href="/contact">contact me</a>!</p>
      </div>
    </div>
  );
};

export default About;
