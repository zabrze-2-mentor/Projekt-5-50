import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container-fluid" id="header">
       <div className="row">
        <div className="col-3 col-sm-2">
          <img src="movie_logo.png" id="logo"></img>
        </div>
        <div className="col-9 col-sm-4">
          <h1>The bigest movie search engine!</h1>
        </div>
        <div className="col-sm-6">
        </div>
       </div>
    </div>
  );
}

export default App;
