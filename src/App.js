import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import StockSearchContainer from "./containers/StockSearchContainer";
import HomePageComponent from "./components/HomePage/HomePageComponent";
import StockDetailsContainer from "./containers/StockDetailsContainer";
import LoginComponent from "./components/Login/LoginComponent";
import RegisterComponent from "./components/Register/RegisterComponent";
import ProfileComponent from "./components/Profile/ProfileComponent";
import PrivacyPolicyComponent from "./components/PrivacyPolicyComponent";


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
      <Route path="/login" component={LoginComponent}>
      </Route>

      <Route path="/register" component={RegisterComponent}>
      </Route>

      <Route path="/profile" component={ProfileComponent}>
      </Route>
      <Route path="/privacy">
        <PrivacyPolicyComponent />
      </Route>
      <Route path="/" component={HomePageComponent}>
      </Route>
    </Switch>
  );

}

export default App;
