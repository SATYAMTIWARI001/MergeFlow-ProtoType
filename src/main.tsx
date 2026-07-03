import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent cross-origin third-party script errors or browser extension errors from disrupting the app telemetry
if (typeof window !== "undefined") {
  window.addEventListener("error", (event) => {
    if (event.message === "Script error." || !event.filename) {
      event.preventDefault();
      event.stopPropagation();
      console.warn("Muted cross-origin or third-party script error safely.");
    }
  }, true);

  window.addEventListener("unhandledrejection", (event) => {
    // Silently log and suppress unhandled rejections to prevent unhandled app crashes
    console.warn("Suppressed unhandled rejection:", event.reason);
  }, true);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
