import React from "react";
import ReactDom from "react-dom";

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const link = React.createElement("a", { href: "reactjs.org" }, "ссылочка");

const jsxLink = <a href="reactjs.org">ссылочка</a>;

console.log(link);
console.log(jsxLink);

ReactDom.render(link, document.getElementById("root"));
