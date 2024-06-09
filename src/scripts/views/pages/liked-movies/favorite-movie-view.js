/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
import { createRestaurantsItemTemplate } from '../../templates/template-creator';

class FavoriteMovieView {
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Your Liked Movie</h2>
  
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteMovies(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantsItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyMovieTemplate();
    }

    document.getElementById('movies').innerHTML = html;

    document.getElementById('movies').dispatchEvent(new Event('movies:updated'));
  }

  _getEmptyMovieTemplate() {
    return `
      <div class="movie-item__not__found">
        Tidak ada film untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteMovieView;
