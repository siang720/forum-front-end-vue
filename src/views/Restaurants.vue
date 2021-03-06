<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">首頁 - 餐廳列表</h1>
      <!-- 餐廳類別標籤 RestaurantsNavPills -->
      <RestaurantsNavPills :categories="categories" />

      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantPagination
        v-if="totalPage > 1"
        :category-id="categoryId"
        :current-page="currentPage"
        :total-page="totalPage"
      />

      <!-- 無資料時顯示提示文字 -->
      <div v-if="restaurants.length < 1">
        此類別目前沒有餐廳資料
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantsNavPills from "../components/RestaurantsNavPills";
import RestaurantPagination from "../components/RestaurantsPagination";
// STEP 1：透過 import 匯入剛剛撰寫好用來呼叫 API 的方法
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import Spinner from "../components/Spinner";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination,
    Spinner
  },
  data() {
    return {
      categories: [],
      categoryId: undefined,
      currentPage: 1,
      restaurants: [],
      totalPage: undefined,
      isLoading: true
    };
  },
  created() {
    // STEP 3：在 created 的時候呼叫 fetchRestaurants 方法
    const { page, categoryId } = this.$route.query;
    this.fetchRestaurants({
      page,
      categoryId
    });
  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  beforeRouteUpdate(to, from, next) {
    const { page, categoryId } = to.query;
    this.fetchRestaurants({ page, categoryId });
    next();
  },
  methods: {
    async fetchRestaurants({ page = 1, categoryId = "" }) {
      try {
        // STEP 2：將 response 中的 data 和 statusText 取出
        const { data, statusText } = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        });
        // STEP 3：如果 statusText 不是 OK 的話則進入錯誤處理
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        // STEP 4：將從伺服器取得的 data 帶入 Vue 內
        this.categories = data.categories;
        this.categoryId = data.categoryId;
        this.currentPage = data.page;
        this.restaurants = data.restaurants;
        this.totalPage = data.totalPage.length;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>
