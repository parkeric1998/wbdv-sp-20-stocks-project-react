import React from "react";
import {Link} from "react-router-dom";
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
        <a href="/register">
          <i className="fa fa-3x fa-file">
            Register
          </i>
        </a>
      </div>
        <div>
            <a href="/login">
                <i className="fa fa-3x fa-file">
                    Login
                </i>
            </a>
        </div>
        <div>
            <a href="/search">
                <i className="fa fa-3x fa-search">
                    Search
                </i>
            </a>
        </div>
        <div>
            <a href="/details/AAPL">
                <i className="fa fa-3x fa-file">
                    Details
                </i>
            </a>
        </div>


    </div>

export default HomePageComponent;
