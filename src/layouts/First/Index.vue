<template>
  <div id="app" >
    <Header class="container" />
    <router-view style="min-height:300px;color:white;" />
    <Footer class="container"/>
    <LoginSignup v-if="loginvis" @hide="loginvis=false"/>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import LoginSignup from "./components/LoginSignup.vue";
import Footer from "./components/footer.vue";
export default {
  components: {
    Header,
    Footer,
    LoginSignup
  },
  data() {
    return {
      loginvis: false
    };
  },
  created() {
    this.EventBus.$on("showlogin", () => (this.loginvis = true));
  }
};
</script>
<style>
#app {
  font-family: "IranSans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;;
}
</style>