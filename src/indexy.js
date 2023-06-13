import React from 'react';
import ReactDOM from 'react-dom/client';

import App_gempa from './gempa';
import App_travel from './tripad';
import App_resto from './RESTO';
import App_rm from './RM';
import App_KAI from './KAI';

const td_kai= ReactDOM.createRoot(document.getElementById('td_kai'));


td_kai.render(
  <React.StrictMode>
    <App_KAI />
  </React.StrictMode>
);




