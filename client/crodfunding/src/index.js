import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import { Sepolia } from "@thirdweb-dev/chains";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider
      activeChain={ Sepolia }
      clientId="52b7512d5486b13d3a80b60607f707a7" // You can get a client id from dashboard settings
    >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)