import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import data from './data.json';
import CardList from './components/CardList';
import Quotes from "./components/Quotes";

//import Gambar from './assets/img/nil.gif';
const quotes = "Thankyou for your coming";
const tambahan ="Feel Good";

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList data={data} />
    <Quotes author="Eat Good" quotes={quotes} tambahan={tambahan}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
