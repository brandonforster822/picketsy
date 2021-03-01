import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session'
import listingReducer from './listing'
import reviewReducer from './review'
import userReducer from './users'
import cartReducer from './cart'

const rootReducer = combineReducers({
  session: sessionReducer,
  listing: listingReducer,
  reviews: reviewReducer,
  users: userReducer,
  cart: cartReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
