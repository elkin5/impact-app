import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tree } from './component/JsTree';
import SearchImpact from './component/SearchImpact';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Impact App</h1>
      </div>  
      <SearchImpact></SearchImpact>   
      <Tree></Tree>
    </div>
  );
}

export default App;
