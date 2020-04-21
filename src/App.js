import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import StockSearchContainer from "./containers/StockSearchContainer";
import HomePageComponent from "./components/HomePageComponent";
import StockDetailsContainer from "./containers/StockDetailsContainer";
import LoginComponent from "./components/login/LoginComponent";
import RegisterComponent from "./components/register/RegisterComponent";
import ProfileComponent from "./components/profile/ProfileComponent";


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
      <Route path="/details/:symbol"
             render={(props) =>
               <StockDetailsContainer {...props}
                                      symbol={props.match.params.symbol}
               />
             }
      />
      <Route path="/login">
        <LoginComponent/>
      </Route>

      <Route path="/register">
        <RegisterComponent/>
      </Route>

      <Route path="/profile">
        <ProfileComponent/>
      </Route>
      <Route path="/">
        <HomePageComponent />
      </Route>
    </Switch>
  );

}

export default App;
