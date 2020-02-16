<template>
  <div class="container-fluid px-0" style="background-color:#2b2b2b">
    <Slider class="pt-5 " :images="slideImages" />
    <div class="container ">
      <Booking />
      <Listing :shows="list1shows" />
      <div class="banner position-relative" v-if="banners && banners.length" @mouseenter="changebanner(true)" @mouseleave="changebanner(false)">
        <transition name="fade" mode="out-in">
        <img :key="exbanner" :src="exbanner" style="width:500px;max-width:100%;" alt />
        </transition>
      </div>
    </div>
    <Listing2 :banners="banners" :shows="list2shows" :ratings="ratings" class="text-dark" />
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
    Listing2
  },
  data() {
    return {
      ratings: [],
      list1shows: [],
      slideImages: [],
      banners: [],
      list2shows: [],
      exbanner:"img/temps/banner.jpg"
    };
  },
  created() {
    this.list1shows = Array.from(Array(100).keys()).map(i => ({
      id: i,
      categories: [
        ["رخدادها", "کودک و نوجوان", "کمدی", "بزرگسال"][
          Math.round(Math.random() * 3)
        ],
        ["رخدادها", "کودک و نوجوان", "کمدی", "بزرگسال"][
          Math.round(Math.random() * 3)
        ]
      ],
      img: "img/temps/" + (i % 5) + ".jpg",
      title: "تست",
      writer: "تست",
      director: "تست",
      place: "تست",
      desc: "",
      datetime: "1399/1/1 8:30",
      rate1: "7.1",
      rate2: "1.1",
      rate3: "5.4"
    }));
    this.slideImages = [1, 2, 3].map(
      i => "https://deulos.github.io/vue-flux-docs/img/slides/0" + i + ".jpg"
    );
    this.banners = [1, 2, 3].map(() => "img/temps/banner.jpg");
    this.ratings = [
      {
        id: 1,
        title: "گیشه",
        field: "rate1"
      },
      {
        id: 2,
        title: "مردم",
        field: "rate2"
      },
      {
        title: "منتقدان",
        id: 3,
        field: "rate3"
      }
    ];
    this.list2shows = Array.from(Array(20).keys()).reduce(
      (cu, c, i) => [
        ...cu,
        {
          id: i + 1,
          title: "نمایش شماره " + (i + 1),
          desc:
            "خلاصه مطلب در اینجا قرار میگیرد خلاصه مطلب در اینجا قرار میگیرد",
          img: "img/temps/2-" + ((i % 8) + 1) + ".jpg'",
          categories: [
            ["رخدادها", "کودک و نوجوان", "کمدی", "بزرگسال"][
              Math.round(Math.random() * 3)
            ],
            ["رخدادها", "کودک و نوجوان", "کمدی", "بزرگسال"][
              Math.round(Math.random() * 3)
            ]
          ],

          rate1: Math.round(Math.random() * 10000) / 10000,
          rate2: Math.round(Math.random() * 10000) / 10000,
          rate3: Math.round(Math.random() * 10000) / 10000
        }
      ],
      []
    );
  },
  methods:{
    changebanner(expand){
      this.exbanner = expand ? "img/temps/expanded-ad.jpg" : "img/temps/banner.jpg"
      window.console.log(this.exbanner);
    }
  }
};
</script>

<style>
</style>