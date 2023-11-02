import React, { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

class App extends Component {
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
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], page: 1 }, () => {
        this.fetchImages();
      });
    }
  }

  componentWillUnmount() {
    // Cleanup or additional actions before unmounting
    window.removeEventListener('keydown', this.handleKeyDown);
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

      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearchSubmit = query => {
    this.setState({ query });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  handleOpenModal = largeImageURL => {
    this.setState({ showModal: true, modalImageURL: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, modalImageURL: '' });
  };
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.handleCloseModal();
    }
  };
  render() {
    const { images, isLoading, showModal, modalImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onOpenModal={this.handleOpenModal} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal
            largeImageURL={modalImageURL}
            onCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
