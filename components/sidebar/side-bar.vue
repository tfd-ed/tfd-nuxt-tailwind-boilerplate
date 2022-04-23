<template>
  <div class="h-screen hidden lg:block shadow-lg relative w-80">
    <div class="bg-white h-full dark:bg-gray-700">
      <div class="flex items-center justify-start pt-6 ml-8">
        <img class="w-7 mr-3" src="https://i.imgur.com/SZqGIpL.png" />
        <p class="font-bold dark:text-white text-xl">Dashboard</p>
      </div>
      <nav class="mt-6">
        <div>
          <SideBarItem name="Home" link="/dashboard">
            <span class="text-left">
              <svg
                fill="currentColor"
                height="20"
                viewBox="0 0 1792 1792"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"
                ></path>
              </svg>
            </span>
          </SideBarItem>
          <SideBarItem name="Document" link="/document">
            <span class="text-left">
              <svg
                fill="currentColor"
                height="20"
                viewBox="0 0 64 64"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M57,15H7c-1.105,0-2,0.895-2,2v42c0,1.105,0.895,2,2,2h50c1.105,0,2-0.895,2-2V17C59,15.895,58.105,15,57,15 z M43,34c0,0.553-0.448,1-1,1H22c-0.552,0-1-0.447-1-1v-5c0-0.553,0.448-1,1-1s1,0.447,1,1v4h18v-4c0-0.553,0.448-1,1-1s1,0.447,1,1 V34z"
                  fill="#2f2827"
                ></path>
                <path
                  d="M52,8H12c-0.552,0-1,0.448-1,1v4h42V9C53,8.448,52.552,8,52,8z"
                ></path>
                <path
                  d="M46,3H18c-0.552,0-1,0.448-1,1v2h30V4C47,3.448,46.552,3,46,3z"
                ></path>
              </svg>
            </span>
          </SideBarItem>
          <SideBarItem name="Store" link="/store">
            <span class="text-left">
              <svg
                fill="currentColor"
                height="20"
                viewBox="0 0 64 64"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M57.975,61.774L52,35.886V19c0-0.552-0.447-1-1-1h-6v8c0,1.654-1.346,3-3,3s-3-1.346-3-3v-8H25v8 c0,1.654-1.346,3-3,3s-3-1.346-3-3v-8h-6c-0.553,0-1,0.448-1,1v16.886L6.025,61.774c-0.068,0.297,0.002,0.609,0.192,0.848 C6.407,62.86,6.695,63,7,63h50c0.305,0,0.593-0.139,0.782-0.377C57.973,62.384,58.043,62.072,57.975,61.774z"
                  fill="#2f2827"
                ></path>
                <path
                  d="M42,27c-0.553,0-1-0.448-1-1V12c0-4.962-4.037-9-9-9s-9,4.038-9,9v14c0,0.552-0.447,1-1,1 s-1-0.448-1-1V12c0-6.065,4.935-11,11-11s11,4.935,11,11v14C43,26.552,42.553,27,42,27z"
                ></path>
              </svg>
            </span>
          </SideBarItem>
          <a
            class="
              w-full
              text-gray-800
              flex
              items-center
              pl-6
              p-2
              my-2
              transition-colors
              duration-200
              justify-start
              hover:text-gray-800
              border-l-4 border-transparent
            "
            href="#"
            @click="logout"
          >
            <span class="text-left">
              <svg
                fill="currentColor"
                height="20"
                viewBox="0 0 36 36"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 16.5H11.74l8.38-8.38L18 6 6 18l12 12 2.12-2.12-8.38-8.38H30v-3z"
                ></path>
              </svg>
            </span>
            <span class="mx-4 text-sm font-normal"> Logout </span>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import SideBarItem from "./side-bar-item";
export default {
  name: "SideBar",
  components: { SideBarItem },
  methods: {
    async logout() {
      window.localStorage.clear();
      await this.$auth.logout();
    },
  },
};
</script>
