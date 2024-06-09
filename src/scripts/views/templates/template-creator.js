/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantsDetailTemplate = (restaurant) => `
    <div class="movie__header">
      <h2 tabindex="0" class="movie__title">${restaurant.name}</h2>
      <div id="likeButtonContainer"></div>
    </div>
    <img class="movie__poster" src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
    <div class="movie__info">
      <h3>Information</h3>
      <h4>Kota</h4>
      <p>${restaurant.city}</p>
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
      <h4>Kategori Restaurant</h4>
      <p>${restaurant.categories.map((item) => item.name).join(' - ')}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
    </div>
    <div class="movie__overview">
      <h3>Overview</h3>
      <p>${restaurant.description}</p>
    </div>

    <h2 tabindex="0">Menu Makanan</h2>
    <ul id="food-menu">
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>

    <h2 tabindex="0">Menu Minuman</h2>
    <ul id="drink-menu">
      ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
    </ul>

    <h2 tabindex="0">Customer Reviews</h2>
    <ul id="customer-reviews">
      ${restaurant.customerReviews.map((review) => `
        <li>
          <strong>${review.name}:</strong> ${review.review} - <em>${review.date}</em>
        </li>
      `).join('')}
    </ul>
`;

const createRestaurantsItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${restaurant.name}"
      src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}" crossorigin="anonymous"/>
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3 class="movie__title"> <a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <h4>${restaurant.city}</h4>
      <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsItemTemplate,
  createRestaurantsDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
