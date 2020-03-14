
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import './StockSearchBarComponent.css';


const StockSearchBarComponent = ({searchTerm}) => {
    let history = useHistory();
    return <div className="col-2"
                class="wrap">
      <div class ="search">
        <input type="text"
               placeholder="Stock Ticker"
               class ="searchTerm"
               onChange={e => history.push(`/search/${e.target.value}`)} value={searchTerm}/>
      </div>

    </div>
}