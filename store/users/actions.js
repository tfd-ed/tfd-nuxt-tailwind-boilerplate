export default {
  // eslint-disable-next-line no-unused-vars
  async fetchUsers({ dispatch, commit, getters, rootGetters }) {
    const response = await this.$axios.$get("/api/v1/user?page=0&limit=0");
    commit("SET_USERS", response.items);
  },
  // eslint-disable-next-line no-unused-vars
  async newUser({ dispatch, commit, getters, rootGetters }) {
    const user = getters["getNewUser"];
    const response = await this.$axios.$post("/api/v1/auth/register", {
      username: user.username,
      name: user.name,
      email: user.email,
      password: user.password,
      passwordConfirmation: user.confirmPassword,
    });
    commit("ADD_USER", response);
  },
  // eslint-disable-next-line no-unused-vars
  async updateUser({ dispatch, commit, getters, rootGetters }, id) {
    const users = getters["getUsers"];
    const user = users.find((item) => {
      return item.id === id;
    });
    const response = await this.$axios.$put(`/api/v1/user/${id}`, {
      username: user.username,
      name: user.name,
      email: user.email,
    });
    console.log(response);
    commit("UPDATE_LOGGED_USER", response, { root: true });
  },
  // eslint-disable-next-line no-unused-vars
  async deleteUser({ dispatch, commit, getters, rootGetters }, id) {
    // eslint-disable-next-line no-unused-vars
    const response = await this.$axios.$delete(`/api/v1/user/${id}`);
    commit("REMOVE_USER", id);
  },
};
