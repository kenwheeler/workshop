export const REQUEST_PRODUCTS = "REQUEST_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const REQUEST_ERROR = "REQUEST_ERROR";

export const requestProducts = () => {
  return {
    type: REQUEST_PRODUCTS
  };
};

export const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products: products.items
  };
};

export const requestError = (err) => {
  return {
    type: REQUEST_ERROR,
    err
  };
};

export const searchProducts = (query) => {
  const URL = "http://localhost:1337/api/search/" + query + "&numItems=20";
  return (dispatch) => {
    dispatch(requestProducts());
    fetch(URL)
    .then((response) => response.json())
    .then((json) => dispatch(receiveProducts(json)))
    .catch((err) => dispatch(requestError(err)));
  };
};
