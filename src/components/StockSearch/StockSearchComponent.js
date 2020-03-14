import React from "react";
import StockSearchListComponent from "./StockSearchListComponent";
import StockSearchBarComponent from "./StockSearchBarComponent";
import 'font-awesome/css/font-awesome.min.css';

const StockSearchComponent = ({searchTerm}) => {
  return (
    <div>
        <div>

            <h1>
                <i className="fa fa-line-chart"></i>
                Search
            </h1>
            <StockSearchBarComponent searchTerm={searchTerm}/>
        </div>
      <StockSearchListComponent />
    </div>
  )
};


export default StockSearchComponent;