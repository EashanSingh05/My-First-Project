// App.js — Simple Landing Page

import React from "react";
import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.title}>Welcome to Eashan's Site</h1>
        <p style={styles.subtitle}>
          Great Ideas Start Here
        </p>
        <a href="#cta" style={styles.ctaButton}>
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section style={styles.features} id="cta">
        <div style={styles.featureCard}>
          <h3>🚀 Fast</h3>
          <p>Lightning-fast performance out of the box.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>🔒 Secure</h3>
          <p>Enterprise-grade security by default.</p>
        </div>
        <div style={styles.featureCard}>
          <h3>💡 Simple</h3>
          <p>Designed with simplicity in mind.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  hero: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
  },
  title: {
    fontSize: "3rem",
    margin: "0 0 10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    margin: "0 0 30px",
    opacity: 0.9,
  },
  ctaButton: {
    display: "inline-block",
    padding: "14px 36px",
    fontSize: "1.1rem",
    color: "#667eea",
    background: "#fff",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "60px 20px",
    flexWrap: "wrap",
    background: "#f9f9f9",
  },
  featureCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    width: "260px",
    textAlign: "center",
  },
  footer: {
    padding: "20px",
    background: "#333",
    color: "#aaa",
    fontSize: "0.9rem",
  },
};

export default App;
