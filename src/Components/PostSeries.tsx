'use client';

import styles from './PostSeries.module.css';
import { FetchData } from '../app/interfaces/FetchData';

export default function PostSeries({ series }: FetchData) {
  const voteFormater = series.vote_average.toFixed(1);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
          alt={`image${series.name}`}
        />
        <h2 className={styles.text1}>{series.name}</h2>
        <p className={styles.text2}>⭐{voteFormater}</p>
      </div>
    </div>
  );
}
