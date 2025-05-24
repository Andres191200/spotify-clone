import Navbar from './components/navbar';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <main className={styles.homeMainContainer}>
      <Navbar />
      <h1>SPOTIFY DESKTOP HOME with tanstack</h1>
    </main>
  );
}
