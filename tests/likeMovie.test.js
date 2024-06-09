/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import { spyOn } from 'jest-mock';
import FavoriteRestoIDB from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();

    spyOn(FavoriteRestoIDB, 'searchMovies');
  });

  it('should show the like button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  });

  it('should not show the unlike button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('should be able to like the movie', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const restaurant = await FavoriteRestoIDB.getRestoIDB(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestoIDB.deleteRestoIDB(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIDB.putRestoIDB({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteRestoIDB.getAllRestoIDB()).toEqual([{ id: 1 }]);

    await FavoriteRestoIDB.deleteRestoIDB(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIDB.getAllRestoIDB()).toEqual([]);
  });
});
