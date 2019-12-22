<template>
  <div id="app" class="container">
    <Header />
    <Slider />
    <div class="container">
    <Booking/>
    <Listing/>
    </div>
  </div>
</template>

<script>
import Slider from './components/slider.vue'
import Header from './components/header.vue'
import Booking from './components/booking.vue'
import Listing from './components/listing.vue'

export default {
  name: 'app',
  components: {
    Slider,
    Header,
    Booking,
    Listing
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'IranSans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2b2b2b;
}
/deep/ .clickable{
  user-select: none;
  cursor: pointer;
  
}
</style>
