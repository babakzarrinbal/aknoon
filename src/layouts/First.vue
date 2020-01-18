<template>
  <div id="app" class="container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
#app {
  font-family: "IranSans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2b2b2b;
}
</style>