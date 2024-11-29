import styles from './CenterTexts.module.css';
import DataSeries from './DataSeries';
import Layout from './Layout';

export default function CenterTexts() {
  function moreContent() {
    console.log('ejecutandome');
  }

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
          <DataSeries />
        </div>

        <div className={styles.containerButton}>
          <button onClick={moreContent} className={styles.button}>
            Cargar más
          </button>
        </div>
      </div>
    </Layout>
  );
}
