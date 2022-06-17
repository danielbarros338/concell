import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import NewClient from "./NewClient";
import Parts from "./Parts";
import Problems from "./Problems";
import Person from "./Person";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      NewClient,
      Parts,
      Problems,
      Person,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
