import React, { useEffect, useState } from "react"

const xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://booking.kai.id/api/stations2", true);
xhttp.send();
xhttp.onload = function() {
 // alert(this.responseText);
  const obj = JSON.parse(xhttp.responseText)
  }




