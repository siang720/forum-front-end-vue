import { apiHelper } from "./../utils/helpers";

export default {
  categories: {
    get() {
      return apiHelper.get("/admin/categories");
    },
    create(newCategory) {
      return apiHelper.post("/admin/categories", newCategory);
    },
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`);
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name });
    }
  },
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`);
    },
    create({ formData }) {
      return apiHelper.post("/admin/restaurants", formData);
    },
    get() {
      return apiHelper.get("/admin/restaurants");
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData);
    },
    delete(restaurantId) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`);
    }
  }
};
