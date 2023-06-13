import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://travel-advisor.p.rapidapi.com/airports/search?query=jakarta&locale=";
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'de63500fb6mshb4b0ed8d4af1773p11f7cejsnb20aad94f5ef',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export default function Bandara(){
//const MyComponent = () => {
  const [pos, setPosts] = useState([]);
  const mk=document.getElementById("kota").value;
  if(mk=="")
  {
      alert("Masukan nama kota dulu");
  }
    var urlku=API_URL.replace("jakarta",mk);  
    const AMBIL_DATA = async () => {
    const { data } = await axios.get(urlku,options);
    setPosts(data);
    console.log(data);
  };


  useEffect(() => {
    AMBIL_DATA();
  }, []);

  return (
    <div>
       <button   class="button-search" >Search Wisata</button>
      {pos.length > 0 ? (
        <div>
        {pos.map((detail) => (
            <div>
              <h2>{detail.city_name}</h2>
              <p>{detail.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading... </p>
      )}
    </div>
  );


}
