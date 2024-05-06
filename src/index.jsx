import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// let taskStorage=localStorage.getItem('Tasks');
// let taskStorage=[];

// let task=document.getElementById('taskName');
// let deadLine=document.getElementById('deadLine')

// taskStorage.push({task,deadLine})
// let a=JSON.stringify(taskStorage)

// localStorage.setItem('Tasks',a)