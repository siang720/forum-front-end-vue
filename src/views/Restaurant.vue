<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :key="restaurant.id" :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantComments from "../components/RestaurantComments";
const dummyData = {
  restaurant: {
    id: 1,
    name: "我要吃漢堡包",
    tel: "02-8888-0000",
    address: "01313 ketlch deive",
    opening_hours: "08:00",
    description: "全世界最任性的漢堡公司",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335",
    viewCounts: 16,
    createdAt: "2019-11-20T06:25:42.921Z",
    updatedAt: "2020-02-23T06:04:48.112Z",
    CategoryId: 6,
    Category: { name: "美式料理" },
    FavoritedUsers: [
      {
        id: 1,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G",
        isAdmin: true,
        image: null,
        createdAt: "2019-11-20T06:25:42.456Z",
        updatedAt: "2019-11-25T06:53:28.542Z",
        Favorite: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2020-01-06T13:45:36.866Z",
          updatedAt: "2020-01-06T13:45:36.866Z"
        }
      }
    ],
    LikedUsers: [
      {
        id: 1,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G",
        isAdmin: true,
        image: null,
        createdAt: "2019-11-20T06:25:42.456Z",
        updatedAt: "2019-11-25T06:53:28.542Z",
        Like: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2019-11-22T07:47:34.897Z",
          updatedAt: "2019-11-22T07:47:34.897Z"
        }
      }
    ],
    Comments: [
      {
        id: 1,
        text: "Voluptas omnis laudantium et non ut quia unde.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.942Z",
        updatedAt: "2019-11-20T06:25:42.942Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z"
        }
      },
      {
        id: 51,
        text: "Distinctio laborum explicabo quasi.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.944Z",
        updatedAt: "2019-11-20T06:25:42.944Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z"
        }
      },
      {
        id: 101,
        text: "Nihil iure quas.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.946Z",
        updatedAt: "2019-11-20T06:25:42.946Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z"
        }
      }
    ]
  },
  isFavorited: true,
  isLiked: true
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments
  },
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      );
    }
  }
};
</script>
