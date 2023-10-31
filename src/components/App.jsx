import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';


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

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], page: 1 }, () => {
        this.fetchImages();
      });
    }
  }
  fetchImages = async () => {
    this.setState({ isLoading: true });

    const { query, page } = this.state;

    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          key: this.apiKey,
          q: query,
          page,
          per_page: 12,
          image_type: 'photo',
          orientation: 'horizontal',
        },
      });

      this.setState((prevState) => ({
        images: [...prevState.images, ...response.data.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleSearchSubmit = (query) => {
    this.setState({ query });
  };
  
  render() {
    const { images, isLoading, showModal, modalImageURL } = this.state;

    return (
      <div>
      <Searchbar onSubmit={this.handleSearchSubmit} />
      <ImageGallery images={images} onOpenModal={this.handleOpenModal} />
      </div>
    )

}
}