<template>
  <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
    <NewUser></NewUser>
    <ToolBarLoader v-if="$fetchState.pending"></ToolBarLoader>
    <div v-else class="sticky top-0 z-30 bg-gray-100 p-4">
      <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
        {{ getCurrentHour }},
        {{ loggedInUser.username }}
      </h1>
      <h2 class="text-md text-gray-400">
        Here&#x27;s your TFD&#x27;s Dashboard
      </h2>
      <div
        class="
          flex
          my-6
          items-center
          w-full
          space-y-4
          md:space-x-4 md:space-y-0
          flex-col
          md:flex-row
        "
      >
        <div class="flex items-center w-full md:w-1/2 space-x-4">
          <div class="w-1/2">
            <div
              class="
                shadow-lg
                px-4
                py-6
                w-full
                bg-white
                rounded-2xl
                dark:bg-gray-700
                relative
              "
            >
              <p class="text-2xl text-blue-500 dark:text-white font-bold">
                {{ getUsers.length }}
              </p>
              <p class="text-gray-400 text-sm">Users</p>
            </div>
          </div>
          <div class="w-1/6">
            <div
              class="
                shadow-lg
                px-4
                py-6
                w-full
                cursor-pointer
                bg-white
                rounded-2xl
                dark:bg-gray-700
                relative
                hover:border-blue-600 hover:border-opacity-100
                border-2 border-opacity-0
              "
              @click="showAddNew"
            >
              <svg
                class="mx-auto lg:w-12 md:w-8 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <title>Add New User</title>
                <g fill="#3b82f6">
                  <path
                    d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 28h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4zm-6-14V7l11 11H26z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UserCardsLoader v-if="$fetchState.pending"></UserCardsLoader>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4"
    >
      <div v-for="(user, index) in getUsers" :key="index" class="w-full">
        <div
          class="
            shadow-lg
            rounded-2xl
            px-4
            py-6
            w-full
            bg-white
            dark:bg-gray-700
            relative
          "
          :class="{ 'border-2 border-blue-500': loggedInUser.id === user.id }"
        >
          <p
            class="
              text-sm
              w-max
              text-gray-700
              dark:text-white
              font-semibold
              border-b border-gray-200
              capitalize
            "
          >
            {{ loggedInUser.id === user.id ? "logged user" : "user info" }}
          </p>
          <div class="flex items-end space-x-2 my-6">
            <a href="#" class="block relative">
              <nuxt-img
                alt="profil"
                :src="
                  'https://avatars.dicebear.com/api/male/' +
                  user.username +
                  '.svg?background=%230000ff'
                "
                class="mx-auto object-cover rounded-full h-10 w-10"
              />
            </a>
            <p class="text-4xl text-black dark:text-white font-bold">
              {{ user.name }}
            </p>
          </div>
          <div class="dark:text-white">
            <div
              class="
                flex
                items-center
                pb-2
                mb-2
                text-sm
                sm:space-x-12
                justify-between
                border-b border-gray-200
              "
            >
              <p>Username</p>
              <div class="flex items-end text-xs">
                {{ user.username }}
              </div>
            </div>
            <div
              class="
                flex
                items-center
                pb-2
                mb-2
                text-sm
                sm:space-x-12
                justify-between
                border-b border-gray-200
              "
            >
              <p>Email</p>
              <div class="flex items-end text-xs">
                {{ user.email }}
              </div>
            </div>
            <div
              class="
                flex
                items-center
                mb-2
                pb-2
                text-sm
                space-x-12
                md:space-x-24
                justify-between
                border-b border-gray-200
              "
            >
              <p>Roles</p>
              <div class="flex items-end text-xs">
                {{ user.roles.toLocaleString() }}
              </div>
            </div>
            <div
              class="
                flex
                items-center
                text-sm
                space-x-12
                md:space-x-24
                justify-between
              "
            >
              <p>Created Date</p>
              <div class="flex items-end text-xs">
                {{ $moment(user.createdDate).format("YYYY-MM-DD") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import NewUser from "../components/Forms/new-user";
import ToolBarLoader from "../components/Loadings/tool-bar-loader";
import UserCardsLoader from "../components/Loadings/user-cards-loader";
export default {
  components: { UserCardsLoader, ToolBarLoader, NewUser },
  layout: "home",
  middleware: "auth",
  async fetch() {
    await this.fetchUsers();
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      loggedInUser: "loggedInUser",
      getUsers: "users/getUsers",
    }),
    getCurrentHour() {
      let currentHour = this.$moment().format("HH");
      if (currentHour >= 3 && currentHour < 12) {
        return "Good Morning";
      } else if (currentHour >= 12 && currentHour < 15) {
        return "Good Afternoon";
      } else if (currentHour >= 15 && currentHour < 20) {
        return "Good Evening";
      } else if (currentHour >= 20 && currentHour < 3) {
        return "Good Night";
      } else {
        return "Hello";
      }
    },
  },
  methods: {
    ...mapActions({
      fetchUsers: "users/fetchUsers",
    }),
    showAddNew() {
      this.$modal.show("new-user");
    },
  },
};
</script>
