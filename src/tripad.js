import React, { useEffect, useState } from "react";
import logo from "./NO_IMG.png";
import './index.css';

export default function App_travel() {
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

  const fetchUrl = "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=tangerang";
  const fetchOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fe42a0e9a2mshefd25f7fb918353p1d354ejsn5f0600342088",
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
   
        var title=data.data[1].title;
       // alert(data.data[1].title);
        if(title=="")
        {
            return;
        }
       for(a=1;a<5;a++)
       {
            if (data.data[a].image == null) 
            {

             if(a==1)
             {
                 setImage1(logo);
                 setTxt1("");
             }
             if(a==2)
             {
                 setImage2(logo);
                 setTxt2("");
             }
             if(a==3)
             {
                 setImage3(logo);
                 setTxt3("");
             }
             if(a==4)
             {
                 setImage4(logo);
                 setTxt4("");
             }


            
            } else {
            image_temp = data.data[a].image.urlTemplate;
            image_temp1 = image_temp.replace("{width}", "100");
            image_temp2 = image_temp1.replace("{height}", "100");

            if(a==1)
            {
                setImage1(image_temp2);
                 title=data.data[a].title;
                 title=title.replace("<b>","");
                 title=title.replace("</b>","");
                 setTxt1(title);
            }
            if(a==2)
            {
                setImage2(image_temp2);
                 title=data.data[a].title;
                 title=title.replace("<b>","");
                 title=title.replace("</b>","");
                 setTxt2(title);
            }
            if(a==3)
            {
                setImage3(image_temp2);
                 title=data.data[a].title;
                 title=title.replace("<b>","");
                 title=title.replace("</b>","");
                 setTxt3(title);
            }
            if(a==4)
            {
                setImage4(image_temp2);
                 title=data.data[a].title;
                 title=title.replace("<b>","");
                 title=title.replace("</b>","");
                 setTxt4(title);
            }
            console.log(image_temp2);
            }
        }

      });


  }

  fetchHotels();


  return (
    <div className="App" class="div-hotel">
      
      <button onClick={fetchHotels} class="button-search" >Search Hotels</button>

      <div class="row g-5 portfolio-container"  >
        
         <div class='col-xl-4 col-lg-6 col-md-6 portfolio-item first' >
                <div class='position-relative portfolio-box' style={{width: '20em'}} >
                    <img  src={image1} width="300px" />
                    <a class='portfolio-title shadow-sm' href=''>
                        <p class="h4 text-uppercase">Hotel</p>
                        <span class='text-body'><i class='fa fa-map-marker-alt text-primary me-2'></i>{txt1}</span>
                    </a>
                    <a class='portfolio-btn' href='img/portfolio-3.jpg' data-lightbox='portfolio'>
                        <i class='bi bi-plus text-white'></i>
                    </a>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 portfolio-item second">
                <div class="position-relative portfolio-box" style={{width: '20em'}}>
                <img  src={image2} width="300px" />
                    <a class="portfolio-title shadow-sm" href="">
                        <p class="h4 text-uppercase">HOTEL</p>
                        <span class="text-body"><i class="fa fa-map-marker-alt text-primary me-2"></i>{txt2}</span>
                    </a>
                    <a class="portfolio-btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                        <i class="bi bi-plus text-white"></i>
                    </a>
                </div>
            </div>

            <div class='col-xl-4 col-lg-6 col-md-6 portfolio-item first' >
                <div class='position-relative portfolio-box' style={{width: '20em'}} >
                    <img  src={image2} width="300px" />
                    <a class='portfolio-title shadow-sm' href=''>
                        <p class="h4 text-uppercase">Hotel</p>
                        <span class='text-body'><i class='fa fa-map-marker-alt text-primary me-2'></i>{txt2}</span>
                    </a>
                    <a class='portfolio-btn' href='img/portfolio-3.jpg' data-lightbox='portfolio'>
                        <i class='bi bi-plus text-white'></i>
                    </a>
                </div>
            </div>


        </div>
        
    </div>
  );
}
