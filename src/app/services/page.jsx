import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <>
      <Header />
      <main className={styles.servicesContainer}>
        <section className={styles.heroSection}>
          <h1>Our Services</h1>
          <p>
            We offer a wide range of cutting-edge IT solutions tailored to meet
            your business needs.
          </p>
        </section>

        <section className={styles.servicesList}>
          <div className={styles.serviceCard}>
            <h2>Sever Maintenence</h2>
            <p>
              Empower your business with innovative solutions to drive growth
              and efficiency.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h2>Software Development</h2>
            <p>
              Optimize your operations with our state-of-the-art IT
              infrastructure and tools.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h2>AI/ML Integration</h2>
            <p>
              Accelerate your digital transformation journey with our expert
              consulting and strategies.
            </p>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Contact us today to learn more about how our services can help you
            achieve your goals.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
