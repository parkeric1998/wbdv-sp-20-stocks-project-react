import React from "react";
import StockSearchListComponent from "./StockSearchListComponent";
import StockSearchBarComponent from "./StockSearchBarComponent";

const StockSearchComponent = ({searchTerm}) => {
  return (
    <div>
      <h1>Search</h1>
      <StockSearchBarComponent searchTerm={searchTerm}/>
      <StockSearchListComponent />
    </div>
  )
};


export default StockSearchComponent;