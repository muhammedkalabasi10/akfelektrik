import React from 'react';

function NotFoundPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  heading: {
    fontSize: '72px',
    color: '#ff6347', // Tomato color
  },
  message: {
    fontSize: '20px',
    color: '#555',
  },
};

export default NotFoundPage;
