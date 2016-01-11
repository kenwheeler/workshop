/*global window */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistState } from "redux-devtools";
import DevTools from "../containers/DevTools";

import rootReducer from "../reducers";

const middleware = [thunk];

let finalCreateStore;

if (process.env.NODE_ENV === "production") {
  finalCreateStore = applyMiddleware(...middleware)(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&]+)\b/
      )
    )
  )(createStore);
}

const configureStore = function (initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(require("../reducers"))
    );
  }

  return store;
};

export default configureStore;
