import Navbar from './components/navbar/navbar';
import styles from './styles.module.scss';

export default function Home() {
  return (
    <main className={styles.homeMainContainer}>
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.leftSectionContainer}>

        </div>
        <div className={styles.rightSectionContainer}>
          
        </div>
      </div>
    </main>
  );
}
