import Footer from './Footer';
import NavBar from './NavBar';
import styles from './Layout.module.css';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
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
