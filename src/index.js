import React from 'react';
import App from './Pages/AppPage/App';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router } from 'react-router-dom';

//React Router provides several components used to conditionally render our app's components 
//based upon the path of the URL in the address bar
// Import the top-level BrowserRouter component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


// Note: Those components named ending with .Provider
// are using React's Context API to provide info to components down in the component hierarchy 
// without having to pass that info as props.

