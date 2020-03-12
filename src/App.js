import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import StockSearchContainer from "./containers/StockSearchContainer";
import HomePageComponent from "./components/HomePageComponent";


function App() {
  return (
    <Switch>
      <Route path="/search/:searchTerm?"
             render={(props) =>
               <StockSearchContainer {...props}
                                     searchTerm={props.match.params.searchTerm}
               />
             }
      />
      <Route path="/">
        <HomePageComponent/>
      </Route>
    </Switch>
  );
}

export default App;
