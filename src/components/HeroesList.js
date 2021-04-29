import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeCharacterById } from "../actions";

class HeroesList extends Component {
  render() {
    //  console.log("props in hero list", this.props);
    return (
      <div>
        <h3>HeroesList</h3>
        <ul className="list-group">
          {this.props.heroes.map((h) => {
            return (
              <li key={h.id} className="list-group-item">
                <div className="list-item">{h.name}</div>
                <div
                  className="list-item right-button "
                  onClick={() => this.props.removeCharacterById(h.id)}
                >
                  x
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { heroes: state.heroes };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCharacterById }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
