/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithMovie = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};


export { createLikeButtonPresenterWithMovie };
