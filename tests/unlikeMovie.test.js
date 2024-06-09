/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import FavoriteRestoIDB from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';


describe('Unliking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIDB.putRestoIDB({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIDB.deleteRestoIDB(1);
  });

  it('should display unlike widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy();
  });

  it('should not display like widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeFalsy();
  });

  it('should be able to remove liked movie from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIDB.getAllRestoIDB()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 1 });

    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIDB.deleteRestoIDB(1);

    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIDB.getAllRestoIDB()).toEqual([]);
  });
});
