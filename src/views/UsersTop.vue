<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr />
    <div class="row text-center">
      <!-- 使用者卡片 UserCard-->
      <UserCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import UserCard from "../components/UserCard";

const dummyData = {
  users: [
    {
      id: 5,
      name: "lib4",
      email: "lib4@example.com",
      password: "$2a$10$wgBCTWhLICljONe9dThbB.IQYVrg0yo6ryzQfQIGXQWrUVx0y5gbq",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T07:25:42.952Z",
      updatedAt: "2019-11-20T07:25:42.952Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 5,
            createdAt: "2020-01-06T13:29:19.347Z",
            updatedAt: "2020-01-06T13:29:19.347Z"
          }
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z",
          Followship: {
            followerId: 2,
            followingId: 5,
            createdAt: "2019-12-08T15:35:54.743Z",
            updatedAt: "2019-12-08T15:35:54.743Z"
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: true
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
      isAdmin: false,
      image: null,
      createdAt: "2019-11-20T06:25:42.685Z",
      updatedAt: "2019-11-21T09:55:30.970Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: "2020-01-21T12:52:03.002Z",
            updatedAt: "2020-01-21T12:52:03.002Z"
          }
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z",
          Followship: {
            followerId: 2,
            followingId: 2,
            createdAt: "2019-12-08T15:48:13.364Z",
            updatedAt: "2019-12-08T15:48:13.364Z"
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: true
    },
    {
      id: 11,
      name: "root2",
      email: "root234@example.com",
      password: "$2a$10$vsMynB05b9ehsom/gnRtcOvBlYDj2oIKnf83.kGOumqoB2DGXPPSK",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-22T08:36:56.461Z",
      updatedAt: "2019-11-22T08:36:56.461Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 11,
            createdAt: "2020-01-06T13:29:14.283Z",
            updatedAt: "2020-01-06T13:29:14.283Z"
          }
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z",
          Followship: {
            followerId: 2,
            followingId: 11,
            createdAt: "2019-12-08T15:47:59.381Z",
            updatedAt: "2019-12-08T15:47:59.381Z"
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: true
    },
    {
      id: 1,
      name: "root1",
      email: "root@example.com",
      password: "$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G",
      isAdmin: true,
      image: null,
      createdAt: "2019-11-20T06:25:42.456Z",
      updatedAt: "2019-11-25T06:53:28.542Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 1,
            createdAt: "2019-12-09T01:27:12.949Z",
            updatedAt: "2019-12-09T01:27:12.949Z"
          }
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z",
          Followship: {
            followerId: 2,
            followingId: 1,
            createdAt: "2019-12-08T15:49:34.851Z",
            updatedAt: "2019-12-08T15:49:34.851Z"
          }
        }
      ],
      FollowerCount: 2,
      isFollowed: true
    },
    {
      id: 6,
      name: "libtest7",
      email: "lib5@example.com",
      password: "$2a$10$llXbyURDYwEAZtfAhwHcxOfaneQms1wTtMWiRYqTph5Iec7iL3bUy",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T07:26:36.838Z",
      updatedAt: "2019-11-21T09:43:00.954Z",
      Followers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z",
          Followship: {
            followerId: 2,
            followingId: 6,
            createdAt: "2019-12-08T15:48:14.947Z",
            updatedAt: "2019-12-08T15:48:14.947Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: false
    },
    {
      id: 10,
      name: "libtest5",
      email: "libtest5@example.com",
      password: "$2a$10$uDas2Caoev71EoPqLdTy5./Y8fy5kMsatuYiOsxBK/aBAibmEpR96",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T07:41:04.233Z",
      updatedAt: "2019-11-20T07:41:04.233Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 10,
            createdAt: "2019-12-09T01:29:22.314Z",
            updatedAt: "2019-12-09T01:29:22.314Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$8SSanoaxZCd/VEJFxxKShuWVFzU6JyuwvYDD6bP4UheZDbSWibPea",
      isAdmin: false,
      image: null,
      createdAt: "2019-11-20T06:25:42.909Z",
      updatedAt: "2019-11-20T06:25:42.909Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 3,
            createdAt: "2020-01-06T13:13:43.274Z",
            updatedAt: "2020-01-06T13:13:43.274Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 7,
      name: "libtest",
      email: "libtest@example.com",
      password: "$2a$10$XnxP9x.3MLAt3rlJpnQA1eT6P.p1e/1oBDOGUYbBKT1EFd4Kctma2",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T07:27:34.815Z",
      updatedAt: "2019-11-20T07:27:34.815Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 7,
            createdAt: "2020-01-06T13:29:10.500Z",
            updatedAt: "2020-01-06T13:29:10.500Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 8,
      name: "libtest1",
      email: "libtest1@example.com",
      password: "$2a$10$VUnjsvkS54lQpIWj8j.FpuLPja05KrRYAs6NxxMHrVEJ./48rByxO",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T07:31:27.326Z",
      updatedAt: "2019-11-20T07:31:27.326Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 8,
            createdAt: "2020-01-06T13:08:26.421Z",
            updatedAt: "2020-01-06T13:08:26.421Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 12,
      name: "caesar test",
      email: "111@111",
      password: "$2a$10$FejnHvP2FXXr8D5acuUBPO4UJz1H9Xc2gZnfvo3Aj25zhxST9BIpS",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-23T12:18:32.180Z",
      updatedAt: "2019-11-23T12:18:32.180Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 12,
            createdAt: "2020-01-06T13:11:13.610Z",
            updatedAt: "2020-01-06T13:11:13.610Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 9,
      name: "libtest2",
      email: "libtest2@example.com",
      password: "$2a$10$Fh/WFu8EEiAXyzrFbSyHRuHmzUIlasisWYXY8n7lr3gTd6QXvrAO6",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T07:36:36.213Z",
      updatedAt: "2019-11-20T07:36:36.213Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 9,
            createdAt: "2019-11-29T02:38:13.573Z",
            updatedAt: "2019-11-29T02:38:13.573Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    },
    {
      id: 4,
      name: "lib8186",
      email: "lib3@example.com",
      password: "$2a$10$rjYLC02gZK3Ry2/.sPFfqeF02C7mQjKc5vDcybqDVlvYSw96lepda",
      isAdmin: null,
      image: null,
      createdAt: "2019-11-20T06:37:12.860Z",
      updatedAt: "2019-11-20T06:48:50.976Z",
      Followers: [
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
          Followship: {
            followerId: 1,
            followingId: 4,
            createdAt: "2020-01-06T13:08:51.579Z",
            updatedAt: "2020-01-06T13:08:51.579Z"
          }
        }
      ],
      FollowerCount: 1,
      isFollowed: true
    }
  ]
};

export default {
  components: {
    NavTabs,
    UserCard
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    }
  }
};
</script>
