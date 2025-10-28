import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// To prevent re-creating the root in a hot-reloading environment (which causes error #525),
// we use a global variable to store the root across module re-evaluations.
const globalThisWithRoot = globalThis as typeof globalThis & {
  reactRoot?: Root;
};

if (!globalThisWithRoot.reactRoot) {
  globalThisWithRoot.reactRoot = createRoot(rootElement);
}

globalThisWithRoot.reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
