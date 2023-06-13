import React, { useEffect, useState } from "react";
import './gempa.css';

const xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://cuaca-gempa-rest-api.vercel.app/quake", false);
xhttp.send();
const obj = JSON.parse(xhttp.responseText)
console.log(obj);
var b="";
b=obj.data.shakemap;

const App_gempa = () => {
  const [users, setUsers] = useState([])
  return (
    <img class="gemp" src={b} />
    );
}


export default App_gempa;
