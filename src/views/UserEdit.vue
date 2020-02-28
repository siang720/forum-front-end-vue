<template>
  <div class="container py-5">
    <UserForm :initial-user="user" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import UserForm from "./../components/UserForm.vue";

const dummyData = {
  user: {
    profile: {
      id: "1",
      name: "Sean",
      image: "https://i.imgur.com/xpbd5t9.png"
    }
  }
};

export default {
  data() {
    return {
      user: {
        profile: {
          id: undefined,
          name: "",
          image: ""
        }
      }
    };
  },
  components: {
    UserForm
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(userId) {
      console.log("fetchUserId:", userId);
      this.user.profile = {
        ...this.user.profile,
        id: dummyData.user.profile.id,
        name: dummyData.user.profile.name,
        image: dummyData.user.profile.image
      };
    },
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    }
  }
};
</script>
