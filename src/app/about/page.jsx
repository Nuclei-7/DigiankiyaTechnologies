import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.aboutContainer}>
        <section className={styles.heroSection}>
          <h1>About Digiankiya Technologies</h1>
          <p>
            Empowering Digital Transformation through innovative solutions, 
            cutting-edge technologies, and unparalleled client commitment.
          </p>
        </section>

        <section className={styles.missionSection}>
          <h2>Our Mission</h2>
          <p>
            To deliver world-class IT services and solutions that help our clients achieve 
            their business goals while fostering innovation and growth in the technology space.
          </p>
        </section>

        <section className={styles.visionSection}>
          <h2>Our Vision</h2>
          <p>
            To become a global leader in IT services, empowering businesses with smart, scalable, 
            and sustainable technology solutions.
          </p>
        </section>

        <section className={styles.valuesSection}>
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Staying ahead with cutting-edge solutions.</li>
            <li><strong>Integrity:</strong> Building trust through honesty and transparency.</li>
            <li><strong>Excellence:</strong> Delivering quality in everything we do.</li>
            <li><strong>Collaboration:</strong> Partnering with clients for shared success.</li>
          </ul>
        </section>

        <section className={styles.statsSection}>
          <h2>Our Achievements</h2>
          <div className={styles.stats}>
            <div>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Successful Projects</p>
            </div>
            <div>
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2>Get In Touch</h2>
          <p>
            Ready to transform your business? <a href="/contact">Contact us</a> today to learn more 
            about our services and how we can help you achieve your goals.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
