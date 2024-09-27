import React from 'react';
import Header from './Header';
import App from '../App';




function Gallery({ mydata }) {

  return (
    <>

    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-extrabold ">
        Combat Images
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mydata.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={item.image_url} alt={item.title} className="w-full h-auto rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p>bkwjdbcksbdshbjhsbvjshfvb</p>
          </div>
        ))}
      </div>
    </div>
      

  </>
  );
}

export default Gallery;