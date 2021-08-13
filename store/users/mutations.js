import { updateField } from "vuex-map-fields";

export default {
  SET_USERS(state, users) {
    state.users = users;
  },
  ADD_USER(state, user) {
    state.users.push(user);
  },
  CLEAR_USER_FORM(state) {
    state.newUser = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  updateField,
};
