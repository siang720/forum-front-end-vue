<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userFollowers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="userFollower in userFollowers"
        :key="userFollower.id"
        :to="{ name: 'user-profile', params: { id: userFollower.id } }"
      >
        <img
          :src="userFollower.image | emptyImage"
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
    userFollowers: {
      type: Array,
      default: () => []
    }
  }
};
</script>
