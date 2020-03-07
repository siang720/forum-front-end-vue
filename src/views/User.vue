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

const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$XSO2jaN/CC6bab4X205ybuXEN2mZcZJWTg30qZ2Hd1a9RnpZbhAo2",
    isAdmin: true,
    image: null,
    createdAt: "2020-03-02T13:26:14.000Z",
    updatedAt: "2020-03-02T13:26:14.000Z",
    Comments: [
      {
        id: 1,
        text: "Occaecati repellendus rerum et.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 1,
          name: "Mohammed Glover 2",
          tel: "940.606.9575 x93423",
          address: "46394 Anderson Rapids",
          opening_hours: "08:00",
          description:
            "Consequatur aliquam pariatur corrupti quas ducimus corporis. Quasi fugiat magni quia. Nobis ut quaerat necessitatibus cumque voluptas. Asperiores facere ipsum eos dolores impedit facilis dolore qui sit. Laboriosam eius molestiae quos quasi at aliquam autem culpa veritatis. Laudantium odit iusto et aut.\r\n \r\nIpsa quis praesentium similique molestias facilis qui eos itaque unde. Ullam amet ipsum et assumenda deleniti quis quia. Rerum culpa animi. Consequatur eius eius quaerat officiis animi corrupti non. Et voluptas voluptatem qui deleniti. Hic eos consectetur quis ipsam rerum in tenetur.\r\n \r\nEst nemo sint. Molestiae quidem laborum neque explicabo et voluptatem voluptate fugiat consequatur. Rem fugiat cum incidunt omnis corporis. Aut et quas. Ut unde exercitationem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=51.77726463255996",
          viewCounts: 108,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-07T14:26:23.000Z",
          CategoryId: 2
        }
      },
      {
        id: 2,
        text:
          "Ab occaecati laborum ea veritatis aut dignissimos corporis totam.",
        UserId: 1,
        RestaurantId: 2,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 2,
          name: "Mrs. Oma McKenzie",
          tel: "1-948-584-6395",
          address: "41716 Brekke Drives",
          opening_hours: "08:00",
          description: "qui molestias ut",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=68.02566187783687",
          viewCounts: 22,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-07T11:05:51.000Z",
          CategoryId: 5
        }
      },
      {
        id: 3,
        text: "Asperiores aut et deserunt et nesciunt velit dolorum illum aut.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 3,
          name: "Tad Fisher",
          tel: "246-200-7151 x89212",
          address: "42607 Kassulke Plains",
          opening_hours: "08:00",
          description:
            "Earum quia delectus qui odit occaecati praesentium debitis facilis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=58.665899953431854",
          viewCounts: 5,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-07T11:01:29.000Z",
          CategoryId: 3
        }
      },
      {
        id: 7,
        text: "Nesciunt cum saepe quibusdam quis voluptate aut debitis.",
        UserId: 1,
        RestaurantId: 7,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 7,
          name: "Deondre Emard",
          tel: "432.868.8393",
          address: "278 Boyle Crossing",
          opening_hours: "08:00",
          description: "distinctio",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=91.78771583361589",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 1
        }
      },
      {
        id: 10,
        text: "Qui dolorem sapiente tempora dicta.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 10,
          name: "Damion Carroll",
          tel: "326.943.5965 x8521",
          address: "67072 Cruickshank Valleys",
          opening_hours: "08:00",
          description:
            "Possimus ut sit sunt sint ea. Consequuntur sunt consectetur blanditiis provident. Quod dolores voluptas qui est eos sit laborum laboriosam. Nihil aut sit voluptatibus voluptas dolores ut atque culpa. Nam facere qui tempore libero exercitationem.\n \rVoluptates qui rerum ut. Molestias expedita rerum temporibus eos quod commodi amet vitae quibusdam. Ea voluptatum voluptatem et reprehenderit rem animi.\n \rModi provident amet est veritatis beatae. Harum sint non omnis nihil rerum. Adipisci laboriosam perspiciatis ullam. Quod et animi voluptates id beatae repellat veniam atque. Totam quia sed. In voluptate provident.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=34.091318343382994",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 12,
        text: "Laborum velit reprehenderit dolorum sunt excepturi perferendis.",
        UserId: 1,
        RestaurantId: 12,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 12,
          name: "Easter Deckow",
          tel: "(263) 418-4205",
          address: "74239 Hansen Flats",
          opening_hours: "08:00",
          description: "dolorum ipsam fugit",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=34.35051175779271",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 1
        }
      },
      {
        id: 14,
        text: "Dolores quia est voluptates aut ipsam nemo quia accusamus.",
        UserId: 1,
        RestaurantId: 14,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 14,
          name: "Gerardo Bogisich I",
          tel: "1-570-790-1846 x046",
          address: "068 Adams Orchard",
          opening_hours: "08:00",
          description:
            "Quae eum explicabo omnis ab omnis nemo pariatur.\nVoluptatem odio ad voluptatem.\nConsequatur deleniti eaque.\nEos et unde consectetur quos inventore officiis omnis reprehenderit nihil.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=27.785916280639622",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 1
        }
      },
      {
        id: 19,
        text:
          "Totam facere molestiae reprehenderit repudiandae ad tempora est.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 19,
          name: "Virginia Donnelly",
          tel: "(187) 059-1793",
          address: "7980 Durward Isle",
          opening_hours: "08:00",
          description:
            "Nam ea aut atque. Sint possimus sequi cumque enim expedita. Eum est debitis ad. Quo officia non quod quod ut.\n \rUt in qui nihil voluptate perferendis asperiores beatae eos. Consequatur accusamus sit atque maxime corporis vel iusto mollitia dolores. Veniam autem itaque qui consequatur id dolore. Iste eum quod nostrum magnam odit at. Veniam et ea est velit.\n \rVoluptate dolor cum quidem quia possimus fugit quod occaecati. Voluptas modi reiciendis expedita eaque eos. Sed vitae quo sequi officia qui atque. Nulla aut quas non.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=7.909173813393755",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 23,
        text:
          "Adipisci sint minima cupiditate officiis reprehenderit expedita vel consectetur.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 23,
          name: "Ardith Hickle",
          tel: "866-356-9752 x68008",
          address: "32817 Eddie Via",
          opening_hours: "08:00",
          description:
            "Incidunt libero sit voluptate officiis odio rerum. Qui et qui et quo blanditiis mollitia blanditiis fuga et. Non aut error ipsum velit aut magni architecto quia voluptatem.\n \rNesciunt adipisci perferendis dolor necessitatibus eum enim non est facere. Aut eligendi et aspernatur qui nihil qui saepe magni. Vel qui minima asperiores quas consequatur. Consequatur laborum est iure numquam ratione aspernatur officiis. Quia est est sit totam magni error error. Omnis qui atque repellat dolores alias consequatur deserunt ex error.\n \rIste qui odit aliquid vel sit. Eum et iure sint quia adipisci deserunt. Non autem error cum rerum. Illum alias ex debitis qui perferendis aspernatur nobis tempora. Omnis eum sit dolorum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=92.37642311272629",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 32,
        text: "Cum neque reiciendis.",
        UserId: 1,
        RestaurantId: 32,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 32,
          name: "Theodore Kertzmann",
          tel: "918.346.4616",
          address: "769 Zulauf Place",
          opening_hours: "08:00",
          description:
            "Voluptatem amet praesentium dolores est accusamus modi necessitatibus autem voluptates. Sapiente corrupti consequatur voluptate facere temporibus dicta odio atque. Sed ad rerum aliquam ut voluptas quis totam et. Iusto officiis eos cum doloremque in optio. Consequatur repellat qui nemo velit magnam et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=26.391704403897442",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      },
      {
        id: 33,
        text: "Enim cumque est ea quia rerum et culpa fugit.",
        UserId: 1,
        RestaurantId: 33,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 33,
          name: "Waino Powlowski",
          tel: "1-903-616-9136 x0387",
          address: "23543 Bergnaum Parkway",
          opening_hours: "08:00",
          description:
            "Aspernatur est tenetur temporibus quam neque. Dolores magni id ratione laborum est. Quod quibusdam rem id doloremque eligendi ut. Nihil molestias nobis dolores suscipit iure.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.018111415612026",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 5
        }
      },
      {
        id: 34,
        text: "Est molestiae sed rerum fugiat rerum aut.",
        UserId: 1,
        RestaurantId: 34,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 34,
          name: "Elza Vandervort",
          tel: "383.206.7379",
          address: "26465 Klocko Creek",
          opening_hours: "08:00",
          description:
            "Fugit occaecati eum. Ullam id sed magni culpa quibusdam voluptatum quaerat. Blanditiis exercitationem vel quod deleniti explicabo alias perferendis reiciendis esse. Voluptatibus ut neque rerum amet.\n \rEt deleniti ex quasi tempore laboriosam. Nihil et est earum amet atque dolores inventore. Et ut laboriosam fugiat tenetur ut enim autem minus sed. Velit veniam totam deleniti non sequi. Aliquam et magni. Consequatur autem voluptatibus quia illo.\n \rQuia incidunt et. Quia tempora quos dignissimos corporis ut. Error id nihil et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=47.15374784205628",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 37,
        text: "Nam quidem provident voluptas aliquam vero unde culpa.",
        UserId: 1,
        RestaurantId: 37,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 37,
          name: "Elta Leuschke PhD",
          tel: "1-608-540-2705 x72494",
          address: "18586 Don Fords",
          opening_hours: "08:00",
          description:
            "Praesentium incidunt debitis consequatur impedit possimus. Quo dignissimos quae facilis amet doloribus illum architecto ratione. Qui error itaque et blanditiis alias velit placeat veniam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=44.79580627638426",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 5
        }
      },
      {
        id: 38,
        text:
          "Rerum et maiores sunt similique incidunt ut vitae ipsam laudantium.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 38,
          name: "David Kunze",
          tel: "307.580.5744",
          address: "41414 Judah Plaza",
          opening_hours: "08:00",
          description:
            "Eos exercitationem non similique eos enim natus ratione.\nDolor natus enim voluptas error voluptate dicta omnis dolorum.\nNostrum quasi doloribus.\nAut esse et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.314163347475905",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 40,
        text: "Nostrum non et minima.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 40,
          name: "Alexandria Keebler",
          tel: "338.952.6562",
          address: "7671 Araceli Road",
          opening_hours: "08:00",
          description: "aut architecto quo",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=5.366628183151834",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 41,
        text: "Quis et provident alias modi.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 41,
          name: "Jess Mayer",
          tel: "064-236-0191",
          address: "460 Sonia Meadow",
          opening_hours: "08:00",
          description:
            "Ut et hic quia at recusandae quo. Minima tenetur consequatur. Nemo aut quia dolore dolorum qui. Id odit nulla corrupti veritatis eum incidunt rerum quasi ut. Delectus hic incidunt et. Porro ex impedit cumque natus deleniti optio odit beatae et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=1.9859342254706869",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 1
        }
      },
      {
        id: 47,
        text: "Laboriosam ex nihil tempora consequuntur explicabo commodi ex.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 47,
          name: "Mac Sipes",
          tel: "(891) 565-5000",
          address: "7992 Cummings Rapids",
          opening_hours: "08:00",
          description: "labore",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=22.76535975490721",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      },
      {
        id: 52,
        text: "Cum asperiores numquam doloremque dolorum non dolores nihil.",
        UserId: 1,
        RestaurantId: 2,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 2,
          name: "Mrs. Oma McKenzie",
          tel: "1-948-584-6395",
          address: "41716 Brekke Drives",
          opening_hours: "08:00",
          description: "qui molestias ut",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=68.02566187783687",
          viewCounts: 22,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-07T11:05:51.000Z",
          CategoryId: 5
        }
      },
      {
        id: 59,
        text: "Voluptatem iusto reprehenderit.",
        UserId: 1,
        RestaurantId: 9,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 9,
          name: "Rod Conn",
          tel: "(073) 162-7767 x0762",
          address: "5424 Americo Lake",
          opening_hours: "08:00",
          description:
            "Voluptatem veritatis et vero architecto quasi. Natus qui aspernatur blanditiis adipisci recusandae. Omnis enim vitae possimus et illum alias at. Illum ab quo impedit molestiae excepturi voluptatem aut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.01956939080884",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 60,
        text: "Officiis dolor nesciunt laborum dolore est eos est deserunt.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 10,
          name: "Damion Carroll",
          tel: "326.943.5965 x8521",
          address: "67072 Cruickshank Valleys",
          opening_hours: "08:00",
          description:
            "Possimus ut sit sunt sint ea. Consequuntur sunt consectetur blanditiis provident. Quod dolores voluptas qui est eos sit laborum laboriosam. Nihil aut sit voluptatibus voluptas dolores ut atque culpa. Nam facere qui tempore libero exercitationem.\n \rVoluptates qui rerum ut. Molestias expedita rerum temporibus eos quod commodi amet vitae quibusdam. Ea voluptatum voluptatem et reprehenderit rem animi.\n \rModi provident amet est veritatis beatae. Harum sint non omnis nihil rerum. Adipisci laboriosam perspiciatis ullam. Quod et animi voluptates id beatae repellat veniam atque. Totam quia sed. In voluptate provident.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=34.091318343382994",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 65,
        text:
          "Cupiditate tempore tenetur tenetur sit asperiores occaecati fugiat.",
        UserId: 1,
        RestaurantId: 15,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 15,
          name: "Mose Kuphal",
          tel: "(261) 166-6870",
          address: "08033 Bode Prairie",
          opening_hours: "08:00",
          description: "accusantium illum vitae",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=20.968159532990647",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 66,
        text:
          "Possimus illo et molestiae necessitatibus molestiae asperiores et magni.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 16,
          name: "Dortha Jakubowski",
          tel: "1-091-166-6467 x9234",
          address: "80820 Schumm Coves",
          opening_hours: "08:00",
          description: "quis culpa qui",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=31.34167298686812",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      },
      {
        id: 67,
        text: "Magnam laborum sed perferendis vero unde voluptatem libero.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 17,
          name: "Cortez Schimmel",
          tel: "(810) 809-3981 x412",
          address: "1051 Lemuel Glens",
          opening_hours: "08:00",
          description: "esse",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=71.46141050013073",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      },
      {
        id: 70,
        text: "Ea ipsum nulla ut dignissimos qui ut.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 20,
          name: "Rosamond Russel III",
          tel: "543-746-6421 x728",
          address: "284 Quigley Points",
          opening_hours: "08:00",
          description: "magni",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=71.50032817856493",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 72,
        text:
          "Explicabo quos magnam suscipit quibusdam consequuntur sit laboriosam iure possimus.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 22,
          name: "Kennedy Von II",
          tel: "059.559.7919",
          address: "889 Ashtyn Manor",
          opening_hours: "08:00",
          description: "Et nobis qui sequi harum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=77.22818579402326",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 74,
        text: "Iure quam animi illo quaerat quos neque delectus maiores eos.",
        UserId: 1,
        RestaurantId: 24,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 24,
          name: "Nicola Kemmer",
          tel: "1-695-039-7175 x35382",
          address: "932 Heidenreich Point",
          opening_hours: "08:00",
          description: "velit eius eos",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=94.01603655421607",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 76,
        text: "Voluptatibus alias est natus.",
        UserId: 1,
        RestaurantId: 26,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 26,
          name: "Talon Hamill",
          tel: "638.635.2238",
          address: "21995 Kuhn Terrace",
          opening_hours: "08:00",
          description:
            "Quod eos et et accusantium odio vitae.\nOptio animi nesciunt error voluptatem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=18.431153519303912",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      },
      {
        id: 85,
        text: "Et provident consequatur earum et deserunt et qui fuga quod.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 35,
          name: "Loma Keeling",
          tel: "1-310-081-6528 x587",
          address: "774 Mariam Locks",
          opening_hours: "08:00",
          description:
            "Necessitatibus voluptatem et quo qui. Perspiciatis repudiandae maxime rerum atque explicabo. Dicta voluptatem aut dolor eos dolorem dolores et corporis. At quo quisquam dolorum aperiam molestiae non amet sed maxime. Quia ut commodi omnis aut velit eos. A omnis et qui quae consequatur iure enim quia ea.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=60.25608125279558",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 1
        }
      },
      {
        id: 86,
        text:
          "Repellat dolores illum molestiae accusamus aut quas in voluptatem.",
        UserId: 1,
        RestaurantId: 36,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 36,
          name: "Katlynn Boehm",
          tel: "930.713.6976 x1612",
          address: "04915 Ronny Loaf",
          opening_hours: "08:00",
          description: "ipsum officiis doloribus",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=13.814182527951413",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 88,
        text: "Vero asperiores maiores qui aperiam assumenda.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 38,
          name: "David Kunze",
          tel: "307.580.5744",
          address: "41414 Judah Plaza",
          opening_hours: "08:00",
          description:
            "Eos exercitationem non similique eos enim natus ratione.\nDolor natus enim voluptas error voluptate dicta omnis dolorum.\nNostrum quasi doloribus.\nAut esse et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.314163347475905",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 89,
        text: "Nobis iure exercitationem aut voluptas illo corporis.",
        UserId: 1,
        RestaurantId: 39,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 39,
          name: "Vinnie Quitzon",
          tel: "1-108-884-1379",
          address: "94745 Adele Shoal",
          opening_hours: "08:00",
          description:
            "Autem molestias nihil rerum omnis quis. Sapiente molestias numquam et dolore non atque. Minima deleniti modi occaecati iste ea consequatur itaque. Ducimus eum voluptatem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=76.49464026398829",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      },
      {
        id: 93,
        text: "Hic quis aspernatur culpa quae rem.",
        UserId: 1,
        RestaurantId: 43,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 43,
          name: "Dario Denesik",
          tel: "110.511.3445",
          address: "8194 Quigley Underpass",
          opening_hours: "08:00",
          description:
            "Aliquam tenetur laudantium et voluptas nam.\nQuia et non.\nReprehenderit sunt est minima quas sed nihil.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=69.54673026185058",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 94,
        text: "Facilis labore corporis.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 44,
          name: "Milford Lind",
          tel: "1-333-630-4855 x625",
          address: "73266 Tyree Oval",
          opening_hours: "08:00",
          description: "eveniet porro dolores",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=25.177208616667237",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 95,
        text:
          "Architecto porro optio enim beatae suscipit quis minus eaque nobis.",
        UserId: 1,
        RestaurantId: 45,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 45,
          name: "Zoila Yundt",
          tel: "1-154-272-8338 x86392",
          address: "215 Weissnat Ways",
          opening_hours: "08:00",
          description:
            "Officiis voluptates earum sit vel accusantium voluptatum rerum. Quod a sunt facilis est. Aut earum et voluptatem occaecati quos molestiae corrupti dolorum sit.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=96.52339124369438",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 99,
        text: "Quia et velit et adipisci labore aspernatur cupiditate.",
        UserId: 1,
        RestaurantId: 49,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 49,
          name: "Angela Franecki",
          tel: "1-269-239-3679",
          address: "459 Twila Parkways",
          opening_hours: "08:00",
          description:
            "Dolores nihil sit ipsam numquam non atque maxime. Odit reiciendis modi aliquam quas est iure accusantium doloribus harum. Rerum quia dicta ut sunt aut nihil enim exercitationem. Vero quae est est hic ipsam esse numquam. Accusamus et vitae totam ullam aut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=61.38984522690678",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 108,
        text: "Ut fuga omnis excepturi saepe doloremque non laborum quas.",
        UserId: 1,
        RestaurantId: 8,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 8,
          name: "Cleta Schaden",
          tel: "945-148-5464 x49926",
          address: "03271 Rex Mountains",
          opening_hours: "08:00",
          description: "Odit quod aliquam omnis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=60.81213324499106",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 5
        }
      },
      {
        id: 111,
        text: "Exercitationem non id recusandae tempora recusandae et dolorum.",
        UserId: 1,
        RestaurantId: 11,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 11,
          name: "Ressie Emard",
          tel: "1-470-923-8504 x669",
          address: "604 Grady Islands",
          opening_hours: "08:00",
          description: "Minus rerum pariatur corrupti aut rerum porro dolorem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=86.63620664290437",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 113,
        text: "Ut quis harum delectus delectus aut rem sequi alias.",
        UserId: 1,
        RestaurantId: 13,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 13,
          name: "Nyasia Barrows",
          tel: "1-558-982-2108",
          address: "94513 Collins Drive",
          opening_hours: "08:00",
          description:
            "Tempora libero consequatur mollitia aut iure dolorem. In sunt quidem. Eos ullam consequatur rerum dicta libero earum quasi. Ipsum quisquam libero minima aliquid sapiente quis occaecati necessitatibus. Qui quibusdam laudantium consequatur deserunt qui vel sed ex sapiente. Tenetur quibusdam perferendis doloremque ipsam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=11.61680907323146",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 5
        }
      },
      {
        id: 120,
        text: "Totam nihil explicabo.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 20,
          name: "Rosamond Russel III",
          tel: "543-746-6421 x728",
          address: "284 Quigley Points",
          opening_hours: "08:00",
          description: "magni",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=71.50032817856493",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 125,
        text: "Voluptas deserunt quis nemo modi.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 25,
          name: "Adaline Stracke",
          tel: "1-455-325-7994 x240",
          address: "833 Nova Lake",
          opening_hours: "08:00",
          description: "reiciendis",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=52.39636910439831",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 5
        }
      },
      {
        id: 128,
        text:
          "Sequi accusantium libero ab voluptatem qui perferendis quidem tempora magni.",
        UserId: 1,
        RestaurantId: 28,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 28,
          name: "Quinten Will",
          tel: "831.479.9567 x882",
          address: "0169 Paige Brooks",
          opening_hours: "08:00",
          description:
            "Fugit eos sunt a magnam accusamus quae labore et dolores. Reiciendis magnam dolorem maxime sit enim et ex ullam est. Et est quia debitis inventore similique officia. Ullam voluptatum in accusantium dicta fugiat qui consequatur. Consectetur quidem laboriosam. Autem aliquam voluptatem esse veniam ea.\n \rDolorum quia vero ea et repellendus facere. Dignissimos nesciunt harum non magni voluptatem. Ullam voluptatem architecto aut temporibus unde aliquid et eos impedit. Sit veritatis voluptas totam velit. Nulla tempora similique.\n \rSaepe repudiandae dolores et distinctio. Id dolores deleniti. Laboriosam dolores sit ullam sit sunt iusto molestiae ullam. Qui quos voluptatem consequatur ea consectetur consequatur iure qui exercitationem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=27.96715904502922",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 1
        }
      },
      {
        id: 129,
        text: "Pariatur officia ipsum ut incidunt est.",
        UserId: 1,
        RestaurantId: 29,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 29,
          name: "Mrs. Eryn Carroll",
          tel: "(415) 951-4592 x806",
          address: "087 Foster Causeway",
          opening_hours: "08:00",
          description: "qui",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=31.056434955711843",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 5
        }
      },
      {
        id: 132,
        text: "Dolorum numquam officia voluptatem a magni iure quod.",
        UserId: 1,
        RestaurantId: 32,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 32,
          name: "Theodore Kertzmann",
          tel: "918.346.4616",
          address: "769 Zulauf Place",
          opening_hours: "08:00",
          description:
            "Voluptatem amet praesentium dolores est accusamus modi necessitatibus autem voluptates. Sapiente corrupti consequatur voluptate facere temporibus dicta odio atque. Sed ad rerum aliquam ut voluptas quis totam et. Iusto officiis eos cum doloremque in optio. Consequatur repellat qui nemo velit magnam et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=26.391704403897442",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      },
      {
        id: 134,
        text: "Exercitationem omnis sit non earum vitae fuga.",
        UserId: 1,
        RestaurantId: 34,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 34,
          name: "Elza Vandervort",
          tel: "383.206.7379",
          address: "26465 Klocko Creek",
          opening_hours: "08:00",
          description:
            "Fugit occaecati eum. Ullam id sed magni culpa quibusdam voluptatum quaerat. Blanditiis exercitationem vel quod deleniti explicabo alias perferendis reiciendis esse. Voluptatibus ut neque rerum amet.\n \rEt deleniti ex quasi tempore laboriosam. Nihil et est earum amet atque dolores inventore. Et ut laboriosam fugiat tenetur ut enim autem minus sed. Velit veniam totam deleniti non sequi. Aliquam et magni. Consequatur autem voluptatibus quia illo.\n \rQuia incidunt et. Quia tempora quos dignissimos corporis ut. Error id nihil et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=47.15374784205628",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 3
        }
      },
      {
        id: 138,
        text: "Et est vero enim.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 38,
          name: "David Kunze",
          tel: "307.580.5744",
          address: "41414 Judah Plaza",
          opening_hours: "08:00",
          description:
            "Eos exercitationem non similique eos enim natus ratione.\nDolor natus enim voluptas error voluptate dicta omnis dolorum.\nNostrum quasi doloribus.\nAut esse et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.314163347475905",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 4
        }
      },
      {
        id: 142,
        text:
          "Quaerat saepe et voluptate labore excepturi rerum aut id necessitatibus.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 42,
          name: "Eula Pagac",
          tel: "620-088-4474 x1219",
          address: "085 Ward Island",
          opening_hours: "08:00",
          description:
            "Omnis rem omnis quos dolorem.\nVoluptatem incidunt et consequatur ut.\nVoluptates nisi facilis ad dolor facilis.\nDolores non nihil et accusamus.\nReiciendis ex accusamus labore voluptatum est a eaque quia.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=16.00602651536076",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      },
      {
        id: 146,
        text: "Voluptas iste eos accusamus qui.",
        UserId: 1,
        RestaurantId: 46,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 46,
          name: "Vernon Kshlerin PhD",
          tel: "(880) 367-2019 x822",
          address: "7141 Wolff Squares",
          opening_hours: "08:00",
          description:
            "Molestiae tempore totam labore eligendi nam aperiam culpa. Tempora odit consequatur repellendus optio cum ex quasi. Aliquam voluptatem ut ut non quaerat. Distinctio alias libero sit quidem et molestiae quia ut error. Ea aspernatur sapiente ab laudantium. Aliquam quod quod provident culpa aut ipsam possimus dolorem commodi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=38.43949098284243",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 5
        }
      },
      {
        id: 147,
        text:
          "Consectetur harum a nesciunt sunt omnis nisi explicabo expedita.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Restaurant: {
          id: 47,
          name: "Mac Sipes",
          tel: "(891) 565-5000",
          address: "7992 Cummings Rapids",
          opening_hours: "08:00",
          description: "labore",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=22.76535975490721",
          viewCounts: 0,
          createdAt: "2020-03-02T13:26:15.000Z",
          updatedAt: "2020-03-02T13:26:15.000Z",
          CategoryId: 2
        }
      }
    ],
    FavoritedRestaurants: [
      {
        id: 2,
        name: "Mrs. Oma McKenzie",
        tel: "1-948-584-6395",
        address: "41716 Brekke Drives",
        opening_hours: "08:00",
        description: "qui molestias ut",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=68.02566187783687",
        viewCounts: 22,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-07T11:05:51.000Z",
        CategoryId: 5,
        Favorite: {
          UserId: 1,
          RestaurantId: 2,
          createdAt: "2020-03-07T10:25:33.000Z",
          updatedAt: "2020-03-07T10:25:33.000Z"
        }
      },
      {
        id: 1,
        name: "Mohammed Glover 2",
        tel: "940.606.9575 x93423",
        address: "46394 Anderson Rapids",
        opening_hours: "08:00",
        description:
          "Consequatur aliquam pariatur corrupti quas ducimus corporis. Quasi fugiat magni quia. Nobis ut quaerat necessitatibus cumque voluptas. Asperiores facere ipsum eos dolores impedit facilis dolore qui sit. Laboriosam eius molestiae quos quasi at aliquam autem culpa veritatis. Laudantium odit iusto et aut.\r\n \r\nIpsa quis praesentium similique molestias facilis qui eos itaque unde. Ullam amet ipsum et assumenda deleniti quis quia. Rerum culpa animi. Consequatur eius eius quaerat officiis animi corrupti non. Et voluptas voluptatem qui deleniti. Hic eos consectetur quis ipsam rerum in tenetur.\r\n \r\nEst nemo sint. Molestiae quidem laborum neque explicabo et voluptatem voluptate fugiat consequatur. Rem fugiat cum incidunt omnis corporis. Aut et quas. Ut unde exercitationem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=51.77726463255996",
        viewCounts: 108,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-07T14:26:23.000Z",
        CategoryId: 2,
        Favorite: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2020-03-07T10:45:52.000Z",
          updatedAt: "2020-03-07T10:45:52.000Z"
        }
      }
    ],
    Followers: [
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$01DNhMmshCZEjS9SlKy4ce36XC0xBZbSuYvhM.HOQ6jtQsbvbISUm",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-02T13:26:14.000Z",
        updatedAt: "2020-03-02T13:26:14.000Z",
        Followship: {
          followerId: 1,
          followingId: 2,
          createdAt: "2020-03-02T16:49:38.000Z",
          updatedAt: "2020-03-02T16:49:38.000Z"
        }
      }
    ],
    Followings: [
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$01DNhMmshCZEjS9SlKy4ce36XC0xBZbSuYvhM.HOQ6jtQsbvbISUm",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-02T13:26:14.000Z",
        updatedAt: "2020-03-02T13:26:14.000Z",
        Followship: {
          followerId: 1,
          followingId: 2,
          createdAt: "2020-03-02T16:49:38.000Z",
          updatedAt: "2020-03-02T16:49:38.000Z"
        }
      },
      {
        id: 3,
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$OuzzHhmIKLqvwXEFFEXuHeCpNsIXMS4Nd0KvcjJKVwVknGfojWu06",
        isAdmin: false,
        image: null,
        createdAt: "2020-03-02T13:26:15.000Z",
        updatedAt: "2020-03-02T13:26:15.000Z",
        Followship: {
          followerId: 1,
          followingId: 3,
          createdAt: "2020-03-02T16:54:32.000Z",
          updatedAt: "2020-03-02T16:54:32.000Z"
        }
      }
    ]
  },
  isFollowed: false
};

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
    fetchUser(userId) {
      console.log(userId);
      // TODO: 串接api拿資料

      // 資料倒回data
      this.user.profile = dummyData.profile;
      this.user.isFollowed = dummyData.isFollowed;
    }
  }
};
</script>
