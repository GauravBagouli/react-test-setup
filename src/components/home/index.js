import React from 'react';
import { Spinner } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.header}>Home</h1>
        <p style={styles.subtext}>This page is currently under construction.</p>
        <div style={styles.spinnerContainer}>
          <Spinner animation="border" role="status" style={styles.spinner}>
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        <p style={styles.note}>
          We're working hard to bring this feature to you. Stay tuned!
        </p>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa', // Light gray background
    padding: '20px',
    textAlign: 'center',
  },
  content: {
    borderRadius: '8px',
    padding: '40px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  },
  header: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#DA2F5C',
    marginBottom: '20px',
  },
  subtext: {
    fontSize: '1.2rem',
    color: '#6c757d',
    marginBottom: '20px',
  },
  spinnerContainer: {
    marginBottom: '20px',
  },
  spinner: {
    width: '3rem',
    height: '3rem',
    color: '#007bff',
  },
  note: {
    fontSize: '1rem',
    color: '#6c757d',
  },
};

export default Home;
