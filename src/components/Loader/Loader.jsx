
import { Rings } from 'react-loader-spinner'; 
import css from './Loder.module.css'

const Loader = () => (
  <div className={css.loader}>
    <Rings color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
