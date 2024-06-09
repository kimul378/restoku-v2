/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
import { itActsAsFavoriteMovieModel } from './contracts/favoriteMovieContract';

let favoriteMovies = [];

const FavoriteMovieArray = {
  getRestoIDB(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, , eqeqeq
    return favoriteMovies.find((restaurant) => restaurant.id == id);
  },

  getAllRestoIDB() {
    return favoriteMovies;
  },

  putRestoIDB(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getRestoIDB(restaurant.id)) {
      return;
    }

    favoriteMovies.push(restaurant);
  },

  deleteRestoIDB(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id

    // eslint-disable-next-line eqeqeq
    favoriteMovies = favoriteMovies.filter((restaurant) => restaurant.id != id);
  },

  async searchMovies(query) {
    return (await this.getAllRestoIDB()).filter((restaurant) => {
      const loweredCaseMovieTitle = (restaurant.name || '-').toLowerCase();
      const jammedMovieTitle = loweredCaseMovieTitle.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedMovieTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteMovies = [];
  });

  itActsAsFavoriteMovieModel(FavoriteMovieArray);
});
