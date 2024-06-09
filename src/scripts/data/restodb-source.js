/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsDBSource {
  static async fetchData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Gagal fetch data');
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async daftarResto() {
    try {
      const responseJson = await RestaurantsDBSource.fetchData(API_ENDPOINT.LIST);
      return responseJson.restaurants;
    } catch (error) {
      console.error('Gagal Memuat list of restaurants:', error);
      throw error;
    }
  }
  static async detailResto(id) {
    try {
      const responseJson = await RestaurantsDBSource.fetchData(API_ENDPOINT.DETAIL(id));
      return responseJson.restaurant;
    } catch (error) {
      console.error('Gagal Memuat restaurant details:', error);
      throw error;
    }
  }


}

export default RestaurantsDBSource;
