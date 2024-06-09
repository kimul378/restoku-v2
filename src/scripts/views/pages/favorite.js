/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import FavoriteRestoIDB from '../../data/favorite-resto-idb';
// import { createRestaurantsItemTemplate } from '../templates/template-creator';
import FavoriteMovieView from './liked-movies/favorite-movie-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter';

const view = new FavoriteMovieView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteRestoIDB });
    // eslint-disable-next-line no-new
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteRestoIDB });
  },
};

export default Like;