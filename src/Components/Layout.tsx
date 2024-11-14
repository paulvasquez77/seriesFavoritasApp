import Footer from './Footer';
import NavBar from './NavBar';
import styles from './Layout.module.css';
import { ReactNode } from 'react';
// import CenterTexts from '@/Components/CenterTexts';
// import DataSeries from '@/Components/DataSeries';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
