<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th scope="col" width="300">
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category && restaurant.Category.name }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id }
            }"
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 143,
      name: "testrestaurant",
      tel: "",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: null,
      createdAt: "2020-01-19T03:04:21.188Z",
      updatedAt: "2020-01-19T03:04:21.188Z",
      CategoryId: 109,
      Category: {
        id: 109,
        name: "cool",
        createdAt: "2019-12-17T11:36:08.937Z",
        updatedAt: "2019-12-17T11:36:08.937Z"
      }
    },
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
      }
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
      }
    },
    {
      id: 14,
      name: "Rahul Kilback",
      tel: "1-573-027-3190",
      address: "13538 Lula Roads",
      opening_hours: "08:00",
      description:
        "Ut ea repellat cumque illo sint. Possimus a magni iusto molestiae explicabo. Impedit ea magni vel quaerat hic exercitationem nemo alias dolor. Eum rem harum soluta voluptas consequatur.\r\n \r\nSaepe ut deserunt eaque magni nulla omnis aut aut. Vel voluptate enim aut autem incidunt. Sit expedita alias quis pariatur sit. Itaque et dolorem veniam sed reprehenderit aut. Nisi vero exercitationem quibusdam sed vitae iure modi et porro.\r\n \r\nRerum inventore suscipit sequi id optio nemo deserunt tempore. Ab blanditiis libero sed ut eum. Sit doloribus veritatis porro dolor impedit excepturi iste voluptatem. Consequatur iste dolore vero.",
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
      }
    },
    {
      id: 6,
      name: "Liliane Dibbert",
      tel: "1-827-478-9971 x690",
      address: "2762 Devon Run",
      opening_hours: "08:00",
      description: "facilis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.6709769179636",
      viewCounts: 22,
      createdAt: "2019-11-20T06:25:42.923Z",
      updatedAt: "2020-01-08T14:12:46.473Z",
      CategoryId: 7,
      Category: {
        id: 7,
        name: "複合式料理",
        createdAt: "2019-11-20T06:25:42.917Z",
        updatedAt: "2019-11-20T06:25:42.917Z"
      }
    },
    {
      id: 109,
      name: "asd",
      tel: "083-343-7765",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: null,
      createdAt: "2020-01-08T14:03:07.273Z",
      updatedAt: "2020-01-08T14:03:07.273Z",
      CategoryId: 109,
      Category: {
        id: 109,
        name: "cool",
        createdAt: "2019-12-17T11:36:08.937Z",
        updatedAt: "2019-12-17T11:36:08.937Z"
      }
    },
    {
      id: 142,
      name: "test1233",
      tel: "",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: null,
      createdAt: "2020-01-12T11:58:30.114Z",
      updatedAt: "2020-01-12T11:58:30.114Z",
      CategoryId: 7,
      Category: {
        id: 7,
        name: "複合式料理",
        createdAt: "2019-11-20T06:25:42.917Z",
        updatedAt: "2019-11-20T06:25:42.917Z"
      }
    },
    {
      id: 104,
      name: "餐廳種子資料都沒category",
      tel: "020002222",
      address: "st.Road",
      opening_hours: "00:00",
      description: "",
      image: "https://i.imgur.com/9b88oCl.jpg",
      viewCounts: null,
      createdAt: "2019-12-29T04:12:02.664Z",
      updatedAt: "2019-12-29T04:12:02.664Z",
      CategoryId: 7,
      Category: {
        id: 7,
        name: "複合式料理",
        createdAt: "2019-11-20T06:25:42.917Z",
        updatedAt: "2019-11-20T06:25:42.917Z"
      }
    },
    {
      id: 59,
      name: "test11",
      tel: "123",
      address: "123",
      opening_hours: "12:59",
      description: "dd",
      image: "https://i.imgur.com/J977QZe.jpg",
      viewCounts: null,
      createdAt: "2019-11-23T14:37:12.845Z",
      updatedAt: "2020-01-12T17:20:56.999Z",
      CategoryId: 7,
      Category: {
        id: 7,
        name: "複合式料理",
        createdAt: "2019-11-20T06:25:42.917Z",
        updatedAt: "2019-11-20T06:25:42.917Z"
      }
    },
    {
      id: 105,
      name: "testv",
      tel: "020002222",
      address: "st.Road",
      opening_hours: "01:00",
      description: "",
      image: "https://i.imgur.com/7ZpjPIA.jpg",
      viewCounts: null,
      createdAt: "2019-12-29T04:53:35.616Z",
      updatedAt: "2019-12-29T04:53:35.616Z",
      CategoryId: 7,
      Category: {
        id: 7,
        name: "複合式料理",
        createdAt: "2019-11-20T06:25:42.917Z",
        updatedAt: "2019-11-20T06:25:42.917Z"
      }
    }
  ]
};

export default {
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id !== restaurantId
      );
    }
  }
};
</script>
