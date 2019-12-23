<template>
  <div id="app" class="container">
    <Header />
    <Slider />
    <div class="container">
      <Booking />
      <Listing />
      <div class="banner">
        <img src="img/temps/banner.jpg" style="width:500px;max-width:100%;" alt />
      </div>
    </div>
    <Listing2 />
    <Footer />
  </div>
</template>

<script>
import Slider from "./components/slider.vue";
import Header from "./components/header.vue";
import Booking from "./components/booking.vue";
import Listing from "./components/listing.vue";
import Listing2 from "./components/listing2.vue";
import Footer from "./components/footer.vue";

export default {
  name: "app",
  components: {
    Slider,
    Header,
    Booking,
    Listing,
    Listing2,
    Footer
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "IranSans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2b2b2b;
}
/deep/ .clickable {
  user-select: none;
  cursor: pointer;
}
</style>
