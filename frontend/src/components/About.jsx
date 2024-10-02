import React from 'react';

function About() {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dmmcdahdl/image/upload/v1727364026/18_sgbje9.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Adjust the height as needed
      }}
    >
      <h1 className="text-4xl font-extrabold text-white">About Combat Images</h1>
      <p className="text-white">
        Welcome to our website. We are dedicated to providing the best service.
      </p>
    </div>
  );
}

export default About;