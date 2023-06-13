import React, { useEffect, useState } from "react"

const xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://cuaca-gempa-rest-api.vercel.app/quake", false);
xhttp.send();
const obj = JSON.parse(xhttp.responseText)
var b="";
var a=0;
b=obj.data.shakemap;
for(a=0;a<obj.length;a++)
{
   //b=b+obj[a].address.street+"\n";.
   
   b=b+obj[a].data.tanggal+"\n";
}

const App = () => {
  const [users, setUsers] = useState([])
  return (
    <div>
    <img src={b} />
    
    </div>
    );
}

const Appa = () => {
  const [users, setUsers] = useState([])
  return (
    <div>
    <img src={b} />
    
    </div>
    );
}

export default Appa;
