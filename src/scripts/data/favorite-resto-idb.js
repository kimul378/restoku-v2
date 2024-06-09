/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import {openDB} from 'idb';
import CONFIG from '../globals/config';
const {DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME} = CONFIG;
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
  }});
const FavoriteRestoIDB = {
  async getRestoIDB(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestoIDB() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestoIDB(resto) {
     // eslint-disable-next-line no-prototype-builtins
     if (!resto.hasOwnProperty('id')) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },

  async deleteRestoIDB(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
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

export default FavoriteRestoIDB;
