<template>
  <div class="w-100 p-0" style="margin-left:-15px;margin-right:-15px;width: calc(100% + 30px) !important;">
    <vue-flux :options="vfOptions" :images="vfImages" :transitions="vfTransitions" ref="slider">
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

  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: [
      "https://deulos.github.io/vue-flux-docs/img/slides/01.jpg",
      "https://deulos.github.io/vue-flux-docs/img/slides/02.jpg",
      "https://deulos.github.io/vue-flux-docs/img/slides/03.jpg"
    ],
    vfTransitions: [
      // "fade", "cube", "book",
      "wave"
    ],
  })
};
</script>

<style lang="scss" scoped>
/deep/ .vue-flux {
  height: 200px !important;
  .flux-pagination li {
    margin: 0 5px !important;
    width: 13px !important;
    height: 13px !important;
    padding-bottom: 0 !important;
  }
}
</style>