const ImageCard = ({ image }) => (
  <div>
    <img src={image.urls.small} alt={image.alt_description || 'Image'} />
  </div>
);

export default ImageCard;

