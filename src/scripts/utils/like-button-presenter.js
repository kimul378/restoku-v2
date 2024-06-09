/* eslint-disable linebreak-style */
/* eslint-disable comma-spacing */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIDB from '../data/favorite-resto-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({likeButtonContainer,favoriteMovies, restaurant}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteMovies = favoriteMovies;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIDB.getRestoIDB(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.putRestoIDB(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDB.deleteRestoIDB(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
