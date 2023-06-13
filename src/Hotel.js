import React, { useEffect, useState } from "react"

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        data=this.responseText;
        const obj = JSON.parse(this.responseText);
	}
});

xhr.open('GET', 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=TANGERANG');
xhr.setRequestHeader('X-RapidAPI-Key', 'de63500fb6mshb4b0ed8d4af1773p11f7cejsnb20aad94f5ef');
xhr.setRequestHeader('X-RapidAPI-Host', 'tripadvisor16.p.rapidapi.com');

xhr.send(data);



var b="";
var a=0;
//for(a=0;a<obj.length;a++)
//{
   //b=b+obj[a].address.street+"\n";.
   
//}

const Htel = () => {
  return (
    <div>
    
    </div>
    );
}


export default Htel;
