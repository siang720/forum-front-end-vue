<template>
  <div class="card">
    <div class="card-header"><strong>2</strong> 收藏的餐廳</div>
    <div class="card-body">
      <router-link
        v-for="FavoritedRestaurant in FavoritedRestaurants"
        :key="FavoritedRestaurant.id"
        :to="{ name: 'restaurant', params: { id: FavoritedRestaurant.id } }"
      >
        <img
          src="https://via.placeholder.com/60"
          width="60"
          height="60"
          class="avatar mr-1 mb-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    FavoritedRestaurants: {
      type: Array,
      required: true
    }
  }
};
</script>
