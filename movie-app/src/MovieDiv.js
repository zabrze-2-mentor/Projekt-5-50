import React from 'react'

class MovieDiv extends React.Component{
    render() {
        return <div className="container-fluid" id="movieDiv">
            <div className="row">
            <div className="col-2">
                <img width="100" src={this.props.movie.poster_src}></img>
            </div>
            <div className="col-10">
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.overview}</p>
            </div>
            </div>
            <button type="button" className="btn btn-dark offset-8">Więcej</button>
        </div>
    }
}

export default MovieDiv