import React from "react";
import { Link } from "react-router-dom";
import "./HomePageComponent.css"

const HomePageComponent = () =>
  <div className="home-page">
    <h1 className="display-4">Stock Home Page</h1>
    <img
      src="https://www.forecast-chart.com/images/historical/nasdaq-100-may.gif"
      height="400"
      width="700"
    />
    <div>
      <Link to="/privacy">
        <i className="fa fa-3x fa-file">
          Privacy Policy
        </i>
      </Link>
    </div>
    <div>
      <Link to="/register">
        <i className="fa fa-3x fa-file">
          Register
        </i>
      </Link>
    </div>
    <div>
      <Link to="/login">
        <i className="fa fa-3x fa-file">
          Login
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
    <div>
      <Link to="/profile">
        <i className="fa fa-3x fa-file">
          Profile
        </i>
      </Link>
    </div>
    <div>
      <Link to="/details/LinkAPL">
        <i className="fa fa-3x fa-file">
          Details
        </i>
      </Link>
    </div>


  </div>

export default HomePageComponent;
