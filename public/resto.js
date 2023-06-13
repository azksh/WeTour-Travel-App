  function resto() {
        const fetchUrl = "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=tangerang";
        
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


       // alert(data.data[0].localizedName);
       // localizedAdditionalNames.longOnlyHierarchy

        var err_ttap=0;
        //====================error trap========================
        if(err_ttap==0)
        {
                try {
                   var title=data.data[0].localizedName;
                } catch (error) {
                    return;
                }
        }
        //=====================================================

       

        var img_src="";
        var lokasi="";
        var pass=0;
        for(a=0;a<3;a++)
        {
         
            if(data.data[a]==null)
            {
                return;
            }
           
          pass++;
          if(data.data[a].thumbnail==null)
          {
              //return;
              pass=0;
          }
          else
          {
              if(data.data[a].thumbnail.photoSizeDynamic==null)
              {
                  //return;
                  pass=0;
              }
              else
              {
                if(data.data[a].thumbnail.photoSizeDynamic.urlTemplate==null)
                {
                    //return;
                    pass=0;
                }
              }

          }

          if (pass>0) 
          {
           
                if(data.data[a]== null) 
                {
                    if(document.getElementById("dvd-"+(1+a))!=undefined)
                    {
                        document.getElementById("dvd-"+(1+a)).style.display="none";
                        document.getElementById("imgzd-"+(1+a)).src="";
                    }
                }
                else
                {
                  img_src =(data.data[a].thumbnail.photoSizeDynamic.urlTemplate);
                  img_src = img_src.replace("{width}", "300");
                  img_src = img_src.replace("{height}", "300");
                 // alert(img_src);
                  if(document.getElementById("dvd-"+a)!=undefined)
                      {
                          document.getElementById("dvd-"+(1+a)).style.display="";
                          document.getElementById("imgzd-"+(1+a)).src=img_src;
                          //alert(img_src);
                          lokasi=data.data[a].localizedName;
                          lokasi=lokasi + " , "+(data.data[a].localizedAdditionalNames.longOnlyHierarchy);
                          document.getElementById("addrd-"+(1+a)).innerHTML=lokasi;
                      }
                      else
                      {
                        //alert(a);
                      }

                  


                }
          }
          else
          {
                if(document.getElementById("dvd-"+(1+a_)!=undefined))
                {
                    document.getElementById("dvd-"+(1+a)).style.display="none";
                    document.getElementById("imgzd-"+(1+a)).src="";
                    document.getElementById("addrd-"+(1+a))
                }
          }

        }

      });


  }

  resto();
