<template>
  <q-page class="login__container">
    <transition>
      <SignIn v-if="signInCard" @callSignUp="changeCards" />
      <SignUp v-if="signUpCard" @callSignIn="changeCards" />
    </transition>
  </q-page>
</template>

<script>
import SignIn from "components/home/SignInComponent.vue";
import SignUp from "components/home/SignUpComponent.vue";

export default {
  name: "LoginComponent",
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      signInCard: true,
      signUpCard: false,
    };
  },
  methods: {
    changeCards(event) {
      if (event) {
        this.signInCard = !this.signInCard;
        this.signUpCard = !this.signUpCard;
      }
    },
  },
};
</script>

<style scoped>
/* Containers */
.login__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
