<template>
  <div class>
    <div class="related d-flex justify-content-around py-2 container flex-column flex-sm-row">
      <router-link
        to="teathre/shows/1"
        tag="div"
        class="m-1 border border-light"
        style="border-color:gray !important;width:30%;"
        v-for="i in [1,2,3]"
        :key="i"
      >
        <img :src="'img/temps/banner-ad'+i+'.jpg'" alt />
      </router-link>
    </div>
    <div class="banner position-relative border-top border-secondary" style="background-color:#222;">
      <h3 class="mb-0 container py-4 text-right">تئاتر شهر</h3>
    </div>
    <div class="text-dark pb-3" style="background-color:white;">
      <div
        class="main  border-top d-flex flex-row-reverse container border-bottom"
        style="border-color:#eee;"
      >
        <div
          class="sidebar flex-shrink-0 px-4 border-left p-2"
          style="border-color:#eee;width:250px;"
        >
          <div class="image text-right py-4 text-secondary">
            <!-- <h5>&#8249; سالن</h5> -->
            <img src="img/temps/detail-map.png" alt />
            <p>
              تئاتر شهر
              <br />تهران چهارراه ولیعصر
            </p>
          </div>
        </div>
        <div class="content flex-grow-1">
          <div class="notifications p-4 border-bottom w-100" style="border-color:#eee;">
            <h4 class="text-right">اطلاعات سالن</h4>
            <div class="w-100 details d-flex flex-row-reverse flex-wrap">
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4 " >
                <img class="align-self-start" src="img/icons/entrance.svg" alt="">
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">مدت</div>
                  <p class="small">2 ساعت و 30 دقیفه ، شامل یک وقفه</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4 " >
                <img class="align-self-start" src="img/icons/waterfountain.svg" alt="">

                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">مخاطب</div>
                  <p class="small">کودکان کوچکتر از 4 سال اجازه ورود ندارند</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4 " >
                <img class="align-self-start" src="img/icons/hearingassitance.svg" alt="">
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">توضیحات محتوایی</div>
                  <p class="small">استفاده از تفنگ رعد و برق و مه مصنوعی و دود مصنوعی</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4 " >
                <img class="align-self-start" src="img/icons/elevatorsandescalators.svg" alt="">
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">جریمه تاخیر</div>
                  <p
                    class="small"
                  >نفراتی که تاخیر داشته باشند توسط مدیریت در صندلی های موجود مستقر می شوند</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4 " >
                <img class="align-self-start" src="img/icons/wheelchairaccess.svg" alt="">
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">جریمه تاخیر</div>
                  <p
                    class="small"
                  >نفراتی که تاخیر داشته باشند توسط مدیریت در صندلی های موجود مستقر می شوند</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4 " >
                <img class="align-self-start" src="img/icons/restrooms.svg" alt="">
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">جریمه تاخیر</div>
                  <p
                    class="small"
                  >نفراتی که تاخیر داشته باشند توسط مدیریت در صندلی های موجود مستقر می شوند</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4 " >
                <img class="align-self-start" src="img/icons/accessibleseating.svg" alt="">
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">جریمه تاخیر</div>
                  <p
                    class="small"
                  >نفراتی که تاخیر داشته باشند توسط مدیریت در صندلی های موجود مستقر می شوند</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3 col-xs-12 col-md-6 col-lg-4 " >
                <img class="align-self-start" src="img/icons/coatcheck.svg" alt="">
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">جریمه تاخیر</div>
                  <p
                    class="small"
                  >نفراتی که تاخیر داشته باشند توسط مدیریت در صندلی های موجود مستقر می شوند</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-right story p-4">
            <h4>درباره</h4>
            <p>شیسبشیسب شیسب شسیب شیسب سشی بشیس بش یسب شسیب شس یب شیس بش یسب شیس ب شیسب شسی ب شسیب شیس ب شسی بش سیب شیس ب شسیب شیس ب شسیب شیس ب شیس بش یسب شیسبنشیستمکبکشمیسنتبمشکیسنتب کشیسنمتبکشمتیسبکمشیستب</p>
            <!-- <h4>دسته بندی ها</h4>
            <div class="cats d-flex flex-wrap flex-row-reverse mb-5">
              <div
                style="min-width:100px; "
                class="m-2 text-center cat rounded-pill shadow font-weight-bold text-primary px-2 py-1"
                v-for="i in ['نمایش','موزیکال','کلاسیک','درام','برنده']"
                :key="i"
              >{{i}}</div>
            </div> -->
            <h4>قوانین</h4>
            <p>شیسبشیسب شیسب شسیب شیسب سشی بشیس بش یسب شسیب شس یب شیس بش یسب شیس ب شیسب شسی ب شسیب شیس ب شسی بش سیب شیس ب شسیب شیس ب شسیب شیس ب شیس بش یسب شیسبنشیستمکبکشمیسنتبمشکیسنتب کشیسنمتبکشمتیسبکمشیستب</p>
          </div>
        </div>
      </div>
      
      <div class="related text-right container p-3">
        <h5>اجراهای در حال پخش</h5>
        <div class="items row" >
          <div class="item col-xs-12 col-lg-6 flex-row-reverse d-flex p-2" v-for="i in 2" :key="i">
            <img src="img/temps/currentlyplaying.jpg" height="80px" width="50x;" alt="">
            <h5 class=" px-2 font-wight-bold flex-grow-1"  >
              شیسبشیس بش سیب شسیب شس یب ب شیس ب شیسب
            </h5 >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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