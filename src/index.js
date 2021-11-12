import React from 'react';
import ReactDOM from 'react-dom';
import './dist/style.css';
import Banner from './dist/banner';
import Cart from './dist/cart';
import ShoppingList from './dist/shoppingList'

ReactDOM.render(
  <React.StrictMode>
  <div><Banner/><Cart/><ShoppingList/></div>
  </React.StrictMode>,
  document.getElementById('root')
);


// test
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
