import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });
        this.setState({ trackTitle: "" });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          console.log(value);
          return (
            <div className=" jumbotron bg-dark text-white py-5 text-center my-3">
              <h1 className="display-3">
                <i className=" mr-3 fas fa-headphones-alt"></i>
                Search For A Song
              </h1>
              <hr className="my-3" />
              <p className="lead">
                <i className="fas fa-music"></i> Find Lyrics For Your Favorite
                Song
              </p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
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
                <button
                  type="submit"
                  className="btn btn-lg px-5 btn-outline-light"
                >
                  <i className="fas fa-play mr-2"></i>Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
