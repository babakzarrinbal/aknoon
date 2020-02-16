<template>
  <div class="w-100 p-0" >
    <vue-flux :options="vfOptions" :images="images" :transitions="vfTransitions" ref="slider">
      <template v-slot:preloader>
        <flux-preloader />
      </template>
      <template v-slot:pagination>
        <flux-pagination />
      </template>
    </vue-flux>

  </div>
</template>

<script>
import {
  VueFlux,
  FluxPagination,
  FluxPreloader
} from "vue-flux";
export default {
  components: {
    VueFlux,
    FluxPagination,
    FluxPreloader
  },
  props:{
    images:Array,
  },
  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfTransitions: [
      'Swipe'
      // "fade", 
      // "cube",
      //  "book",
      // "wave"
    ],
  })
};
</script>

<style lang="scss" scoped>
/deep/ .vue-flux {
  height: 250px !important;
  .flux-pagination li {
    margin: 0 5px !important;
    width: 13px !important;
    height: 13px !important;
    padding-bottom: 0 !important;
  }
}
</style>