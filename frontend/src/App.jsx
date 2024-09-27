import { useEffect, useState } from "react";
import "/src/index.css";

import Gallery from "./components/Gallery";

import './index.css'
import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleImagesView from "./components/SingleImagesView";

function App() {
  
  // const mydata = [
  //   { title: 'Image 1', description: 'Description 1', imageUrl: 'url1' },
  //   { title: 'Image 2', description: 'Description 2', imageUrl: 'url2' },
  //   // Add more data as needed
  // ];
  const [mydata, setMyData] = useState([]);
  useEffect(()=>{
    async function fetchImageData(){
        try {

          const response = await fetch("http://localhost:8080/test");
          const data = await response.json()
          setMyData(data);
        } catch (error) {
          console.error(error)
        }
    }
    fetchImageData();
  },[]);

  return (
    <>
    

      {/* <Home mydata={mydata} /> */}
      {/* <Gallery mydata={mydata} /> */}

    {/* <div className="
      background-image: url('https://www.si.com/.image/t_share/MTY4MTg5NDQzNzI0MDkzMzQx/ali-liston-2-cassiusjpg.jpg')" >;
    </div> */}
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      {/* <Route path="/Pic" element={<Pic/>} /> */}
      <Route path="/Gallery" element={<Gallery mydata={mydata}/>} />
      <Route path="/SingleImages/{id}" element={<SingleImagesView />} />
      </Routes>
    



    </>


  );
}

export default App;
