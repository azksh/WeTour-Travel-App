
    function fetchHotelsp() {
  
  
  
    const fetchUrl = "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=tangerang";
    const fetchOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "86d1c1b6f5msh27045e4766fa411p1f772cjsn524cdd0bf575",
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
      },
    };
  
   
  
  
      var urlku=fetchUrl;
      
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
                          document.getElementById("dv-"+a).style.display="none";
                          document.getElementById("imgz-"+a).src=image_temp2;
                          alert(image_temp2);
                          title=data.data[a].title;
                          title=title.replace("<b>","");
                          title=title.replace("</b>","");
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
  