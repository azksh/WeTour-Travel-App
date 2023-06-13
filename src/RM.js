import React, { useEffect, useState } from "react";
import logo from "./NO_IMG.png";
import './index.css';

export default function App_rm() {
  const [txt1, setTxt1] = useState("");
  const [txt2, setTxt2] = useState("");
  const [txt3, setTxt3] = useState("");
  const [txt4, setTxt4] = useState("");

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");


  var a=0;
  let image_temp;
  let image_temp1;
  let image_temp2;

  const fetchUrl = "https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/auto-complete?text=tangerang";
  const fetchOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "de63500fb6mshb4b0ed8d4af1773p11f7cejsnb20aad94f5ef",
      "X-RapidAPI-Host": "the-fork-the-spoon.p.rapidapi.com",
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
        var resid="";
        for(a=1;a<5;a++)
        {
          if(data.data[a]== null) 
          {
            if(a==1){setImage1(logo);}
            if(a==2){setImage2(logo);}
            if(a==3){setImage3(logo);}
            if(a==4){setImage4(logo);}

            if(a==1){setTxt1("");}
            if(a==2){setTxt2("");}
            if(a==3){setTxt3("");}
            if(a==4){setTxt4("");}
          }
          else
          {
            resid=(data.data[a].thumbnail.photoSizeDynamic.urlTemplate);
            resid = resid.replace("{width}", "100");
            resid = resid.replace("{height}", "100");
            if(a==1){setImage1(resid);}
            if(a==2){setImage2(resid);}
            if(a==3){setImage3(resid);}
            if(a==4){setImage4(resid);}

            resid=data.data[a].localizedName;
            resid=resid + " , "+(data.data[a].localizedAdditionalNames.longOnlyHierarchy);
            
            resid = resid.replace("{width}", "100");
            resid = resid.replace("{height}", "100");
            if(a==1){setTxt1(resid);}
            if(a==2){setTxt2(resid);}
            if(a==3){setTxt3(resid);}
            if(a==4){setTxt4(resid);}
          }
        }

      });


  }

 


  return (
    <div className="App" class="div-hotel">
      
      <button onClick={fetchHotels}>Search Restaurant</button>
       <table align='center' class="hotel_tab">
       <tr><td class="tx-hotel">{txt1}</td><td class="tx-hotel">{txt2}</td></tr>
        <tr><td><img class="hotel" src={image1} /></td><td><img class="hotel" src={image2} /></td></tr>
        <tr><td class="tx-hotel">{txt3}</td><td class="tx-hotel">{txt4}</td></tr>
        <tr><td> <img class="hotel" src={image3} /></td><td> <img class="hotel" src={image4} /></td></tr>
       </table>
    </div>
  );
}
