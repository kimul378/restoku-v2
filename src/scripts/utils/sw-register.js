/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const swRegister = async () => {
    if (!('serviceWorker' in navigator)) {
      console.log('Service Worker not supported in the browser');
      return;
    }
  
    try {
      await navigator.serviceWorker.register('./sw.bundle.js');
      console.log('Service worker registered');
    } catch (error) {
      console.log('Failed to register service worker', error);
    }
  };
  
  export default swRegister;