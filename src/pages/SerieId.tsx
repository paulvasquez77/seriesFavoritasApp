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

  const getColor = (value: number): string => {
    if (value <= 0) return 'grey';
    if (value <= 4) return '#663399';
    if (value >= 6 && value < 7) return '#cc3300';
    if (value >= 7 && value < 8) return '#ff9900';
    if (value >= 8 && value < 9) return '#00cc66';
    if (value >= 9) return '#006400';
    return 'grey';
  };

  const filterValidSeasons = (seasons: Seasons[]) => {
    const invalidNames = ['Especial', 'Especiales', '', null]; // Lista de nombres no válidos
    return seasons.filter(
      (season) => season.name && !invalidNames.includes(season.name)
    );
  };

  // Obtener temporadas válidas
  const validSeasons = filterValidSeasons(oneSerie?.seasons || []);

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
              {validSeasons.map((seasons: Seasons, i) => {
                const color = getColor(seasons.vote_average);
                return (
                  <div
                    key={seasons.id}
                    className={styles.seasonP}
                    style={{ backgroundColor: color }}
                  >
                    {seasons.vote_average === 0 ? '?' : 'S'}
                    {seasons.vote_average === 0 ? ' ' : `${i + 1}`}
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
