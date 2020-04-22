import React from "react";
import { Link } from "react-router-dom";
import "./HomePageComponent.css"
import MyStocksComponent from "../MyStocksComponent";

const HomePageComponent = () =>
  <div className="home-page">
    <h1 className="display-4">Stock Home Page</h1>
    <img
      src="https://www.forecast-chart.com/images/historical/nasdaq-100-may.gif"
      height="400"
      width="700"
    />
    <div className="bg-light">
      <MyStocksComponent />
    </div>
    <div>
      <Link to="/privacy">
        <i className="fa fa-3x fa-file">
          Privacy Policy
        </i>
      </Link>
    </div>
    <div>
      <Link to="/search">
        <i className="fa fa-3x fa-search">
          Search
        </i>
      </Link>
    </div>
  </div>

export default HomePageComponent;
