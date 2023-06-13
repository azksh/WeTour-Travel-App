//import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App_travel() {
  const [data, setData] = useState(null);
  const [txt, setTxt] = useState("");

  const fetchUrl =
    "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=tangerang";
  const fetchOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8d2860fc82mshb91dfbb7f9949a0p11fadejsn083cb526ca31",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
    }
  };

  function fetchHotels() {
    fetch(fetchUrl, fetchOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.data[1].title);
        setTxt(data.data[1].title);
      });
  }

  const options = {
    method: "GET",
    url: "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation",
    params: { query: "jakarta" },
    headers: {
      "X-RapidAPI-Key": "8d2860fc82mshb91dfbb7f9949a0p11fadejsn083cb526ca31",
      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com"
    }
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
      <button onClick={searchHotelsWithAxiosHandler}>
        Search Hotels with Axios Handler
      </button>
      <h1>{txt}</h1>
    </div>
  );
}