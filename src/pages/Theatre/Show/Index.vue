<template>
  <div class>
    <div class="related d-flex justify-content-around py-2 container flex-column flex-sm-row">
      <router-link
        :to="'/theatre/shows/'+sh.id"
        tag="div"
        class="m-1 border border-light clickable"
        style="border-color:gray !important;width:30%;"
        v-for="(sh,i) in banners"
        :key="i"
      >
        <img :src="sh.banner" alt />
      </router-link>
    </div>
    <div class="banner position-relative">
      <div class="imgcontainer px-5">
        <img
          :src="show.banner"
          width="100%"
          style="max-height:initial !important;margin-top:-100px"
          alt
        />
      </div>
      <div
        class="banner-footer w-100 position-absolute d-flex flex-column flex-sm-row-reverse align-items-start justify-content-between"
        style="bottom:0;padding:15px 100px;"
      >
        <div class="title flex-grow-1 d-flex flex-column flex-sm-row-reverse">
          <div class="poster flex-shrink-0">
            <img
              :src="show.poster"
              style="border:1px solid gray;"
              width="120px"
              height="180px;"
              alt
            />
          </div>
          <div
            class="titletext d-flex flex-column justify-content-center align-items-end p-3"
            style="text-shadow:0 0 5px black, 0 0 10px black, 0 0 15px black;"
          >
            <h3>{{show.title}}</h3>
            <router-link tag="div" :to="'/theatre/stages/'+show.stage.id" class="clickable location">
              <span class="px-2">{{show.stage.title}}</span>
              <svg height="16" viewBox="0 0 11 16" width="11" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                  <path
                    d="m4.5 0c-2.48785714 0-4.5 2.191-4.5 4.9 0 3.675 4.5 9.1 4.5 9.1s4.5-5.425 4.5-9.1c0-2.709-2.01214286-4.9-4.5-4.9z"
                    stroke="currentColor"
                  />
                  <path
                    d="m4.5 6c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </router-link>
            <p class="desc">{{show.desc}}</p>
          </div>
        </div>
        <div
          class="buyticket bg-dark rounded d-flex flex-column p-3"
          style="width:250px;border:1px solid gray;"
        >
          <h6>قیمت بلیط از</h6>
          <span>{{show.startingPrice}} تومان</span>
          <button class="btn-primary rounded mt-2 w-100 border-0" style="height:40px;">خرید بلیط</button>
        </div>
      </div>
    </div>
    <div class="text-dark py-3" style="background-color:white;">
      <div class="upcoming text-right pb-3 container" style>
        <h4 class="py-3">اجراهای پیشرو</h4>
        <div class="cards d-flex flex-row-reverse justify-content-between">
          <div
            class="text-secondary px-3 py-2 text-center rounded"
            style="background-color:#eee;"
            v-for="(pt,i) in show.performanceTimes ||[]"
            :key="i"
          >
            <div class="day small">{{pt.weekday}}</div>
            <div class="date text-dark mb-4" dir="rtl">{{pt.date}}</div>
            <div
              class="start text-primary btn-light px-3 py-1 w-100 rounded"
              style="box-shadow:gray 0 0 5px; font-weight:900;"
            >{{pt.start}}</div>
            <div
              class="end mt-3 text-primary btn-light px-3 py-1 w-100 rounded"
              style="box-shadow:gray 0 0 5px;  font-weight:900;"
            >{{pt.end}}</div>
          </div>
        </div>
      </div>
      <div
        class="main mt-3 border-top d-flex flex-row-reverse container border-bottom"
        style="border-color:#eee;"
      >
        <div
          class="sidebar flex-shrink-0 px-4 border-left p-2"
          style="border-color:#eee;width:250px;"
        >
          <router-link
            tag="div"
            :to="'/mediadetail/'+show.media.video.id"
            class="video text-right pb-4"
            v-if="(show.media||{}).video"
          >
            <h5>&#8249; ویدئو</h5>
            <img :src="show.media.video.img" alt />
          </router-link>
          <router-link
            tag="div"
            :to="'/mediadetail/'+show.media.image.id"
            class="image text-right py-4"
            v-if="(show.media||{}).image"
          >
            <h5>&#8249; تصاویر</h5>
            <img :src="show.media.image.img" alt />
          </router-link>
          <a target="_blank" :href="'https://www.google.com/maps/search/?api=1&query='+show.stage.lat+','+show.stage.lng" class="clickable image text-right py-4 text-secondary" v-if="show.stage">
            <h5>&#8249; سالن</h5>
            <img :src="show.stage.locationimg || 'img/temps/detail-map.png'" alt />
            <p>
              {{show.stage.title}}
              <br />
              {{show.stage.fullAddress}}
            </p>
          </a>
        </div>
        <div class="content flex-grow-1">
          <div class="notifications p-4 border-bottom w-100" style="border-color:#eee;">
            <h4 class="text-right">اطلاعات اجرا</h4>
            <div class="w-100 details d-flex flex-row-reverse flex-wrap">
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4">
                <img src="img/icons/duration.svg" class="align-self-start" alt />
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">مدت</div>
                  <p class="small">{{show.duration}}</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4">
                <img src="img/icons/audience.svg" class="align-self-start" alt />

                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">مخاطب</div>
                  <p class="small">{{show.audiance}}</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4">
                <img src="img/icons/contentadvisory.svg" class="align-self-start" alt />
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">توضیحات محتوایی</div>
                  <p class="small">{{show.contentAdvisory}}</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4">
                <img src="img/icons/lateseating.svg" class="align-self-start" alt />
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">جریمه تاخیر</div>
                  <p
                    class="small"
                  >{{show.lateSeating}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-right story p-4">
            <h4>داستان</h4>
            <p>{{show.story}}</p>
            <h4>دسته بندی ها</h4>
            <div v-if="show.categories && show.categories.length" class="cats d-flex flex-wrap flex-row-reverse mb-5">
              <div
                style="min-width:100px; "
                class="m-2 text-center cat rounded-pill shadow font-weight-bold text-primary px-2 py-1"
                v-for="i in show.categories"
                :key="i"
              >{{i}}</div>
            </div >
            <h4>نقد</h4>
            <p v-for="(r,i ) in show.criticRieveiws" :key="i">{{r}}</p>
          </div>
        </div>
      </div>
      <div
        class="castandcrew d-flex flex-column flex-sm-row py-3 container border-bottom"
        style="border-color:#eee"
      >
        <div class="casts cac text-right" style="width:50%;">
          <h5>بازیگران</h5>
          <div class="people">
            <div
              v-for="(p,i) in show.casts"
              class="py-3 d-flex flex-row-reverse"
              :key="i"
            >
              <div class="name flex-grow-1 d-flex flex-column">
                <div class="text-secondary font-weight-bold">{{p.charecter}}</div>
                <div class="text-dark font-weight-bold">{{p.name}}</div>
              </div>
              <div
                class="imagecontainer rounded-circle border-light overflow-hidden"
                style="box-shadow:grey 0px 3px 10px 2px;border-width:5px"
              >
                <img :src="p.img" width="50px" height="50px" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="creative cac text-right" style="width:50%;">
          <h5 class="mb-3">سازندگان</h5>
          <div class="people">
            <div
              v-for="(p,i) in show.crews"
              class="py-3"
              :key="i"
            >
              <div class="text-secondary font-weight-bold">{{p.title}}</div>
              <div class="text-dark font-weight-bold">{{p.names}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="related text-right container py-3" v-if="show.relatedShows && show.relatedShows.length">
        <h5>موارد مرتبط</h5>
        <div class="items d-flex overflow-auto" >
          <router-link tag="div" :to="'/theatre/shows/'+sh.id" class="clickable item flex-shrink-0 shadow m-3" v-for="(sh,i ) in show.relatedShows" :key="i">
            <img :src="sh.img" height="150px" width="200px;" alt />
            <p
              style="font-size:13px; font-weight:bold;height:150px;width:200px;padding:10px;overflow:hidden;"
            >{{sh.desc}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let showid = this.$route.params.id;
    this.banners = [1, 2, 3].map(i => ({
      id: i,
      banner: "img/temps/banner-ad" + i + ".jpg"
    }));
    this.show = {
      id: showid,
      title: "متن تایتل برای نمایش",
      desc: "توضیحات در مورد این اجرا که در اینجا نمایش می دهیم",
      poster: "img/temps/show-poster.jpg",
      banner: "img/temps/show-banner.jpg",
      startingPrice: "20,000",
      performanceTimes: [
        {
          weekday: "شنبه",
          date: "1 اسفند",
          start: "2:00 PM",
          end: "4:00 PM"
        },
        {
          weekday: "شنبه",
          date: "1 اسفند",
          start: "2:00 PM",
          end: "4:00 PM"
        },
        {
          weekday: "شنبه",
          date: "1 اسفند",
          start: "2:00 PM",
          end: "4:00 PM"
        },
        {
          weekday: "شنبه",
          date: "1 اسفند",
          start: "2:00 PM",
          end: "4:00 PM"
        },
        {
          weekday: "شنبه",
          date: "1 اسفند",
          start: "2:00 PM",
          end: "4:00 PM"
        },
        {
          weekday: "شنبه",
          date: "1 اسفند",
          start: "2:00 PM",
          end: "4:00 PM"
        }
      ],
      media: {
        video: {
          img: "img/temps/detail-video.png",
          id: 1
        },
        image: {
          img: "img/temps/detail-video.png",
          id: 1
        }
      },
      stage: {
        id:1,
        lat: "35.7000245",
        lng: "51.4050481",
        title: "تئاتر شهر",
        locationimg:"img/temps/detail-map.png",
        fullAddress: "تهران چهارراه ولیعصر"
      },
      duration: "2 ساعت و 30 دقیفه ، شامل یک وقفه",
      audiance: "کودکان کوچکتر از 4 سال اجازه ورود ندارند",
      contentAdvisory: "استفاده از تفنگ رعد و برق و مه مصنوعی و دود مصنوعی",
      lateSeating: "نفراتی که تاخیر داشته باشند توسط مدیریت در صندلی های موجود مستقر می شوند",
      story: "شیسبشیسب شیسب شسیب شیسب سشی بشیس بش یسب شسیب شس یب شیس بش یسب شیس ب شیسب شسی ب شسیب شیس ب شسی بش سیب شیس ب شسیب شیس ب شسیب شیس ب شیس بش یسب شیسبنشیستمکبکشمیسنتبمشکیسنتب کشیسنمتبکشمتیسبکمشیستب",
      categories: ['نمایش','موزیکال','کلاسیک','درام','برنده'],
      criticRieveiws: ["شیسبشیسب شیسب شسیب شیسب سشی بشیس بش یسب شسیب شس یب شیس بش یسب شیس ب شیسب شسی ب شسیب شیس ب شسی بش سیب شیس ب شسیب شیس ب شسیب شیس ب شیس بش یسب شیسبنشیستمکبکشمیسنتبمشکیسنتب کشیسنمتبکشمتیسبکمشیستب", "شیسبشیسب شیسب شسیب شیسب سشی بشیس بش یسب شسیب شس یب شیس بش یسب شیس ب شیسب شسی ب شسیب شیس ب شسی بش سیب شیس ب شسیب شیس ب شسیب شیس ب شیس بش یسب شیسبنشیستمکبکشمیسنتبمشکیسنتب کشیسنمتبکشمتیسبکمشیستب"],
      casts: [
        { charecter: "نقش اول", name: "علی", img: "img/temps/show-actor.jpg" },
        { charecter: "نقش اول", name: "علی", img: "img/temps/show-actor.jpg" },
        { charecter: "نقش اول", name: "علی", img: "img/temps/show-actor.jpg" },
        { charecter: "نقش اول", name: "علی", img: "img/temps/show-actor.jpg" },
        { charecter: "نقش اول", name: "علی", img: "img/temps/show-actor.jpg" },
        { charecter: "نقش اول", name: "علی", img: "img/temps/show-actor.jpg" },
        ],
      crews: [{title:'موسیقی',names:'علی'},{title:'آهنگ',names:'علی'},{title:'کارگردان',names:'علی'}],
      relatedShows: [
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
        {
          id: 1,
          img: "img/temps/show-related.jpg",
          desc: "شیسبشیس بش سیب شسیب شس یب شسی بشیس ب شیس ب شیسب شیس ب شیسب asdf a dsfa dsf adsf a dsf asdf sad f adsf ads f asdf شیس ب شیس ب شیسب"
        },
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