import { useState } from 'react';
import { fullData } from '../utils/fetchData';
import styles from './CenterTexts.module.css';
import Layout from './Layout';
import PostSeries from './PostSeries';

export default function CenterTexts() {
  const [page, setPage] = useState<number>(1);

  const moreContent = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const { postSeries, loading } = fullData(page);

  return (
    <Layout>
      <div className={styles.centerTexts}>
        <h1 className={styles.title}>
          Explorar episodios mediante gráficos de audiencia
        </h1>
        <p className={styles.text}>
          Sumérgete en los altibajos, descubre joyas ocultas y traza tu ruta de
          atracones por el cautivador mundo de la televisión, ¡todo de un
          vistazo!
        </p>

        <div className={styles.formControl}>
          <input
            type="text"
            placeholder="Busca un programa.."
            className={`${styles.input} ${styles.inputAlt}`}
          />
          <span
            className={`${styles.inputBorder} ${styles.inputBorderAlt}`}
          ></span>
        </div>

        <div className={styles.cards}>
          {postSeries.map((series) => (
            <PostSeries key={series.id} series={series} />
          ))}
        </div>

        <div className={styles.containerButton}>
          <button
            onClick={moreContent}
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Cargar más'}
          </button>
        </div>
      </div>
    </Layout>
  );
}
