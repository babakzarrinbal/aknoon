<template>
  <div id="app" >
    <Header class="" />
    <router-view style="min-height:300px;color:white;" />
    <Footer class="" :footerLinksLeft="footerLinksLeft" :footerLinksMiddle="footerLinksMiddle" :footerLinksRight="footerLinksRight" />
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
      loginvis: false,
      footerLinksRight:[],
      footerLinksMiddle:[],
      footerLinksLeft:[],
    };
  },
  created() {
    this.EventBus.$on("showlogin", () => (this.loginvis = true));
    this.footerLinksRight=this.footerLinksLeft=this.footerLinksMiddle = [
      {
        text:'لینک تست',
        href:"",
        type:"bold",
      },
      {
        text:'لینک تست',
        href:"",
        type:"button",
      },
      {
        text:'لینک تست',
        href:"",
        type:"",
        icon:"question",
      },
      {
        text:'لینک تست',
        href:"",
        type:"bold",
        icon:'phone',
      },
      {
        text:'لینک تست',
        href:"",
        type:"bold button",
        icon:"mail",
      },
    ]
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