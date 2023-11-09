import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImageURL, setModalImageURL] = useState('');

  const apiKey = '39267402-49695b078cc30e5676dab55fe';
  const apiUrl = 'https://pixabay.com/api/';

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiUrl, {
        params: {
          key: apiKey,
          q: query,
          page,
          per_page: 12,
          image_type: 'photo',
          orientation: 'horizontal',
        },
      });

      setImages(prevImages => [...prevImages, ...response.data.hits]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query);
    }
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line 
  }, []);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    fetchImages();
  };

  const handleOpenModal = largeImageURL => {
    setModalImageURL(largeImageURL);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalImageURL('');
    setShowModal(false);
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onOpenModal={handleOpenModal} />
          <Button onClick={handleLoadMore} />
        </>
      )}
      {showModal && (
        <Modal largeImageURL={modalImageURL} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
