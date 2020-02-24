<template>
  <div class="container py-5">
    <h1>{{ restaurant.name }}</h1>
    <p>[{{ restaurant.categoryName }}]</p>
    <hr />
    <ul>
      <li>有{{ restaurant.commentCounts }}筆評論</li>
      <li>有{{ restaurant.viewCounts }}人看過這家餐廳</li>
    </ul>
    <a href="#">回上一頁</a>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "123",
    tel: "02-8888-0000",
    address: "01313 ketlch deive",
    opening_hours: "08:00",
    description: "dsfsafdsadfasasdfasdf",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335",
    viewCounts: 18,
    createdAt: "2019-11-20T06:25:42.921Z",
    updatedAt: "2020-02-23T13:14:08.108Z",
    CategoryId: 6,
    Category: { name: "美式料理" },
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
  }
};

export default {
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        categoryName: "",
        commentCounts: undefined,
        viewCounts: undefined
      }
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
        commentCounts: dummyData.restaurant.Comments.length,
        viewCounts: dummyData.restaurant.viewCounts
      };
    }
  }
};
</script>
