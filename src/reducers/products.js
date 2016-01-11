import * as types from "../actions";

const products = (state = {
  loading: false,
  products: [],
  err: null
}, action) => {
  switch (action.type) {
  case types.REQUEST_PRODUCTS:
    return Object.assign({}, state, {
      loading: true,
      err: null
    });
  case types.RECEIVE_PRODUCTS:
    return Object.assign({}, state, {
      loading: false,
      products: action.products,
      err: null
    });
  case types.REQEUST_ERROR:
    return Object.assign({}, state, {
      loading: false,
      err: action.err
    });
  default:
    return state;
  }
};

export default products;
