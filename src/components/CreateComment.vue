<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="text-right">
      <button type="submit" class="btn btn-primary mr-0">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from "../apis/comment";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: ""
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    async handleSubmit() {
      try {
        // 向 API 發送 POST 請求
        const { data } = await commentsAPI.postComment({
          text: this.text,
          restaurantId: this.restaurantId,
          user: { id: this.currentUser.id }
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 伺服器新增 Comment 成功後...
        this.$emit("after-create-comment", {
          commentId: data.commentId, // 尚未串接 API 暫時使用隨機的 id
          restaurantId: this.restaurantId,
          text: this.text
        });
        this.text = ""; // 將表單內的資料清空
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "暫時無法新增評論，請稍後再試！"
        });
      }
    }
  }
};
</script>
