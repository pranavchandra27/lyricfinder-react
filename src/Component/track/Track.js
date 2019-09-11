import React from "react";
import { Link } from "react-router-dom";

export default function Track(props) {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="text-truncate">
            <i className="fas fa-play mr-2"></i> {track.track_name}{" "}
          </h5>
          <hr />
          <p>
            <strong>Artist</strong>: {track.artist_name}
          </p>
          <p>
            <strong>Album</strong>: {track.album_name}
          </p>
          <Link
            to={`lyrics/tracks/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            Lyrics <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
