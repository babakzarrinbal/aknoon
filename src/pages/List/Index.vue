<template>
  <div class="container-fluid position-relative">
    <div
    v-if="meta.banner"
      class="position-relative d-flex justify-content-center align-items-center bg-light"
      style="width:calc(100% + 30px);margin-left:-15px;margin-right:-15px;height:300px"
    >
      <img :src="meta.banner" alt />
    </div>
    <div
      class="bg-light position-relative container"
      style=" left:0;"
      :style="meta.banner?'margin-top:-50px;box-shadow:#c5c4c4 0px 0px 10px 2px;':''"
    >
      <div class="container text-dark">
        <div class="head d-flex flex-row-reverse pt-3">
          <h3 class="title flex-grow-1 text-dark text-right">{{meta.title}}</h3>
          <div class="categories">
            <div
              class="btn btn-light"
              :class="{'active':c==selecetedcat}"
              v-for="(c,i) in categories"
              :key="i"
              @click="selecetedcat = c"
            >{{c}}</div>
          </div>
        </div>
        <div class="items d-flex flex-wrap flex-row-reverse justify-content-around">
          <router-link
        :to="it.url || '/theatre'"
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
          <a class="page-link" tabindex="-1">Previous</a>
        </li>
        <li class="page-item clickable " :class="{'active':p==meta.page}" v-for="p of pages" :key="p">
          <a class="page-link">{{p}}</a>
        </li>
        
        <li class="page-item clickable">
          <a class="page-link">Next</a>
        </li>
      </ul>
    </nav>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selecetedcat: "همه",
      items: [],
      meta:{},
      pages:[]
    };
  },
  methods: {},
  created() {
    this.items = [
      
      {
        id: 1,
        title: "تایتل",
        url:"/theatre/shows/1",
        desc: "دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        categories: ["تست"]
      },
      {
        id: 2,
        title: "تایتل",
        url:"/theatre/shows/1",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        categories: ["تست1"]
      },
      {
        id: 3,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        categories: ["تست2"]
      },
      {
        id: 4,
        title: "تایتل",
        url:"/theatre/shows/1",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        categories: ["تست3"]
      },
      {
        id: 1,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        categories: ["تست"]
      },
      {
        id: 2,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        categories: ["تست1"]
      },
      {
        id: 3,
        title: "تایتل",
        url:"/theatre/shows/1",
        desc: " دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        categories: ["تست2"]
      },
      {
        id: 4,
        title: "تایتل",
        url:"/theatre/shows/1",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        categories: ["تست3"]
      },
      {
        id: 1,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        categories: ["تست"]
      },
      {
        id: 2,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        categories: ["تست1"]
      },
      {
        id: 3,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        categories: ["تست2"]
      },
      {
        id: 4,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        categories: ["تست3"]
      },
      {
        id: 1,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        categories: ["تست"]
      },
      {
        id: 2,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        categories: ["تست1"]
      },
      {
        id: 3,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: " دسکریپشن",
        img: "img/temps/detail-img1.jpg",
        categories: ["تست2"]
      },
      {
        id: 4,
        url:"/theatre/shows/1",
        title: "تایتل",
        desc: "دسکریپشن",
        img: "img/temps/detail-img2.jpg",
        categories: ["تست3"]
      }
         
    ];
    this.meta = {
      page:4,
      limit:50,
      title:"تایتل لیست ",
      banner: 'img/temps/detail-banner.jpg'
    }
    this.pages = [-2,-1,0,1,2].map(i=>this.meta.page+i)
  },
  computed: {
    itemstoshow() {
      if (this.selecetedcat == "همه") return [...this.items];
      return this.items.filter(i => i.categories.includes(this.selecetedcat));
    },
    categories() {
      return this.items.reduce(
        (cu, item) => {
          item.categories.forEach(c => {
            if (cu.includes(c)) return;
            cu.push(c);
          });
          return cu;
        },
        ["همه"]
      );
    }
  }
  
};
</script>

<style>
</style>