
    function fetchHotelsp() {
  
  
  
    const fetchUrl = "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=tangerang";
    const fetchOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f9cee289acmsh70b47d900a8019ep10b9f8jsn7524114dfcd5",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
  
   
  
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
  
        
  
          var title=data.data[1].title;
          //alert(title);
          if(title=="")
          {
              return;
          }
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
                  if (data.data[a].image == null) 
                  {
                      if(document.getElementById("dv-"+a)!=undefined)
                      {
                          document.getElementById("dv-"+a).style.display="none";
                          document.getElementById("imgz-"+a).src="";
                          title=data.data[a].title;
                          title=title.replace("<b>","");
                          title=title.replace("</b>","");
                      }
                  
              
                  } 
                  else 
                  {
  
                      image_temp = data.data[a].image.urlTemplate;
                      image_temp1 = image_temp.replace("{width}", "300");
                      image_temp2 = image_temp1.replace("{height}", "300");
                      if(document.getElementById("dv-"+a)!=undefined)
                      {
                          document.getElementById("dv-"+a).style.display="";
                          document.getElementById("imgz-"+a).src=image_temp2;
                          //alert(image_temp2);
                          title=data.data[a].title;
                          title=title.replace("<b>","");
                          title=title.replace("</b>","");
                          document.getElementById("addr-"+a).innerHTML=title;
                      }
  
                  
                 }
  
             }
  
          }
  
          if(pass==0)
          {
              return;
          }
  
        });
  
  
    }
    fetchHotelsp();
  