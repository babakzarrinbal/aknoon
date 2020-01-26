<template>
  <div class="container" style="background-color:#2b2b2b">
    <Slider />
    <div class="container">
      <Booking />
      <Listing />
      <div class="banner">
        <img src="img/temps/banner.jpg" style="width:500px;max-width:100%;" alt />
      </div>
    </div>
    <Listing2 class="text-dark"/>
  </div>
</template>

<script>
import Slider from "./components/slider.vue";
import Booking from "./components/booking.vue";
import Listing from "./components/listing.vue";
import Listing2 from "./components/listing2.vue";
export default {
  name: "TheatreLanding",
  components: {
    Slider,
    Booking,
    Listing,
    Listing2,
  }
};
</script>

<style>
</style>