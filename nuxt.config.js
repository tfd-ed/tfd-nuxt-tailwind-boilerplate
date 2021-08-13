export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TFD Nuxt Tailwind Boilerplate",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  manifest: {
    name: "TFD Nuxt Frontend",
    short_name: "TFD Nuxt",
    description: "Boilerplate for NuxtJs with Tailwind",
    theme_color: "#2C3E50",
    start_url: "/",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/tailwind-components.js" }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/moment",
  ],
  moment: {
    defaultTimezone: "Asia/Phnom_Penh",
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxt/image"],
  // Nuxt Axios
  axios: {
    proxy:
      process.env.NODE_ENV === "production"
        ? false
        : process.env.NODE_ENV !== "staging",
    baseURL: process.env.BASE_URL || "http://localhost:80",
    // proxyHeaders: false,
    // credentials: false
  },
  proxy: {
    "/api/v1/": {
      target: "http://localhost:80/api/v1",
      pathRewrite: { "^/api/v1/": "" },
    },
  },
  // Nuxt Auth Plugin
  auth: {
    redirect: {
      login: "/",
    },
    strategies: {
      local: {
        token: {
          property: "accessToken",
          required: true,
          type: "bearer",
        },
        user: {
          property: "false",
          autoFetch: false,
        },
        endpoints: {
          login: { url: "api/v1/auth/login", method: "post" },
          user: { url: "api/v1/auth/me", method: "get" },
          logout: false,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["epic-spinners"],
  },
  loading: false,
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:80",
    nodeEnv: process.env.NODE_ENV || "development",
  },
};
