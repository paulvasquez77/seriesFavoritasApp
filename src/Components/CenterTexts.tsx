import styles from './CenterTexts.module.css';
import DataSeries from './DataSeries';
import { Input } from './ui/input';
import Layout from './Layout';

export default function CenterTexts() {
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
        <Input type="text" placeholder="Busca un programa..." />

        <div className={styles.cards}>
          <DataSeries />
        </div>
      </div>
    </Layout>
  );
}
