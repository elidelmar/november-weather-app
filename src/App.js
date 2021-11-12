import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Charlotte" />
        <footer>
          <a href="https://github.com/elidelmar/november-weather-app">Open Source Code on Github built by Elisabeth Marquez</a>
          {""}
        </footer>
      </div>
    </div>
  );
}