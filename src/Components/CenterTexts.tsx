import styles from './CenterTexts.module.css';
import { Input } from './ui/input';

export default function CenterTexts() {
  return (
    <>
      <h1 className={styles.title}>
        Explorar episodios mediante gráficos de audiencia
      </h1>
      <p className={styles.text}>
        Sumérgete en los altibajos, descubre joyas ocultas y traza tu ruta de
        atracones por el cautivador mundo de la televisión, ¡todo de un vistazo!
      </p>
      <Input type="text" placeholder="Ingrese un texto" />
    </>
  );
}
