import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import NewClient from "./NewClient";
import Parts from "./Parts";
import Problems from "./Problems";
<<<<<<< HEAD
import Person from "./Person";
=======
>>>>>>> c31dfd2582a9009b90d136738d9ca68ca4b42c3c

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      NewClient,
      Parts,
      Problems,
<<<<<<< HEAD
      Person,
=======
>>>>>>> c31dfd2582a9009b90d136738d9ca68ca4b42c3c
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
