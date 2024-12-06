import styles from '@/app/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.companyName}>&copy; 2024 Digiankiya Technologies. All rights reserved.</p>
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
     
    </footer>
  );
};

export default Footer;
