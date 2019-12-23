<template>
  <div class="container my-2 pb-2">
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
            <div class="back d-flex flex-column">
              <div class="showinfo">
                <span class="text-center text">{{s.title}}</span>
                <img class="shimg" src="img/temps/i-1.jpg" alt="">
              </div>
              <div class="showinfo">
                <span class="text-center text">{{s.writer}}</span>
                <img class="shimg" src="img/temps/i-2.jpg" alt="">
              </div>
              <div class="showinfo">
                <span class="text-center text">{{s.director}}</span>
                <img class="shimg" src="img/temps/i-3.jpg" alt="">
              </div>
              <div class="showinfo">
                <span class="text-center text">{{s.place}}</span>
                <img class="shimg" src="img/temps/i-4.jpg" alt="">
              </div>
              <div class="showinfo">
                <span class="text-center text">{{s.datetime}}</span>
                <img class="shimg" src="img/temps/i-5.jpg" alt="">
              </div>
              <div class="ratings d-flex mt-1">
                <div class="rate d-flex  flex-grow-1  mr-1">
                  <img src="" alt="" style="width:20px;height:20px;background:gray;" class="rateimg">
                  <div class="info d-flex flex-column flex-grow-1">
                    <span style="text-align:left;font-size:10px;line-height:10px">{{s.rate1}}</span>
                    <div class="position-relative " style="height:10px; border-radius:5px;border:1px solid gray;">
                      <div class="" style="position:absolute;top:0;bottom:0;left:0;background:orange" :style="{width:((parseFloat(s.rate1)||0)/0.1)+'%'}"></div>
                    </div>
                  </div>
                </div>
                <div class="rate d-flex  flex-grow-1  mr-1">
                  <img src="" alt="" style="width:20px;height:20px;background:gray;" class="rateimg">
                  <div class="info d-flex flex-column flex-grow-1 ali">
                    <span style="text-align:left;font-size:10px;line-height:10px">{{s.rate2}}</span>
                    <div class="position-relative " style="height:10px; border-radius:5px;border:1px solid gray;">
                      <div class="" style="position:absolute;top:0;bottom:0;left:0;background:orange" :style="{width:((parseFloat(s.rate2)||0)/0.1)+'%'}"></div>
                    </div>
                  </div>
                </div>
                <div class="rate d-flex flex-grow-1 mr-1">
                  <img src="" alt="" style="width:20px;height:20px;background:gray;" class="rateimg">
                  <div class="info d-flex flex-column flex-grow-1">
                    <span style="text-align:left;font-size:10px;line-height:10px">{{s.rate3}}</span>
                    <div class="position-relative " style="height:10px; border-radius:5px;border:1px solid gray;">
                      <div class="" style="position:absolute;top:0;bottom:0;left:0;background:orange" :style="{width:((parseFloat(s.rate3)||0)/0.1)+'%'}"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more clickable"  @click="showall=!showall">{{showall?"کمتر":"بیشتر"}}</div>
  </div>
</template>

<script>
export default {
  data() {
    let shows = [...Array(100).keys()].map(i => ({
      category: ["رخدادها", "کودک و نوجوان", "کمدی", "بزرگسال"][i % 4],
      img: "img/temps/" + (i % 5) + ".jpg",
      title: "تست",
      writer: "تست",
      director: "تست",
      place: "تست",
      datetime: "1399/1/1 8:30",
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
  height: 500px;
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
    pointer-events: none;
    // background: radial-gradient(farthest-corner at 50% 90%,rgb(255, 255, 255) ,transparent 75%);
    background: linear-gradient(to top, #ffffffb6, transparent 90%);
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
  justify-content: center;
  align-items: center;
  .show {
    background-color: transparent;
    width: 170px;
    height: 170px;
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
        color: white;

      }

      /* Style the back side */
      .back {
        background-color: #f4cc30;
        color: black;
        transform: rotateY(-180deg);
        padding-top:2px;
        .showinfo{
          font-size: 12px;
          margin:3px 8px;
          border-radius: 7px;
          border: 1px solid white;
          display:flex;
          .text{
            flex-grow:1;
          }
          .shimg{
            border-left:1px solid white;
            width:20px;
            height:20px;
            padding:3px;
          }
        }
      }
    }
  }
}
.more{
  background-color: #f4cc30;
  color:black;
  width:450px;
  font-weight: bold;
  font-size: 18px;
  margin:10px auto;
  padding:8px 10px;
    background: radial-gradient(circle,#f4cc30 ,transparent 50%);
}
</style>