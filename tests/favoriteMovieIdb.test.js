/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import { itActsAsFavoriteMovieModel } from './contracts/favoriteMovieContract';
import FavoriteRestoIDB from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIDB.getAllRestoIDB()).forEach(async (restaurant) => {
      await FavoriteRestoIDB.deleteRestoIDB(restaurant.id);
    });
  });

  itActsAsFavoriteMovieModel(FavoriteRestoIDB);
});
