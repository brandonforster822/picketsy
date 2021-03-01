import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage"
import AccountPage from "./components/AccountPage"
import ListingPage from "./components/ListingPage"
import SearchPage from './components/SearchPage'
import CartPage from './components/CartPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Navigation isLoaded={isLoaded} />
            <HomePage />
          </Route>
          <Route path="/account">
            <Navigation isLoaded={isLoaded}/>
            <AccountPage />
          </Route>
          <Route path={`/listing/:id`}>
            <Navigation isLoaded={isLoaded}/>
            <ListingPage />
          </Route>
          <Route path={"/search/:id"}>
            <Navigation isLoaded={isLoaded}/>
            <SearchPage />
          </Route>
          <Route path="/cart">
            <Navigation isLoaded={isLoaded}/>
            <CartPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;