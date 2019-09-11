import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./Component/layout/Index";
import Navbar from "./Component/layout/Navbar";
import { Provider } from "./Context";
import Lyrics from "./Component/track/Lyrics";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/Lyrics/tracks/:id" component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
