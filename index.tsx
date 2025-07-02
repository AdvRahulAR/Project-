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

// Helper function to detect StackBlitz environment
const isStackBlitzEnvironment = (): boolean => {
  return window.location.hostname.includes('stackblitz') || 
         window.location.hostname.includes('webcontainer') ||
         window.location.hostname.includes('stackblitz.io');
};

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator && !isStackBlitzEnvironment()) {
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
} else if (isStackBlitzEnvironment()) {
  console.log('Service Worker registration skipped: Not supported in StackBlitz environment');
}

// Handle PWA install prompt
let deferredPrompt: any;

// Only handle install prompt if not in StackBlitz
if (!isStackBlitzEnvironment()) {
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('PWA install prompt triggered');
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show custom install button or notification
    showInstallPromotion();
  });
}

function showInstallPromotion() {
  // Skip install promotion in StackBlitz
  if (isStackBlitzEnvironment()) {
    return;
  }
  
  // Create a subtle install promotion
  const installBanner = document.createElement('div');
  installBanner.id = 'install-banner';
  installBanner.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(220, 38, 38, 0.95);
      backdrop-filter: blur(10px);
      color: white;
      padding: 12px 16px;
      border-radius: 12px;
      font-size: 13px;
      z-index: 9999;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      max-width: 280px;
      border: 1px solid rgba(255,255,255,0.1);
    ">
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-weight: 500; font-size: 14px;">📱 Install Dharmabot</span>
          <button id="dismiss-install" style="
            background: transparent;
            border: none;
            color: rgba(255,255,255,0.8);
            font-size: 16px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s;
          " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='transparent'">
            ×
          </button>
        </div>
        <p style="margin: 0; font-size: 12px; color: rgba(255,255,255,0.9); line-height: 1.3;">
          Quick access to legal assistance
        </p>
        <button id="install-button" style="
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
        " onmouseover="this.style.background='rgba(255,255,255,0.3)'; this.style.transform='translateY(-1px)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='translateY(0)'">
          Install Now
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(installBanner);
  
  // Animate in
  setTimeout(() => {
    const banner = document.getElementById('install-banner');
    if (banner) {
      banner.style.transform = 'translateX(0)';
    }
  }, 1000);
  
  // Handle install button click
  document.getElementById('install-button')?.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to install prompt: ${outcome}`);
      
      // Clear the deferredPrompt
      deferredPrompt = null;
      
      // Remove the banner
      const banner = document.getElementById('install-banner');
      if (banner) {
        banner.style.transform = 'translateX(100%)';
        setTimeout(() => banner.remove(), 300);
      }
    }
  });
  
  // Handle dismiss button click
  document.getElementById('dismiss-install')?.addEventListener('click', () => {
    const banner = document.getElementById('install-banner');
    if (banner) {
      banner.style.transform = 'translateX(100%)';
      setTimeout(() => banner.remove(), 300);
    }
    // Store dismissal in localStorage to avoid showing again for a while
    localStorage.setItem('installPromptDismissed', Date.now().toString());
  });
  
  // Auto-dismiss after 10 seconds
  setTimeout(() => {
    const banner = document.getElementById('install-banner');
    if (banner) {
      banner.style.transform = 'translateX(100%)';
      setTimeout(() => banner.remove(), 300);
    }
  }, 10000);
}

// Handle successful installation
if (!isStackBlitzEnvironment()) {
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed successfully');
    // Hide any install promotion
    const banner = document.getElementById('install-banner');
    if (banner) {
      banner.remove();
    }
    deferredPrompt = null;
  });
}

// Check if app is running in standalone mode (installed as PWA)
if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
  console.log('PWA install prompt triggered');
  console.log('App is running in standalone mode (PWA)');
  // Add any PWA-specific styling or behavior
  document.documentElement.classList.add('pwa-mode');
}