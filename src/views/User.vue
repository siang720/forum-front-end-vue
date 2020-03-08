<template>
  <div class="container py-5">
    <UserProfileCard :key="user.profile.id" :initial-user="user" />
    <div class="row">
      <div class="col-md-4">
        <UserFollowingsCard :user-followings="user.profile.Followings" />
        <br />
        <UserFollowersCard :user-followers="user.profile.Followers" />
      </div>
      <div class="col-md-8">
        <UserCommentsCard :user-comments="user.profile.Comments" />
        <br />
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="user.profile.FavoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard";
import UserFollowingsCard from "../components/UserFollowingsCard";
import UserFollowersCard from "../components/UserFollowersCard";
import UserCommentsCard from "../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data() {
    return {
      user: {
        profile: {
          id: -1,
          name: "",
          email: "",
          password: "",
          isAdmin: false,
          image: null,
          createdAt: "",
          updatedAt: "",
          Comments: [],
          FavoritedRestaurants: [],
          Followers: [],
          Followings: []
        },
        isFollowed: false
      }
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        // 串接api讀取user資料
        const { data, statusText } = await usersAPI.get({
          userId
        });
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        // 資料倒回data
        this.user.profile = data.profile;
        this.user.isFollowed = data.isFollowed;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "暫時無法讀取使用者資料，請稍後再試！"
        });
      }
    }
  }
};
</script>
