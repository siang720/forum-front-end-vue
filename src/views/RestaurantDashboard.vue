<template>
  <div class="container py-5">
    <h1>{{ restaurant.name }}</h1>
    <p>[{{ restaurant.categoryName }}]</p>
    <hr />
    <ul>
      <li>有{{ restaurant.commentCounts }}筆評論</li>
      <li>有{{ restaurant.viewCounts }}人看過這家餐廳</li>
    </ul>
    <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
      回上一頁
    </router-link>
  </div>
</template>

<script>
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        categoryName: "",
        commentCounts: undefined,
        viewCounts: undefined
      }
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.restaurant = {
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          commentCounts: data.restaurant.Comments.length,
          viewCounts: data.restaurant.viewCounts
        };
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "暫時無法讀取餐廳資料，請稍後再試！"
        });
      }
    }
  }
};
</script>
