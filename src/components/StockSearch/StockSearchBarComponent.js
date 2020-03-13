import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import debounce from "lodash/debounce";

const setUrl = debounce((history, newSearch) => history.push(`/search/${newSearch}`), 1000);

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