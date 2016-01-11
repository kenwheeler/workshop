/*eslint-disable filenames/filenames */
import React from "react";
import { connect } from "react-redux";
import { searchProducts } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(searchProducts("shoes"));
  }
  render() {
    return <h1>It Works!</h1>;
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect((state) => state.products)(App);
