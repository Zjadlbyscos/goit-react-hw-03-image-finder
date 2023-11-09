import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

const apiKey = '39267402-49695b078cc30e5676dab55fe';
const apiUrl = 'https://pixabay.com/api/';

 const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [largeImageUrl, setLargeImageUrl] = useState(null);


  const getImages = async (query, page) => {
    setIsLoading(true);

    try {
      const response = await axios.get( apiUrl, {
        params: {
          q: query,
          page: page,
          key: apiKey,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });
      setImages(prevImages => [...prevImages, ...response.data.hits]);
      setIsLoading(false);
      setHasMore(response.data.hits.length > 0);
    } catch (error) {
      setIsLoading(false);
      setError('Error fetching images');
    }
  };

  const handleSubmit = inputValue => {
    setQuery(inputValue);
    setCurrentPage(1);
    setImages([]);
  };

  const loadMoreImages = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const openModal = largeImageUrl => {
    setLargeImageUrl(largeImageUrl);
  };

  const closeModal = () => {
    setLargeImageUrl(null);
  };

  // useEffect(() => {
  //   getImages('flower', 1);
  // }, []);

  useEffect(() => {
    if (query) {
      getImages(query, currentPage);
    }
  }, [query, currentPage]);


return (
  <div className="App">
<Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      <Button onClick={loadMoreImages} hasMore={hasMore} />
      {largeImageUrl && (
        <Modal largeImageUrl={largeImageUrl} onClose={closeModal} />
      )}
  </div>
);
};

export default App;