/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import RestaurantsDBSource from '../../data/restodb-source';
import {createRestaurantsItemTemplate} from '../templates/template-creator';

const ListRestaurants = {
  async render() {
    return `
      <div class="content">
      <div class="hero">
      <img src="/heros/hero-image_1.jpg" alt="Hero Image">
      <div class="hero-text">
        <h1>Welcome to RESTOKU</h1>
        <p>Tempat Kamu Cari Restoran Terbaik</p>
      </div>
      </div>
        <h1 tabindex="0">Pilihan Restaurant Favoritmu Disini...</h1>
        <div class="movies" id="movies"></div>

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsDBSource.daftarResto();
    const restaurantsContainer = document.querySelector('#movies');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantsItemTemplate(restaurant);
    });
  },
};

export default ListRestaurants;

document.addEventListener('DOMContentLoaded', function() {
  // Cek apakah splash screen perlu ditampilkan
  const splashScreenShown = sessionStorage.getItem('splashScreenShown');

  if (!splashScreenShown) {
      // Tampilkan splash screen
      showSplashScreen();

      // Set status splash screen ditampilkan
      sessionStorage.setItem('splashScreenShown', 'true');
  } else {
      // Splash screen sudah ditampilkan sebelumnya, langsung sembunyikan
      hideSplashScreen();
  }
});

// Fungsi untuk menampilkan splash screen
function showSplashScreen() {
  document.getElementById('splash-screen').style.display = 'block';
}

// Fungsi untuk menyembunyikan splash screen
function hideSplashScreen() {
  document.getElementById('splash-screen').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {

  setTimeout(function() {
      document.getElementById('splash-screen').style.display = 'none';
  }, 2000);
});
