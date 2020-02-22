<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">首頁 - 餐廳列表</h1>
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantCard from "../components/RestaurantCard";

const dummyData = {
  restaurants: [
    {
      id: 51,
      name: "發大財0121牛排",
      tel: "12345678",
      address: "高雄市",
      opening_hours: "00:00",
      description: "123",
      image: "https://i.imgur.com/CaeM9rg.jpg",
      viewCounts: 27,
      createdAt: "2019-11-22T06:50:58.472Z",
      updatedAt: "2020-02-11T03:49:29.072Z",
      CategoryId: 6,
      Category: {
        id: 6,
        name: "美式料理",
        createdAt: "2019-11-20T06:25:42.917Z",
        updatedAt: "2019-11-20T06:25:42.917Z"
      },
      isFavorited: false,
      isLiked: true
    },
    {
      id: 144,
      name: "麥當當",
      tel: "123",
      address: "麥當勞總部",
      opening_hours: "03:33",
      description: "",
      image: null,
      viewCounts: null,
      createdAt: "2020-02-16T05:09:24.297Z",
      updatedAt: "2020-02-16T05:09:24.297Z",
      CategoryId: 6,
      Category: {
        id: 6,
        name: "美式料理",
        createdAt: "2019-11-20T06:25:42.917Z",
        updatedAt: "2019-11-20T06:25:42.917Z"
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 14,
      name: "Rahul Kilback",
      tel: "1-573-027-3190",
      address: "13538 Lula Roads",
      opening_hours: "08:00",
      description: "Ut ea repellat cumque illo sint. Possimus a magni ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=66.19683181847653",
      viewCounts: 77,
      createdAt: "2019-11-20T06:25:42.925Z",
      updatedAt: "2020-02-16T05:36:07.120Z",
      CategoryId: 7,
      Category: {
        id: 7,
        name: "複合式料理",
        createdAt: "2019-11-20T06:25:42.917Z",
        updatedAt: "2019-11-20T06:25:42.917Z"
      },
      isFavorited: true,
      isLiked: true
    }
  ],
  categories: [
    {
      id: 6,
      name: "美式料理",
      createdAt: "2019-11-20T06:25:42.917Z",
      updatedAt: "2019-11-20T06:25:42.917Z"
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2019-11-20T06:25:42.917Z",
      updatedAt: "2019-11-20T06:25:42.917Z"
    }
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2
};

export default {
  components: {
    NavTabs,
    RestaurantCard
  },
  data() {
    return {
      categories: [],
      categoryId: undefined,
      currentPage: 1,
      restaurants: [],
      totalPage: undefined
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.categories = dummyData.categories;
      this.catagoryId = dummyData.categoryId;
      this.currentPage = dummyData.page;
      this.restaurants = dummyData.restaurants;
      this.totalPage = dummyData.totalPage.length;
    }
  }
};
</script>
