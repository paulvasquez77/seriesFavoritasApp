import styles from './page.module.css';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import CenterTexts from '@/Components/CenterTexts';
import DataSeries from '@/Components/DataSeries';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <div className={styles.centerTexts}>
        <CenterTexts />
      </div>
      <div className={styles.cards}>
        <DataSeries />
      </div>
      <Footer></Footer>
    </div>
  );
}
