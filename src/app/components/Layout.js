'use client';

import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
       
      <main className={styles.main}>
  <h1>Welcome to Our World of Digital Innovation</h1>
  <p>
    At <strong>डिजीअंकिय</strong>, we empower businesses to thrive in the digital era. 
    Our services are designed to transform your vision into reality with innovative and 
    cutting-edge technology solutions.
  </p>
  <ul>
    <li>📱 Mobile App Development</li>
    <li>💻 Website Development</li>
    <li>🖥️ Desktop App Development</li>
    <li>⚙️ Custom Software Solutions</li>
    <li>📈 Data Analytics and AI Integration</li>
  </ul>
  <div style={{ marginTop: "2rem" }}>
    <button 
      style={{
        background: "#1d4ed8",
        color: "#fff",
        padding: "0.8rem 1.5rem",
        borderRadius: "10px",
        border: "none",
        fontSize: "1rem",
        cursor: "pointer",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "background 0.3s ease-in-out"
      }}
      onMouseEnter={(e) => e.target.style.background = "#2563eb"}
      onMouseLeave={(e) => e.target.style.background = "#1d4ed8"}
    >
      Get Started
    </button>
  </div>
</main>

      
      <Footer />
    </div>
  );
};

export default Layout;
