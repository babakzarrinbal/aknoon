<template>
  <div class="container my-2">
    <div class="wholelist" :class="{'showall':showall}">
      <div class="catselect d-flex flex-row-reverse my-3">
        <div
          class="cat mx-2"
          :class="{'active': sc ==activeCat}"
          v-for="(sc,i) in showCats"
          :key="i"
          @click="activeCat =sc;visibleshows = (i ==showCats.length-1) ?[...shows]:shows.filter(s=>s.category == sc)"
        >{{sc}}</div>
      </div>
      <div class="shows">
        <div class="show" v-for="(s,i) in visibleshows" :key="i">
          <div class="inner">
            <div class="front">
              <img :src="s.img" alt="Avatar" style="width:100%;height:100%;" />
            </div>
            <div class="back">
              <h1>{{s.title}}</h1>
              <p>{{s.writer}}</p>
              <p>{{s.director}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more" style="color:white" @click="showall=!showall">{{showall?"کمتر":"بیشتر"}}</div>
  </div>
</template>

<script>
export default {
  data() {
    let shows = [...Array(100).keys()].map(i => ({
      category: ["رخدادها", "کودک و نوجوان", "کمدی", "بزرگسال"][i % 4],
      img: "/img/temps/" + (i % 5) + ".jpg",
      title: "تست",
      writer: "تست",
      director: "تست",
      place: "تست",
      datatime: "1399/1/1",
      rate1: "7.1",
      rate2: "1.1",
      rate3: "5.4"
    }));
    let showCats = shows.reduce(
      (cu, c) => (cu.includes(c.category) ? cu : [c.category, ...cu]),
      ["همه اجراها"]
    );
    let visibleshows = shows.filter(s => s.category == showCats[0]);
    let activeCat = showCats[0];
    return {
      shows,
      showCats,
      visibleshows,
      activeCat,
      showall: false
    };
  }
};
</script>

<style lang='scss' scoped>
.wholelist {
  position: relative;
  height: 600px;
  overflow: hidden;
  margin-left: -15px;
  margin-right: -15px;

  &:after {
    content: "";
    position: absolute;
    height: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, white, transparent);
  }
  &.showall {
    &:after {
      height: 0;
    }
    height: auto;
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
  .show {
    background-color: transparent;
    width: 200px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    &:hover .inner {
      transform: rotateY(180deg);
    }
    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.4s;
      transform-style: preserve-3d;
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
        color: black;
      }

      /* Style the back side */
      .back {
        background-color: #f4cc30;
        color: white;
        transform: rotateY(180deg);
      }
    }
  }
}
</style>