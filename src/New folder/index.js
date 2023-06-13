import React from 'react';
import ReactDOM from 'react-dom/client';

import App_gempa from './gempa';
import App_travel from './tripad';
import App_resto from './RESTO';
//import App_rm from './RM';


const td_gempa = ReactDOM.createRoot(document.getElementById('td_gempa'));
const td_hotel = ReactDOM.createRoot(document.getElementById('td_hotel'));
const tda_wisata= ReactDOM.createRoot(document.getElementById('td_wisata'));
//const tda_rm= ReactDOM.createRoot(document.getElementById('td_rm'));



tda_wisata.render(
  <React.StrictMode>
    <App_resto />
  </React.StrictMode>
);

td_hotel.render(
  <React.StrictMode>
    <App_travel />
  </React.StrictMode>
);

td_gempa.render(
  <React.StrictMode>
    <App_gempa />
  </React.StrictMode>
);

