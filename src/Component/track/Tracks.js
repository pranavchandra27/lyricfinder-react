import React, { Component } from "react";
import { Consumer } from "../../Context";
import Track from "./Track";
import "./Loader.css";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return (
              <div className="d-flex flex-column align-items-center">
                <h3>Loading Tracks...</h3>
                <div className="loader"></div>
              </div>
            );
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
