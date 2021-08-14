<template>
  <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
    <t-alert
      :show="ifError"
      variant="danger"
      :timeout="3000"
      @hidden="ifError = false"
    >
      <span v-html="errorMsg"></span>
    </t-alert>
    <t-alert
      :show="isSuccess"
      :timeout="3000"
      variant="success"
      @hidden="isSuccess = false"
    >
      Successfully Updated
    </t-alert>
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
                {{ users.length }}
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
      <div
        v-for="(user, index) in users"
        :key="index"
        class="w-full"
        :class="{
          'col-start-1 row-start-1': loggedInUser.id === user.id,
        }"
      >
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
          :class="{
            'border-2 border-blue-500': loggedInUser.id === user.id,
          }"
        >
          <div class="flex flex-row justify-between border-b border-gray-200">
            <p
              class="
                text-sm text-gray-700
                dark:text-white
                font-semibold
                capitalize
              "
            >
              {{ loggedInUser.id === user.id ? "logged user" : "user info" }}
            </p>
            <div class="flex flex-row order-last">
              <svg
                v-if="!editId && editId !== user.id"
                class="mr-2 lg:w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                @click="setEditId(user.id)"
              >
                <title>Edit User</title>
                <g>
                  <path
                    fill="#444444"
                    d="M7.46311,45.08282L6.38028,42l-3.08282-1.08282l-0.6614,3.66536 c-0.12386,0.68639,0.47529,1.28554,1.16168,1.16169L7.46311,45.08282z"
                  ></path>
                  <polygon
                    fill="#EAD8C5"
                    points="15.08731,43.70703 13.31778,35.0625 4.67325,33.29297 3.29746,40.91718 7.46311,45.08282 "
                  ></polygon>
                  <path
                    fill="#E86C60"
                    d="M45.08731,12.29297l-9-9c-0.39062-0.39062-1.02344-0.39062-1.41406,0l-6,6l10.41406,10.41406l6-6 C45.47794,13.31641,45.47794,12.68359,45.08731,12.29297z"
                  ></path>
                  <polygon
                    fill="#EFD358"
                    points="28.67325,9.29297 4.67325,33.29297 10.63028,39.25 34.58862,15.20833 "
                  ></polygon>
                  <rect
                    x="7.51323"
                    y="25.42159"
                    transform="matrix(0.70711 -0.70711 0.70711 0.70711 -13.40816 25.83688)"
                    fill="#D8BB44"
                    width="33.94112"
                    height="7.36385"
                  ></rect>
                  <rect
                    x="32.88039"
                    y="7.13615"
                    transform="matrix(0.70711 -0.70711 0.70711 0.70711 -0.32974 28.20393)"
                    fill="#C9514B"
                    width="1.99979"
                    height="14.72771"
                  ></rect>
                </g>
              </svg>
              <svg
                v-if="editId === user.id"
                class="lg:w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                @click="doneUpdate(editId)"
              >
                <title>Done</title>
                <g fill="#3b82f6">
                  <path
                    d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z"
                  ></path>
                </g>
              </svg>
              <svg
                v-if="editId === user.id"
                class="lg:w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                @click="cancelEdit"
              >
                <title>Cancel</title>
                <g fill="#ef4444">
                  <path
                    d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  ></path>
                </g>
              </svg>
              <svg
                v-if="
                  loggedInUser.roles.includes('ADMIN') &&
                  user.id !== loggedInUser.id &&
                  !editId
                "
                class="lg:w-6 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                @click="deleteUser(user.id)"
              >
                <title>Delete User</title>
                <g fill="#ef4444">
                  <path
                    d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="flex items-end space-x-2 my-6 justify-between">
            <a href="#" class="block relative">
              <!--              Generate random avatar on https://avatars.dicebear.com/docs/http-api-->
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
            <p
              v-if="!editId || editId !== user.id"
              class="text-4xl text-black dark:text-white font-bold text-right"
            >
              {{ user.name }}
            </p>
            <t-input
              v-else
              v-model="user.name"
              type="text"
              classes="text-3xl text-black dark:text-white font-bold text-right border-gray-300"
            />
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
              <div
                v-if="!editId || editId !== user.id"
                class="flex items-end text-xs"
              >
                {{ user.username }}
              </div>
              <t-input
                v-else
                v-model="user.username"
                type="text"
                classes="flex items-end text-md text-right border-gray-300"
              />
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
              <div
                v-if="!editId || editId !== user.id"
                class="flex items-end text-xs"
              >
                {{ user.email }}
              </div>
              <t-input
                v-else
                v-model="user.email"
                type="email"
                classes="flex items-end text-md text-right border-gray-300"
              />
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
import { createHelpers } from "vuex-map-fields";
const { mapMultiRowFields } = createHelpers({
  getterType: "users/getField",
  mutationType: "users/updateField",
});
export default {
  components: { UserCardsLoader, ToolBarLoader, NewUser },
  layout: "home",
  middleware: "auth",
  data() {
    return {
      editId: "",
      errorMsg: "",
      ifError: false,
      isSuccess: false,
    };
  },
  async fetch() {
    await this.fetchUsers();
  },
  computed: {
    ...mapMultiRowFields(["users"]),
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      loggedInUser: "loggedInUser",
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
      updateUser: "users/updateUser",
      deleteUser: "users/deleteUser",
    }),
    showAddNew() {
      this.$modal.show("new-user");
    },
    setEditId(id) {
      this.editId = id;
    },
    cancelEdit() {
      this.editId = "";
    },
    async doneUpdate(id) {
      try {
        await this.updateUser(id);
        this.isSuccess = true;
      } catch (error) {
        this.ifError = true;
        console.log(error.response.data.message);
        if (Array.isArray(error.response.data.message)) {
          this.errorMsg = error.response.data.message.join("<br />");
        } else {
          this.errorMsg = error.response.data.message;
        }
        this.$fetch();
      }
      this.cancelEdit();
    },
  },
};
</script>
