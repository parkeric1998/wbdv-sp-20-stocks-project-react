import React from "react";
import { Link } from "react-router-dom";

const HomePageComponent = () =>
  <div>
    <h1>HOME</h1>
    <Link to="/search">Search</Link>
    <Link to="/search/aa">Specific Serach</Link>
  </div>

export default HomePageComponent;