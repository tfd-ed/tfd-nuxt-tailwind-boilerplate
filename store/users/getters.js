import { getField } from "vuex-map-fields";
export default {
  getUsers: (state) => state.users,
  getNewUser: (state) => state.newUser,
  getField,
};
