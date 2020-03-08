import { apiHelper } from "./../utils/helpers";

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId });
    return apiHelper.get(`/restaurants?${searchParams.toString()}`);
  },
  getFeeds() {
    return apiHelper.get("/restaurants/feeds");
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`);
  }
};
