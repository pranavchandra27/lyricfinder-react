import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <h5 className="text-white mx-auto">
          <i className="fas fa-play-circle mr-2"></i>LyricFinder
        </h5>
      </nav>
    );
  }
}

export default Navbar;
