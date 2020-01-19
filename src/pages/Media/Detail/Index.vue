<template>
  <div>
    <div class="media p-2 d-flex justify-content-center" v-if="media">
      <video :src="media.src" controls class="max-width:100%;" height="500px;" v-if="media.type=='video'" :poster="media.poster"></video>
      <audio :src="media.src" controls class="max-width:100%;" height="500px;" v-if="media.type=='podcast'" :poster="media.poster"></audio>

    </div>
    <div class="html" v-if="html" v-html="html">
      <video src v-if="media.type==video"></video>
    </div>
    <div class="related container bg-light" >
      <h3 class="text-right text-dark p-3">تایتل مطالب مربوط</h3>
      <div direction="rtl" class="items d-flex flex-nowrap flex-row-reverse justify-content-start overflow-auto">
          <router-link
            :to="'/mediadetail/'+it.id"
            class="item py-2 px-3 d-flex flex-column"
            v-for="(it,index) in relatedItems"
            :key="index"
            style="width:150px;"
          >
            <img :src="(it||{}).img" alt />
            <span>{{it.title}}</span>
            <span>{{it.desc}}</span>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      media: {
        type: "video",
        src:
          "https://dl14.ftk.pw/user/shahab/Trailer/Ordinary.Love.2019.360p.trailer.Film2Movie_li.mp4",
        poster: "https://www.film2movie.li/content/uploads/Ordinary-Love-2019.jpg"
      },
      relatedItems:[
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
    ]
    };
  }
};
</script>

<style>
</style>