import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Loader.css";

export class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}
&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });
        return Axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}
&apikey=${process.env.REACT_APP_MM_KEY}`);
      })
      .then(res => {
        this.setState({ track: res.data.message.body.track });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { track, lyrics } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return (
        <div className="d-flex flex-column align-items-center">
          <h3 className="my-3">Loading Lyrics...</h3>
          <div className="loader"></div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-sm btn-dark my-4">
            Go back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="card-title">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{" "}
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
