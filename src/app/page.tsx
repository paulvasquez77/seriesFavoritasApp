import Footer from '@/Components/Footer';
import NavBar from '@/Components/NavBar';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar></NavBar>
      <h1>Hola nuevas series</h1>
      <Footer></Footer>
    </div>
  );
}
