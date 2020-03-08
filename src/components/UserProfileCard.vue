<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
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
                @click.stop.prevent="deleteFollowing(user.profile.id)"
              >
                取消追蹤
              </button>
              <button
                v-if="!user.isFollowed"
                type="button"
                class="btn btn-primary"
                @click.stop.prevent="addFollowing(user.profile.id)"
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
import { emptyImageFilter } from "../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.addFollowing({
          userId
        });
        if (data.status !== "success") {
          throw new Error(statusText);
        }
        this.user = {
          ...this.user, // 保留餐廳內原有資料
          isFollowed: true
        };
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法追蹤該使用者，請稍後再試！"
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data, statusText } = await usersAPI.deleteFollowing({
          userId
        });
        if (data.status !== "success") {
          throw new Error(statusText);
        }
        this.user = {
          ...this.user, // 保留餐廳內原有資料
          isFollowed: false
        };
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取消追蹤該使用者，請稍後再試！"
        });
      }
    }
  }
};
</script>
