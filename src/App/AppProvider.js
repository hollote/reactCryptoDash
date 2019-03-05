import React from 'react';
import _ from 'lodash';
import cc from 'cryptocompare';

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVisit: true,
      page: 'dashboard',
      prices: [],
      favorites: ['BTC', 'ETH', 'DOGE', 'XMR'],
      ...this.savedSettings(),
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      setFilteredCoins: this.setFilteredCoins
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
  };

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES && favorites.indexOf(key) === -1) {
      favorites.push(key);
      this.setState({favorites});
    }
  };

  removeCoin = key => {
    let favorites = [...this.state.favorites];
    this.setState({favorites: _.pull(favorites, key)});
  };

  isInFavorites = key => _.includes(this.state.favorites, key);

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  };

  fetchPrices = async () => {
    debugger;
    if (this.state.firstVisit) {
      return;
    }
    let prices = await this.prices();
    this.setState({prices});
  };

  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
        returnData.push(priceData);
      } catch (e) {
        console.warn('Fetch price error: ', e);
      }
    }
    return returnData;
  };

  setPage = page => this.setState({page});

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return {page: 'settings', firstVisit: true};
    }
    let {favorites} = cryptoDashData;
    return {favorites, firstVisit: false};
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    }, () => this.fetchPrices());
    localStorage.setItem('cryptoDash', JSON.stringify({favorites: this.state.favorites}));
  };

  setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}