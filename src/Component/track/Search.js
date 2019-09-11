import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className=" jumbotron bg-dark text-white py-5 text-center my-3">
        <h1 className="display-3">
          <i className=" mr-3 fas fa-headphones-alt"></i>
          Search For A Song
        </h1>
        <hr className="my-3" />
        <p className="lead">
          <i className="fas fa-music"></i> Find Lyrics For Your Favorite Song
        </p>
        <form>
          <div className="form-group d-flex flex-row justify-content-center">
            <input
              className="form-control"
              type="text"
              placeholder="Song Title.."
              name="trackTitle"
              value={this.state.trackTitle}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-lg px-5 btn-outline-light">
            <i className="fas fa-play mr-2"></i>Get Track Lyrics
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
