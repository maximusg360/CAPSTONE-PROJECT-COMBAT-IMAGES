import React from 'react';
import Header from './Header';

const Home = () => {
return(
<div className="home-container">
      
      <video autoPlay muted loop className="background-video">
        <source src="https://res.cloudinary.com/dmmcdahdl/video/upload/v1727370705/4761711-uhd_4096_2160_25fps_ju7ese.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
       <h1>WELCOME TO COMBAT IMAGES</h1>
       <p>Where photography meets the world of combat</p>
      </div>
    </div>
  );
}

export default Home;
