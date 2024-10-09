import React from 'react';
// import myImage from '../assets/my-image.jpg'; // Update the path to your image file
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        {/* <img src={myImage} alt="My Portfolio" className="portfolio-image" /> */}
        <div className="hero-text">
          <h1>Welcome to My Portfolio</h1>
          <p>I am a software developer with expertise in:</p>
          <ul className="skills-list">
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
            <li>PostgreSQL</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>APIs (REST & GraphQL)</li>
            <li>Version Control (Git)</li>
            <li>Responsive Design</li>
          </ul>
          <p>
            I create efficient and scalable solutions that enhance user experience.
            Explore my projects and get in touch for collaboration!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
