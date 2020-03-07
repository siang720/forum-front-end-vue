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
    userFollowings: {
      type: Array,
      required: true
    }
  }
};
</script>
