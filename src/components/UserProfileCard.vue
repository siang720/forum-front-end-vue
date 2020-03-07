<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src="https://via.placeholder.com/300"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.profile.name }}</h5>
          <p class="card-text">
            {{ user.profile.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.profile.Followers.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ user.profile.Followings.length }}</strong> followers
              (追隨者)
            </li>
          </ul>
          <p></p>
          <form action="/following/2" method="POST" style="display: contents;">
            <template v-if="user.profile.id !== currentUser.id">
              <button
                v-if="user.isFollowed"
                type="button"
                class="btn btn-danger btn-border deletefollowing"
                @click.stop.prevent="deleteFollowing"
              >
                追蹤
              </button>
              <button
                v-if="!user.isFollowed"
                type="button"
                class="btn btn-primary"
                @click.stop.prevent="addFollowing"
              >
                追蹤
              </button>
            </template>
            <template v-else>
              <button type="button" class="btn btn-primary">
                Edit
              </button>
            </template>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};

export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
      user: this.initialUser
    };
  },
  methods: {
    addFollowing() {
      console.log(this.currentUser.id);
      this.user = {
        ...this.user, // 保留餐廳內原有資料
        isFollowed: !this.user.isFollowed
      };
    },
    deleteFollowing() {
      this.user = {
        ...this.user, // 保留餐廳內原有資料
        isFollowed: !this.user.isFollowed
      };
    }
  }
};
</script>
