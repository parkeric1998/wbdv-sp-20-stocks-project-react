import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const StockSearchBarComponent = ({ searchTerm}) => {
  let history = useHistory();
  return<input type="text" onChange={e => history.push(`/search/${e.target.value}`)} value={searchTerm} />;
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