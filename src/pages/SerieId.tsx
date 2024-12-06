import { useParams } from 'react-router-dom';
import Layout from '../Components/Layout';
import { useFetchOneData } from '../utils/useFetchOneData';
import styles from './SeriesId.module.css';
import { Seasons } from '../interfaces/FetchData';

export const SerieId = () => {
  const { id } = useParams();

  const numericId = id ? parseInt(id, 10) : undefined;

  if (numericId === undefined || isNaN(numericId)) {
    console.error('El ID proporcionado no es válido.');
    return <div>ID inválido</div>;
  }

  const { oneSerie, loading } = useFetchOneData(numericId);

  const voteFormater = oneSerie?.vote_average.toFixed(1);

  const colorScore = [{}];

  colorScore;

  return (
    <Layout>
      {loading && <div>Cargando...</div>}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500${oneSerie?.poster_path}`}
            alt={oneSerie?.name}
          />
          <p className={styles.vote}>⭐{voteFormater}</p>
          <p className={styles.title}>{oneSerie?.name}</p>
        </div>

        <section className={styles.section}>
          <div className={styles.rating}>
            <div className={styles.ratingItem}>
              <div
                className={`${styles.ratingCircle} ${styles.increible}`}
              ></div>
              <span>Increíble</span>
            </div>
            <div className={styles.ratingItem}>
              <div className={`${styles.ratingCircle} ${styles.genial}`}></div>
              <span>Genial</span>
            </div>
            <div className={styles.ratingItem}>
              <div className={`${styles.ratingCircle} ${styles.buen}`}></div>
              <span>Buen</span>
            </div>
            <div className={styles.ratingItem}>
              <div className={`${styles.ratingCircle} ${styles.regular}`}></div>
              <span>Regular</span>
            </div>
            <div className={styles.ratingItem}>
              <div className={`${styles.ratingCircle} ${styles.mal}`}></div>
              <span>Mal</span>
            </div>
            <div className={styles.ratingItem}>
              <div className={`${styles.ratingCircle} ${styles.basura}`}></div>
              <span>Basura</span>
            </div>
          </div>

          <div className={styles.season}>
            <div className={styles.seasonRow}>
              {oneSerie?.seasons?.map((seasons: Seasons, i) => {
                {
                  console.log(seasons);
                }
                return (
                  <div key={seasons.id} className={styles.seasonP}>
                    Temporada {i + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
