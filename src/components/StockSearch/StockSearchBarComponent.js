<<<<<<< HEAD
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

    </div>;
=======
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import debounce from "lodash/debounce";

const setUrl = debounce((history, newSearch) => history.push(`/search/${newSearch}`), 200);

const StockSearchBarComponent = ({ searchTerm}) => {
  let history = useHistory();
  const [curSearch, setCurSearch] = useState(
    searchTerm
  );

  let handleChange = e => {
    const newSearch = e.target.value;
    setCurSearch(newSearch);
    setUrl(history, newSearch);
  };

  return<input type="text" onChange={handleChange} value={curSearch} />;
<<<<<<< HEAD
>>>>>>> 0114da0f25f430ffe08cee6b64545091195cf78d
=======
>>>>>>> 0114da0f25f430ffe08cee6b64545091195cf78d
};


export default StockSearchBarComponent;

/*
class StockSearchBarComponent extends React.Component {
  state = {
    searchTerm: ''
  };

  updateSearchTerm = (e) => {
    const history = window.history;
    const searchTerm =  e.target.value;
    this.setState({
      searchTerm
    });
    history.push(`/search/${searchTerm}`)
  };

  render() {
    return<input onChange={this.updateSearchTerm} value={this.state.searchTerm} />;
  }
}

 */