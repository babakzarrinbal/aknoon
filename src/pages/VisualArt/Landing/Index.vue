<template>
  <div
    class="position-relative bg-dark overflow-hidden"
    :style="'z-index:998;width:100%;height:calc(100vh - '+height+'px);'"
    ref="container"
  >
    <transition-group name="slideup">
      <component tag="div" v-for="i in slide" :is="'Slide'+i" :style="'z-index:'+i" :key="i" />
    </transition-group>
  </div>
</template>

<script>
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
let Slides = { Slide1, Slide2, Slide3 };

export default {
  data() {
    return {
      touchstarted: 0,
      height: 0,
      slide: 1,
      slideLen: Object.keys(Slides).length
    };
  },
  components: {
    ...Slides
  },
  mounted() {
    window.scrollTo(0, 0);
    this.height = this.$refs.container.offsetTop;
    window.document.body.style.overflow = "hidden";

    this.$refs.container.onwheel = e =>
      e.cancelable && this.changeslide(e.deltaY > 0 ? 1 : -1);
    this.$refs.container.addEventListener(
      "touchstart",
      e => {
        this.touchstarted = e.changedTouches[0].pageY;
      },
      false
    );
    this.$refs.container.addEventListener(
      "touchmove",
      e => {
        if (!this.touchstarted) return;
        let ch = this.touchstarted - e.changedTouches[0].pageY;
        this.touchstarted = 0;
        this.changeslide(ch > 0 ? 1 : -1);
      },
      false
    );
  },
  beforeDestroy() {
    window.document.body.style.overflow = "";
  },
  methods: {
    fullscreen() {
      this.$refs.container.requestFullscreen();
    },
    changeslide(ch) {
      let slide = ch + this.slide;
      if (slide < 1 || slide > this.slideLen) return;
      this.slide = slide;
    }
  }
};
</script>

<style lang="scss" >
.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .slidecontainder {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  }
  .sbcontainer {
    height: 400px;
    width: 250px;
    top: 0;
    left: 250px;
    position: absolute;
    overflow: hidden;
    color: black;
    .sbbg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
    .slidebar {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>