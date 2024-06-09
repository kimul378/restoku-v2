/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
class FavoriteMovieSearchPresenter {
    constructor({ favoriteMovies, view }) {
      this._favoriteMovies = favoriteMovies;
      this._view = view;
  
      this._listenToSearchRequestByUser();
    }
  
    _listenToSearchRequestByUser() {
      this._view.runWhenUserIsSearching((latestQuery) => {
        this._searchMovies(latestQuery);
      });
    }
  
    async _searchMovies(latestQuery) {
      this._latestQuery = latestQuery.trim();
  
      let foundMovies;
      if (this.latestQuery.length > 0) {
        foundMovies = await this._favoriteMovies.searchMovies(this.latestQuery);
      } else {
        foundMovies = await this._favoriteMovies.getAllRestoIDB();
      }
  
      this._showFoundMovies(foundMovies);
    }
  
    _showFoundMovies(restaurants) {
      this._view.showFavoriteMovies(restaurants);
    }
  
    get latestQuery() {
      return this._latestQuery;
    }
  }
  
  export default FavoriteMovieSearchPresenter;
  