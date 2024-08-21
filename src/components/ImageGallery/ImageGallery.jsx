// ImageGallery.jsx
import ImageCard from '../ImageCard/ImageCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const ImageGallery = ({ images, isLoading, error, onLoadMore }) => {
  if (error) return <ErrorMessage message={error} />;
  if (isLoading) return <Loader />;

  return (
    <div>
      {images.length > 0 && (
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
      {!isLoading && images.length > 0 && <LoadMoreBtn onClick={onLoadMore} />}
    </div>
  );
};


export default ImageGallery;
