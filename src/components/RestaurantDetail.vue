<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        src="https://loremflickr.com/320/240/food,dessert,restaurant/"
        style="width: 250px;margin-bottom: 25px;"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <a class="btn btn-primary btn-border mr-2" href="#">Dashboard</a>

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border favorite mr-2"
        @click.stop.prevent="deleteFavorite"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border favorite mr-2"
        @click.stop.prevent="addFavorite"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="deleteLike"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike"
      >
        Like
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  watch: {
    initialRestaurant(restaurant) {
      this.restaurant = {
        ...this.restaurant,
        ...restaurant
      };
    }
  },
  methods: {
    async addFavorite() {
      try {
        const { data, statusText } = await usersAPI.addFavorite({
          restaurantId: this.restaurant.id
        });
        if (data.status !== "success") {
          throw new Error(statusText);
        }
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true
        };
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "暫時無法新增至最愛餐廳，請稍後再試"
        });
      }
    },
    async deleteFavorite() {
      try {
        const { data, statusText } = await usersAPI.deleteFavorite({
          restaurantId: this.restaurant.id
        });
        if (data.status !== "success") {
          throw new Error(statusText);
        }
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: false
        };
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "暫時無法移除最愛餐廳，請稍後再試"
        });
      }
    },
    async addLike() {
      try {
        const { data, statusText } = await usersAPI.addLike({
          restaurantId: this.restaurant.id
        });
        if (data.status !== "success") {
          throw new Error(statusText);
        }
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isLiked: true
        };
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "暫時無法收藏餐廳，請稍後再試"
        });
      }
    },
    async deleteLike() {
      try {
        const { data, statusText } = await usersAPI.deleteLike({
          restaurantId: this.restaurant.id
        });
        if (data.status !== "success") {
          throw new Error(statusText);
        }
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isLiked: false
        };
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "暫時無法移除收藏餐廳，請稍後再試"
        });
      }
    }
  }
};
</script>
