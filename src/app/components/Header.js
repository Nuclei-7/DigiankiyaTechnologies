import Link from 'next/link';
import styles from '@/app/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Digiankiya Technologies</Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
