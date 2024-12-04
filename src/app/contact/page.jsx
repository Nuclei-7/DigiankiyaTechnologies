"use client"

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", contact: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", contact: "" });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}
