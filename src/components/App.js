import React, { Component } from "react";
import CharacterList from "./CharactersList";
import HeroesList from "./HeroesList";
import Stats from "./Stats";
import "../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Super Squad</h2>
        <div className="row">
          <div className="col-md-4">
            <CharacterList />
          </div>
          <div className="col-md-4">
            <HeroesList />
          </div>
          <div className="col-md-4">
            <Stats />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
