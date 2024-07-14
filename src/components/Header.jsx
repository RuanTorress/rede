import styles from './Header.module.css';
import ignite from '../assets/ignite-logo.svg'; // Corrigido o nome da importação



export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignite}  alt="Ignite Logo" /> Promoção diaria

    </header>
  );
}
