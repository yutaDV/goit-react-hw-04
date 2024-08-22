import css from './ImageCard.module.css'
const ImageCard = ({ image, onClick }) => (
  <div  onClick={onClick}>
    <img className={css.ImageCard} src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageCard;


