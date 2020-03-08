<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userFollowings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="userFollowing in userFollowings"
        :key="userFollowing.id"
        :to="{ name: 'user-profile', params: { id: userFollowing.id } }"
      >
        <img
          :src="userFollowing.image | emptyImage"
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
    userFollowings: {
      type: Array,
      required: true
    }
  }
};
</script>
