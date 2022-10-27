import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const x = 11;
let text = "This is my first react ";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1> ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

