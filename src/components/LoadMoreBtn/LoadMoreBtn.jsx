import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => (
  <div className={css.loadMoreContainer}>
  <button  className = {css.loadMoreBtn} type="button" onClick={onClick}>
    Load more
    </button>
    </div>
);

export default LoadMoreBtn;
