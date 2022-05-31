import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import NewClient from "./NewClient";
import Parts from "./Parts";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      NewClient,
      Parts,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
