<template>
  <div class="container my-2 pb-2">
    <div class="wholelist" :class="{'showall':showall}">
      <div class="catselect d-flex flex-row-reverse my-3">
        <div
          class="cat mx-2"
          :class="{'active': sc ==activeCat}"
          v-for="(sc,i) in showCats"
          :key="i"
          @click="activeCat =sc"
        >{{sc}}</div>
      </div>
      <div class="shows">
        <div class="show col-xs-6 col-sm-4 col-md-3 px-0" v-for="(s,i) in visibleshows" :key="i">
          <router-link tag="div" :to="'theatre/shows/'+s.id" class="inner">
            <div class="front">
              <img :src="s.img" alt="Avatar" style="width:100%;height:100%;" />
            </div>
            <div class="back d-flex flex-column">
              <div class="showinfo">
                <span class="text-center text">{{s.title}}</span>
                <img class="shimg" src="img/temps/i-1.jpg" alt />
              </div>
              <div class="showinfo">
                <span class="text-center text">{{s.writer}}</span>
                <img class="shimg" src="img/temps/i-2.jpg" alt />
              </div>
              <div class="showinfo">
                <span class="text-center text">{{s.director}}</span>
                <img class="shimg" src="img/temps/i-3.jpg" alt />
              </div>
              <div class="showinfo">
                <span class="text-center text">{{s.place}}</span>
                <img class="shimg" src="img/temps/i-4.jpg" alt />
              </div>
              <div class="showinfo">
                <span class="text-center text">{{s.datetime}}</span>
                <img class="shimg" src="img/temps/i-5.jpg" alt />
              </div>
            </div>
              <div class="ratings d-flex mt-1 position-absolute" style="bottom:5px;left:5px;right:5px;">
                <div class="rate d-flex flex-grow-1 mr-1">
                  <img src alt style="width:20px;height:20px;background:gray;" class="rateimg" />
                  <div class="info d-flex flex-column flex-grow-1">
                    <span style="text-align:left;font-size:10px;line-height:10px">{{s.rate1}}</span>
                    <div
                      class="position-relative"
                      style="height:10px; border-radius:5px;border:1px solid gray;"
                    >
                      <div
                        class
                        style="position:absolute;top:0;bottom:0;left:0;background:orange"
                        :style="{width:((parseFloat(s.rate1)||0)/0.1)+'%'}"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="rate d-flex flex-grow-1 mr-1">
                  <img src alt style="width:20px;height:20px;background:gray;" class="rateimg" />
                  <div class="info d-flex flex-column flex-grow-1 ali">
                    <span style="text-align:left;font-size:10px;line-height:10px">{{s.rate2}}</span>
                    <div
                      class="position-relative"
                      style="height:10px; border-radius:5px;border:1px solid gray;"
                    >
                      <div
                        class
                        style="position:absolute;top:0;bottom:0;left:0;background:orange"
                        :style="{width:((parseFloat(s.rate2)||0)/0.1)+'%'}"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="rate d-flex flex-grow-1 mr-1">
                  <img src alt style="width:20px;height:20px;background:gray;" class="rateimg" />
                  <div class="info d-flex flex-column flex-grow-1">
                    <span style="text-align:left;font-size:10px;line-height:10px">{{s.rate3}}</span>
                    <div
                      class="position-relative"
                      style="height:10px; border-radius:5px;border:1px solid gray;"
                    >
                      <div
                        class
                        style="position:absolute;top:0;bottom:0;left:0;background:orange"
                        :style="{width:((parseFloat(s.rate3)||0)/0.1)+'%'}"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="more clickable" @click="showall=!showall">{{showall?"کمتر":"بیشتر"}}</div>
  </div>
</template>

<script>
export default {
  props: {
    shows: Array
  },
  data() {
    return {
      activeCat: "همه اجراها",
      showall: false
    };
  },
  computed: {
    showCats() {
      return this.shows.reduce(
        (cu, show) => {
          show.categories.forEach(c => {
            if (cu.includes(c)) return;
            cu.push(c);
          });

          return cu;
        },
        ["همه اجراها"]
      );
    },
    visibleshows() {
      if (this.activeCat == "همه اجراها") return { ...this.shows };
      return this.shows.filter(s =>
        s.categories.some(c => c == this.activeCat)
      );
    }
  }
};
</script>

<style lang='scss' scoped>
.wholelist {
  position: relative;
  max-height: 500px;
  overflow: hidden;
  margin-left: -15px;
  margin-right: -15px;
  transition: 0.5s;

  &:after {
    content: "";
    position: absolute;
    height: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    // background: radial-gradient(farthest-corner at 50% 90%,rgb(255, 255, 255) ,transparent 75%);
    background: linear-gradient(to top, #ffffffb6, transparent 90%);
  }
  &.showall {
    &:after {
      height: 0;
    }
    max-height: 3000px;
    transition: 0.5s;
  }
}
.catselect {
  color: white;
  .cat {
    user-select: none;
    cursor: pointer;
    &:hover {
      transform: translateY(-2px);
      text-shadow: 0 2px 3px white;
    }
    &.active {
      border-bottom: 1px solid red;
    }
  }
}
.shows {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .show {
    background-color: transparent;
    width: 170px;
    height: 170px;
    border: 1px solid #8b89895b;
    @media (min-width: 992px){
      height: 232.5px;;
    }
    &:hover .inner .back {
      transform: translateX(0);
    }
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.4s;
      transform-style: preserve-3d;
      overflow:hidden;
      .front,
      .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }

      /* Style the front side (fallback if image is missing) */
      .front {
        background-color: #bbb;
        color: white;
      }

      /* Style the back side */
      .back {
        background-color: #f4cc30;
        color: black;
        transform: translateX(100%);
        padding-top: 2px;
        transition:0.4s;
        .showinfo {
          font-size: 12px;
          margin: 3px 8px;
          border-radius: 7px;
          border: 1px solid white;
          display: flex;
          .text {
            flex-grow: 1;
          }
          .shimg {
            border-left: 1px solid white;
            width: 20px;
            height: 20px;
            padding: 3px;
          }
        }
      }
    }
  }
}
.more {
  background-color: #f4cc30;
  color: black;
  width: 450px;
  font-weight: bold;
  font-size: 18px;
  margin: 10px auto;
  padding: 8px 10px;
  background: radial-gradient(circle, #f4cc30, transparent 50%);
}
</style>