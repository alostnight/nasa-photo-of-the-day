import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import PhotoofDay from "./components/PhotoofDay";
import NASA_seal from "./assets/NASA_seal.png"



function App() {
  return (
    <div className="App">
      <p>
      <div className="logo_container">
        <img className="logo" src={NASA_seal} alt="Nasa official seal" />
        <h1>NASA Photo of the Day</h1>
      </div>
      <PhotoofDay />
      </p>
    </div>
  );
}

export default App;