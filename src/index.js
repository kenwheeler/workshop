/*global document */
// React Core
import React from "react";
import ReactDOM from "react-dom";
// React Redux
import { Provider } from "react-redux";
// Redux Devtools
import DevTools from "./containers/DevTools";

import App from "./containers/App";
import configureStore from "./store";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <App />
        <DevTools />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById("root"));
