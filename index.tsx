import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator && !window.location.hostname.includes('stackblitz')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, prompt user to refresh
                if (confirm('New version available! Refresh to update?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
} else if (window.location.hostname.includes('stackblitz')) {
  console.log('Service Worker registration skipped: Not supported in StackBlitz environment');
}

// Check if app is running in standalone mode (installed as PWA)
if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
  console.log('PWA install prompt triggered');
  console.log('App is running in standalone mode (PWA)');
  // Add any PWA-specific styling or behavior
  document.documentElement.classList.add('pwa-mode');
}