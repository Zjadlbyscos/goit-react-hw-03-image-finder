import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';


export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    modalImageURL: '',
  };

  apiKey = '39267402-49695b078cc30e5676dab55fe';
  apiUrl = 'https://pixabay.com/api/';


  render() {
    const { images, isLoading, showModal, modalImageURL } = this.state;

    return (
      <Searchbar onSubmit={this.handleSearchSubmit} />
    
    )

}
}