import React, { Component } from "react";
import { connect } from "react-redux";
class Stats extends Component {
  strength() {
    let strength = 0;
    this.props.heroes.forEach((element) => {
      strength += element.strength;
    });
    return strength;
  }
  intelligence() {
    let intelligence = 0;
    this.props.heroes.forEach(
      (element) => (intelligence += element.intelligence)
    );
    return intelligence;
  }
  speed() {
    let speed = 0;
    this.props.heroes.forEach((element) => (speed += element.speed));
    return speed;
  }
  render() {
    return (
      <div>
        <h3>Stats</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength: </b> {this.strength()}
          </li>
          <li className="list-group-item">
            <b>Overall Intelligence: </b> {this.intelligence()}
          </li>
          <li className="list-group-item">
            <b>Overall Speed: </b> {this.speed()}
          </li>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}
export default connect(mapStateToProps, null)(Stats);
