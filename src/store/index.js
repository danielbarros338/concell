import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import NewClient from "./NewClient";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      NewClient,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
