import styles from './PostSeries.module.css';
import { FetchData } from '../interfaces/FetchData';
import { Link } from 'react-router-dom';

export default function PostSeries({ series }: FetchData) {
  const voteFormater = series.vote_average.toFixed(1);

  return (
    <Link to={`/programa/${series.id}`} className={styles.container}>
      <p className={styles.card}>
        <div className={styles.card2}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
            alt={`image${series.name}`}
          />
          <h2 className={styles.text1}>{series.name}</h2>
          <p className={styles.text2}>⭐{voteFormater}</p>
        </div>
      </p>
    </Link>
  );
}
