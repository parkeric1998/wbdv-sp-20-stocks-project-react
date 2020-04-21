import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import debounce from "lodash/debounce";
import './StockSearchBarComponent.css';

const setUrl = debounce((history, newSearch) => history.push(`/search/${newSearch}`), 1000);

const StockSearchBarComponent = ({ searchTerm }) => {
  let history = useHistory();
  const [curSearch, setCurSearch] = useState(
    searchTerm
  );

  let handleChange = e => {
    const newSearch = e.target.value;
    setCurSearch(newSearch);
    setUrl(history, newSearch);
  };

  return (
    <div className="col-2" class="wrap">
      <div className="search">
        <input type="text" placeholder="Stock Ticker" class="searchTerm" onChange={handleChange} value={curSearch} />
      </div>
    </div>
  )
}
export default StockSearchBarComponent