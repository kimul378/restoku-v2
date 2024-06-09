/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantsDBSource from '../../data/restodb-source';
import {createRestaurantsDetailTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter.js';
import FavoriteRestoIDB from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <div class="Content">
        <h1 tabindex="0">Detail Restoran</h1>
        <div id="restaurant-detail" class="restaurant-detail"></div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsDBSource.detailResto(url.id);
    const movieContainer = document.querySelector('#restaurant-detail');
    movieContainer.innerHTML = createRestaurantsDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteMovies: FavoriteRestoIDB,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
