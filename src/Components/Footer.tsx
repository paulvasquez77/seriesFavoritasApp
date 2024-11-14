import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p>© 2024 Series Favoritas, All rights reserved.</p>
      <p>
        Hecho con 💙 por:{' '}
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/jean-paul-vasquez/"
          target="_blank"
        >
          Paul
        </a>
      </p>
    </div>
  );
}
