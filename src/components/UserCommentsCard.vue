<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userComments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <a href="/restaurants/1">
        <img
          src="https://loremflickr.com/320/240/restaurant,food/?random=90.45122643685453"
          width="60"
          height="60"
          class="avatar mr-1 mb-1"
        />
      </a>
      <router-link
        v-for="userComment in userComments"
        :key="userComment.id"
        :to="{ name: 'restaurant', params: { id: userComment.RestaurantId } }"
      >
        <img
          :src="userComment.Restaurant.image | emptyImage"
          width="60"
          height="60"
          class="avatar mr-1 mb-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
export default {
  mixins: [emptyImageFilter],
  props: {
    userComments: {
      type: Array,
      default: () => []
    }
  }
};
</script>
