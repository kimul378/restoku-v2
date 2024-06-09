/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
class FavoriteMovieShowPresenter {
    constructor({ view, favoriteMovies }) {
      this._view = view;
      this._favoriteMovies = favoriteMovies;
  
      this._showFavoriteMovies();
    }
  
    async _showFavoriteMovies() {
      const restaurants = await this._favoriteMovies.getAllRestoIDB();
      this._displayMovies(restaurants);
    }
  
    _displayMovies(restaurants) {
      this._view.showFavoriteMovies(restaurants);
    }
  }
  
  export default FavoriteMovieShowPresenter;
  