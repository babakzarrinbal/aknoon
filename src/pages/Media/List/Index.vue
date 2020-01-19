<template>
  <div class="container bg-light text-dark">
      <div class="head d-flex flex-row-reverse pt-3">
          <h3 class="title flex-grow-1 text-dark text-right">تایتل لیست مدیاها</h3>
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
          <router-link
            :to="'/mediadetail/'+it.id"
            class="item p-2 d-flex flex-column"
            v-for="(it,index) in itemstoshow"
            :key="index"
            style="width:150px;"
          >
            <img :src="(it||{}).img" alt />
            <span>{{it.title}}</span>
            <span>{{it.desc}}</span>
          </router-link>
        </div>
        <nav aria-label="...">
  <ul class="pagination justify-content-center py-4 mb-0">
    <li class="page-item disabled clickable">
      <a class="page-link"  tabindex="-1">Previous</a>
    </li>
    <li class="page-item clickable active"><a class="page-link" >1</a></li>
    <li class="page-item clickable">
      <a class="page-link clickable" >2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item clickable"><a class="page-link" >3</a></li>
    <li class="page-item clickable">
      <a class="page-link" >Next</a>
    </li>
  </ul>
</nav>
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
        img: "img/temps/media3.jpg",
        cat: "ویدئو"
      },
      {
        id: 2,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media3.jpg",
        cat: "تصویر"
      },
      {
        id: 3,
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/media2.jpg",
        cat: "خبر"
      },
      {
        id: 4,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media1.jpg",
        cat: "پادکست"
      },
      {
        id: 1,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media1.jpg",
        cat: "ویدئو"
      },
      {
        id: 2,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media1.jpg",
        cat: "تصویر"
      },
      {
        id: 3,
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/media1.jpg",
        cat: "خبر"
      },
      {
        id: 4,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media2.jpg",
        cat: "پادکست"
      },
      {
        id: 1,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media2.jpg",
        cat: "ویدئو"
      },
      {
        id: 2,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media2.jpg",
        cat: "تصویر"
      },
      {
        id: 3,
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/media3.jpg",
        cat: "خبر"
      },
      {
        id: 4,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media3.jpg",
        cat: "پادکست"
      },
      {
        id: 1,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media4.png",
        cat: "ویدئو"
      },
      {
        id: 2,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media4.png",
        cat: "تصویر"
      },
      {
        id: 3,
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/media4.png",
        cat: "خبر"
      },
      {
        id: 4,
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/media4.png",
        cat: "پادکست"
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
}
</script>

<style>

</style>