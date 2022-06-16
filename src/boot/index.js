import Vuex from "vuex";
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  app.use(Vuex);
});
