import React from 'react';
import './Home.css';

const Home = () => {
  // Inline styles for background image
  const backgroundStyle = {
    backgroundImage: "url('/icons/background1.jpg')",  // Image path in the public folder
    backgroundSize: 'cover',                          // Make sure the image covers the entire section
    backgroundPosition: 'center',                     // Center the image
    backgroundRepeat: 'no-repeat',                    // Do not repeat the image
    height: '100vh',                                  // Full height of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <div style={backgroundStyle}>  {/* Apply inline styles here */}
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-images">
            {/* Replace with your own images */}
            {/* <img src="/icons/myImage.jpg" alt="Vedhagiri S" className="hero-image" /> */}
            <img src="/icons/myImage1.jpg" alt="Vedhagiri S" className="hero-image" />
          </div>

          <div className="hero-text">
            <h1 className="name">Vedhagiri S</h1>
            <p className="subtext">Full Stack Developer</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
