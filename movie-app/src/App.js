import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import MovieDiv from './MovieDiv.js';


class App extends Component {
constructor(props){
  super(props)
  this.state= {}
  this.searchMethod();
}

searchMethod(title) {
  const urlString = "https://api.themoviedb.org/3/search/movie?api_key=03941088d290e31d7ce308f7347fb41f&query=" + title;
$.ajax({
  url: urlString,
  success: (searchResults) => {
    console.log("Fetched data successfully");
    const results = searchResults.results;
    var movieDivs = [];
    results.forEach((movie) => {
      movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
      const movieDiv = <MovieDiv movie={movie}/>;
      movieDivs.push(movieDiv);
    })

    this.setState({divs: movieDivs})
  },
  error: (xhr, status, err) => {
    console.error("Failure to fetch data");
  }
})
}

searchMovie(){
  const boundObject = this;
  const searchTerm = document.getElementById("input").value;
  boundObject.searchMethod(searchTerm);
}

render() {
  return (
    <div>
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
      <div className="input-group mb-3">
        <input type="text" className="form-control" id="input" placeholder="Tytuł filmu" aria-label="Tytuł filmu" aria-describedby="basic-addon2"></input>
          <div className="input-group-append">
              <button className="btn btn-outline-secondary" onClick={this.searchMovie.bind(this)} type="button">Szukaj</button>
          </div>
      </div>
    {this.state.divs}
    </div>
  );}
}

export default App;
