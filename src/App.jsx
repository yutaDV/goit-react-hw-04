
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './services/api';
import css from './App.module.css'; 

Modal.setAppElement('#root'); // Adjust the selector if needed

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(''); 

  const handleSearch = async (newQuery) => {
    setIsLoading(true);
    setError(null);
    setPage(1);
    setQuery(newQuery); 
    try {
      const data = await fetchImages(newQuery);
      setImages(data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const newPage = page + 1;
      const data = await fetchImages(query, newPage); 
      if (data.length === 0) {
        setError('No more images found.');
        return;
      }
      setImages((prevImages) => [...prevImages, ...data]);
      setPage(newPage);
    } catch (err) {
      setError('Failed to load more images');
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery
        images={images}
        isLoading={isLoading}
        error={error}
        onLoadMore={handleLoadMore}
        onImageClick={openModal} 
      />
       <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            border: 'none',
            background: 'transparent',
          }
        }}
      >
        {modalImage && (
          <img src={modalImage.urls.regular} alt={modalImage.alt_description} />
        )}
      </Modal>
    </div>
  );
};

export default App;
