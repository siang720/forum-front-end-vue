<template>
  <div class="card">
    <div class="card-header"><strong>0</strong> followers (追隨者)</div>
    <div class="card-body">
      <router-link
        v-for="userFollower in userFollowers"
        :key="userFollower.id"
        :to="{ name: 'user-profile', params: { id: userFollower.id } }"
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
    userFollowers: {
      type: Array,
      required: true
    }
  }
};
</script>
