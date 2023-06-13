import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";

export default function App_travel() {
  const [data, setData] = useState(null);
  const [txt, setTxt] = useState("");
  const [image, setImage] = useState("");
  let image_temp;
  let image_temp1;
  let image_temp2;

  const fetchUrl = "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=tangerang";
  const fetchOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8d2860fc82mshb91dfbb7f9949a0p11fadejsn083cb526ca31",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  function fetchHotels() {
	var mk=document.getElementById("kota").value;
    if(mk=="")
    {
        alert("Masukan nama kota dulu")
        return;
    }
	//alert(mk);
	var urlku=fetchUrl.replace("tangerang",mk);
    fetch(urlku, fetchOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.data[1].title);
        setTxt(data.data[1].title);
        if (data.data[1].image == null) {
          setImage(logo);
        } else {
          image_temp = data.data[1].image.urlTemplate;
          image_temp1 = image_temp.replace("{width}", "100");
          image_temp2 = image_temp1.replace("{height}", "100");
          setImage(image_temp2);
          console.log(image_temp2);
        }
      });
  }

  const options = {
    method: "GET",
    url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation",
    params: { query: "tangerang" },
    headers: {
      "X-RapidAPI-Key": "8d2860fc82mshb91dfbb7f9949a0p11fadejsn083cb526ca31",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    },
  };

  function searchHotelsWithAxiosHandler() {
    axios.request(options).then((response) => {
      setData(response.data);
      console.log(data);
    });
  }

  useEffect(() => {
    console.log(data);
    if (data != null) {
      console.log(data.data[1].title);
      setTxt(data.data[1].title);
    }
  });

  return (
    <div className="App">
      <button onClick={fetchHotels}>Fetch Hotels</button>
      <button onClick={searchHotelsWithAxiosHandler}>Search Hotels with Axios Handler</button>
      <h1>{txt}</h1>
      <img src={image} />
    </div>
  );
}
