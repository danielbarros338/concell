<template>
  <q-page class="login__container">
    <transition-group
      enter-active-class="animated delay-1s bounceIn"
      leave-active-class="animated bounceOut"
    >
      <!-- Fazer correção da movimentação lateral -->
      <SignIn v-if="signInCard" @callSignUp="changeCards" />
      <SignUp v-if="signUpCard" @callSignIn="changeCards" />
    </transition-group>
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
/* Transition */
.lazy {
  display: none;
  transition: 2s ease-in;
}
</style>
