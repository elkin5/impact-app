import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchImpact from './component/SearchImpact';
import WeatherData from './component/TestComp1';


function App() {
  return (
    <div className="container">
      <br></br>
      <SearchImpact></SearchImpact> 
    </div>
  );
}

export default App;

/* <div className="App">
        <h1>Impact App</h1>
      </div> <WeatherData></WeatherData
       */