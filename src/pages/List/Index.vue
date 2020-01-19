<template>
  <div class="container-fluid position-relative">
    <div
      class="position-relative d-flex justify-content-center align-items-center bg-light"
      style="width:calc(100% + 30px);margin-left:-15px;margin-right:-15px;height:300px"
    >
      <img src="img/temps/detail-banner.jpg" alt />
    </div>
    <div
      class="bg-light position-relative container"
      style="box-shadow:#c5c4c4 0px 0px 10px 2px;margin-top:-50px; left:0;"
    >
      <div class="container text-dark">
        <div class="head d-flex flex-row-reverse pt-3">
          <h3 class="title flex-grow-1 text-dark text-right">هدر لیست آیتم ها</h3>
          <div class="categories">
            <div
              class="btn btn-light"
              :class="{'active':i==selecetedcat}"
              v-for="(c,i) in categories"
              :key="i"
              @click="selecetedcat = i"
            >{{c}}</div>
          </div>
        </div>
        <div class="items d-flex flex-wrap flex-row-reverse justify-content-around">
          <a
            class="item p-2 d-flex flex-column"
            v-for="(it,index) in itemstoshow"
            :key="index"
            style="width:150px;"
          >
            <img :src="(it||{}).img" alt />
            <span>{{it.title}}</span>
            <span>{{it.desc}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let items = [
      {
        id: 1,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        cat: "تست"
      },
      {
        id: 2,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        cat: "تست1"
      },
      {
        id: 3,
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        cat: "تست2"
      },
      {
        id: 4,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        cat: "تست3"
      },
      {
        id: 1,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        cat: "تست"
      },
      {
        id: 2,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        cat: "تست1"
      },
      {
        id: 3,
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        cat: "تست2"
      },
      {
        id: 4,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        cat: "تست3"
      },
      {
        id: 1,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        cat: "تست"
      },
      {
        id: 2,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        cat: "تست1"
      },
      {
        id: 3,
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        cat: "تست2"
      },
      {
        id: 4,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        cat: "تست3"
      },
      {
        id: 1,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        cat: "تست"
      },
      {
        id: 2,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        cat: "تست1"
      },
      {
        id: 3,
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        cat: "تست2"
      },
      {
        id: 4,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        cat: "تست3"
      }
    ];
    let categories = Array.from(new Set(items.map(i => i.cat)));
    categories.unshift("همه");
    return {
      categories,
      selecetedcat: 0,
      items
    };
  },
  methods: {},
  computed: {
    itemstoshow() {
      let cat = this.categories[this.selecetedcat];
      return !this.selecetedcat || !cat
        ? [...(this.items || [])]
        : [...this.items.filter(i => i.cat == cat)];
    }
  }
};
</script>

<style>
</style>