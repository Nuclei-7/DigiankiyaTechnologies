import styles from '@/app/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.companyName}>&copy; 2024 Digiankiya Technologies. All rights reserved.</p>
        <p className={styles.unit}>A Unit of Kalwar Technologies Private Limited</p>
      </div>
      <div className={styles.footerLinks}>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className={styles.footerSocials}>
        <p>Follow Us:</p>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
