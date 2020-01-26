<template>
  <div class>
    <div class="related d-flex justify-content-around py-2 container flex-column flex-sm-row">
      <router-link
        :to="'/teathre/shows/'+b.id"
        tag="div"
        class="m-1 border border-light"
        style="border-color:gray !important;width:30%;"
        v-for="(b,i) in banners"
        :key="i"
      >
        <img :src="b.banner" alt />
      </router-link>
    </div>
    <div
      class="banner position-relative border-top border-secondary"
      style="background-color:#222;"
    >
      <h3 class="mb-0 container py-4 text-right">{{stage.title}}</h3>
    </div>
    <div class="text-dark pb-3" style="background-color:white;">
      <div
        class="main border-top d-flex flex-row-reverse container border-bottom"
        style="border-color:#eee;"
      >
        <div
          class="sidebar flex-shrink-0 px-4 border-left p-2"
          style="border-color:#eee;width:250px;"
        >
          <div class="image text-right py-4 text-secondary">
            <!-- <h5>&#8249; سالن</h5> -->
            <img :src="stage.locationimg || 'img/temps/detail-map.png'" alt />
            <p>
              {{stage.title}}
              <br />
              {{stage.fullAddress}}
            </p>
          </div>
        </div>
        <div class="content flex-grow-1">
          <div class="notifications p-4 border-bottom w-100" style="border-color:#eee;">
            <h4 class="text-right">اطلاعات سالن</h4>
            <div class="w-100 details d-flex flex-row-reverse flex-wrap">
              <div
                v-for="(info,i) in stage.information"
                :key="i"
                class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4"
              >
                <img class="align-self-start" :src="info.img" alt />
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">{{info.title}}</div>
                  <p class="small">{{info.desc}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-right story p-4">
            <h4>درباره</h4>
            <p>{{stage.about}}</p>
            <h4>قوانین</h4>
            <p>{{stage.rules}}</p>
          </div>
        </div>
      </div>

      <div class="related text-right container p-3">
        <h5>اجراهای در حال پخش</h5>
        <div class="items row">
          <router-link tag="div" :to="'/theatre/shows/'+rs.id" v-for="(rs,i) in stage.currentShows" :key="i" class="item col-xs-12 col-lg-6 flex-row-reverse d-flex p-2">
            <img :src="rs.poster" height="80px" width="50x;" alt />
            <h5 class="px-2 font-wight-bold flex-grow-1">{{rs.desc}}</h5>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stage: {},
      banners: []
    };
  },
  created() {
    let stageid = this.$route.id;
    this.banners = [1, 2, 3].map(i => ({
      id: i,
      banner: "img/temps/banner-ad" + i + ".jpg"
    }));
    this.stage = {
      id: stageid,
      lat: "35.7000245",
      lng: "51.4050481",
      title: "تئاتر شهر",
      locationimg: "img/temps/detail-map.png",
      fullAddress: "تهران چهارراه ولیعصر",
      about:
        "شیسبشیسب شیسب شسیب شیسب سشی بشیس بش یسب شسیب شس یب شیس بش یسب شیس ب شیسب شسی ب شسیب شیس ب شسی بش سیب شیس ب شسیب شیس ب شسیب شیس ب شیس بش یسب شیسبنشیستمکبکشمیسنتبمشکیسنتب کشیسنمتبکشمتیسبکمشیستب",
      rules:
        "شیسبشیسب شیسب شسیب شیسب سشی بشیس بش یسب شسیب شس یب شیس بش یسب شیس ب شیسب شسی ب شسیب شیس ب شسی بش سیب شیس ب شسیب شیس ب شسیب شیس ب شیس بش یسب شیسبنشیستمکبکشمیسنتبمشکیسنتب کشیسنمتبکشمتیسبکمشیستب",

      information: [
        {
          title: "مدت",
          img: "img/icons/entrance.svg",
          desc: "2 ساعت و 30 دقیفه ، شامل یک وقفه"
        },
        {
          title: "مدت",
          img: "img/icons/waterfountain.svg",
          desc: "2 ساعت و 30 دقیفه ، شامل یک وقفه"
        },
        {
          title: "مدت",
          img: "img/icons/hearingassistance.svg",
          desc: "2 ساعت و 30 دقیفه ، شامل یک وقفه"
        },
        {
          title: "مدت",
          img: "img/icons/elevatorsandescalators.svg",
          desc: "2 ساعت و 30 دقیفه ، شامل یک وقفه"
        },
        {
          title: "مدت",
          img: "img/icons/wheelchairaccess.svg",
          desc: "2 ساعت و 30 دقیفه ، شامل یک وقفه"
        },
        {
          title: "مدت",
          img: "img/icons/restrooms.svg",
          desc: "2 ساعت و 30 دقیفه ، شامل یک وقفه"
        },
        {
          title: "مدت",
          img: "img/icons/accessibleseating.svg",
          desc: "2 ساعت و 30 دقیفه ، شامل یک وقفه"
        },
        {
          title: "مدت",
          img: "img/icons/coatcheck.svg",
          desc: "2 ساعت و 30 دقیفه ، شامل یک وقفه"
        }
      ],
      currentShows: [
        {
          id: 1,
          poster: "img/temps/currentlyplaying.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب ب شیس ب شیسب"
        },
        {
          id: 2,
          poster: "img/temps/currentlyplaying.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب ب شیس ب شیسب"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.imgcontainer {
  position: relative;
  height: 450px;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: radial-gradient(transparent, transparent, black 80%);
  }
}
</style>