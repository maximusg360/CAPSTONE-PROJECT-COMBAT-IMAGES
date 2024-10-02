import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Helper function to chunk the data array into groups of 4
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

function Gallery() {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    callGallery();
  }, []);

  const callGallery = async () => {
    let response = await axios.get("http://localhost:8080/images");
    let data = await response.data;
    setMyData(data);
    console.log(data);
  };

  const chunkedData = chunkArray(myData, 3); // Group myData into sets of 4

  return (
    <div className=" mx-auto p-80"style={{
      backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/00/56/72/27/1000_F_56722733_RLjI3OnHV088iJ5bfIiuqZHBImBsRymi.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
      {/* <h1 className="text-4xl font-extrabold">Combat Images</h1> */}
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 ">
        
        {chunkedData.map((chunk, index) => (
          <div key={index} className="grid gap-4">
            {chunk.map((item, i) => (
              <div key={i}>
                <img
                  onClick={() => navigate(`/SingleImages/${item.id}`)}
                  className="h-72 w-full rounded-3xl object-cover cursor-pointer"
                  src={item.image_url}
                  alt="gallery-photo"
                />
              </div>
              
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
