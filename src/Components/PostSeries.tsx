'use client';

import styles from './PostSeries.module.css';

export default function PostSeries({ series }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
          alt={`image${series.name}`}
        />
        <h2>{series.name}</h2>
      </div>
    </div>
  );
}
