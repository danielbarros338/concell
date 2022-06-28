import { boot } from "quasar/wrappers";
import BaseInput from "src/components/shared/BaseInput.vue";

export default boot(({ app }) => {
  app.component("BaseInput", BaseInput);
});
