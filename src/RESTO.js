import React, { useEffect, useState } from "react";
import logo from "./NO_IMG.png";
import './index.css';

export default function App_resto() {
  const [txt1, setTxt1] = useState("");
  const [txt2, setTxt2] = useState("");
  const [txt3, setTxt3] = useState("");
  const [txt4, setTxt4] = useState("");


  const [style1, setstyle1] = useState("");
  const [style2, setstyle2] = useState("");
  const [style3, setstyle3] = useState("");
  const [style4, setstyle4] = useState("");

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");


  var a=0;
  let image_temp;
  let image_temp1;
  let image_temp2;

  const fetchUrl = "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=tangerang";
  const fetchOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "86d1c1b6f5msh27045e4766fa411p1f772cjsn524cdd0bf575",
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



        var err_ttap=0;
        //====================error trap========================
        if(err_ttap==0)
        {
                try {
                   var title=data.data[1].title;
                } catch (error) {
                    return;
                }
        }
        //=====================================================




        var resid="";
        var pass=0;
        for(a=1;a<5;a++)
        {



          pass++;
          if(data.data[a]==null)
          {
              //return;
              pass=0;
          }
          else
          {
              if(data.data[a].image==null)
              {
                  //return;
                  pass=0;
              }
              else
              {
                  if(data.data[a].image.urlTemplate==null)
                  {
                     // return;
                     pass=0;
                  }
              }
          }

          if (pass>0) 
          {
                if(data.data[a]== null) 
                {
                  if(a==1)
                  {
                      setImage1(logo);
                      setTxt1("");
                      setstyle1("none");
                  }
                  if(a==2)
                  {
                      setImage2(logo);
                      setTxt2("");
                      setstyle2("none");
                  }
                  if(a==3)
                  {
                      setImage3(logo);
                      setTxt3("");
                      setstyle3("none");
                  }
                  if(a==4)
                  {
                      setImage4(logo);
                      setTxt4("");
                      setstyle4("none");
                  }
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

        }

      });


  }

  fetchHotels();


  return (
    <div  className="App" class="div-hotel">
      
    <button onClick={fetchHotels} class="button-search" >Search Hotels</button>

    <div class="row g-5 portfolio-container"  >
      
       <div class='col-xl-4 col-lg-6 col-md-6 portfolio-item first' style={{display:style1}} >
              <div class='position-relative portfolio-box' style={{width: '20em'}} >
                  <img  src={image1} width="300px" />
                  <a class='portfolio-title shadow-sm' href=''>
                      <span class='text-body'><i class='fa fa-map-marker-alt text-primary me-2'></i>{txt1}</span>
                  </a>
                  <a class='portfolio-btn' href='img/portfolio-3.jpg' data-lightbox='portfolio'>
                      <i class='bi bi-plus text-white'></i>
                  </a>
              </div>
          </div>

          <div class="col-xl-4 col-lg-6 col-md-6 portfolio-item second" style={{display:style2}} >
              <div class="position-relative portfolio-box" style={{width: '20em'}}>
              <img  src={image2} width="300px" />
                  <a class="portfolio-title shadow-sm" href="">
                       <span class="text-body"><i class="fa fa-map-marker-alt text-primary me-2"></i>{txt2}</span>
                  </a>
                  <a class="portfolio-btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                      <i class="bi bi-plus text-white"></i>
                  </a>
              </div>
          </div>

          <div class='col-xl-4 col-lg-6 col-md-6 portfolio-item first'  style={{display:style3}} >
              <div class='position-relative portfolio-box' style={{width: '20em'}} >
                  <img  src={image3} width="300px" />
                  <a class='portfolio-title shadow-sm' href=''>
                      <span class='text-body'><i class='fa fa-map-marker-alt text-primary me-2'></i>{txt3}</span>
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
