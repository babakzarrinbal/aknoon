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
    <div class="banner position-relative">
      <div class="imgcontainer px-5">
        <img
          src="img/temps/show-banner.jpg"
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
              src="img/temps/show-poster.jpg"
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
            <h3>متن تایتل برای نمایش</h3>
            <div class="location">
              <span class="px-2">تئاتر شهر</span>
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
            </div>
            <p class="desc">توضیحات در مورد این اجرا که در اینجا نمایش می دهیم</p>
          </div>
        </div>
        <div
          class="buyticket bg-dark rounded d-flex flex-column p-3"
          style="width:250px;border:1px solid gray;"
        >
          <h6>قیمت بلیط از</h6>
          <span>20,000 تومان</span>
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
            v-for="i in 6"
            :key="i"
          >
            <div class="day small">شنبه</div>
            <div class="date text-dark mb-4" dir="rtl">{{i}} اسفند</div>
            <div
              class="start text-primary btn-light px-3 py-1 w-100 rounded"
              style="box-shadow:gray 0 0 5px; font-weight:900;"
            >2:00 pm</div>
            <div
              class="end mt-3 text-primary btn-light px-3 py-1 w-100 rounded"
              style="box-shadow:gray 0 0 5px;  font-weight:900;"
            >8:00 pm</div>
          </div>
        </div>
      </div>
      <div
        class="main mt-3 border-top d-flex flex-row-reverse container"
        style="border-color:#eee;"
      >
        <div class="sidebar flex-shrink-0  px-4 border-left p-2" style="border-color:#eee;width:250px;">
          <div class="video text-right pb-4">
            <h5>&#8249; ویدئو</h5>
            <img src="img/temps/detail-video.png" alt />
          </div>
          <div class="image text-right py-4">
            <h5>&#8249; تصویر</h5>
            <img src="img/temps/detail-video.png" alt />
          </div>
          <div class="image text-right py-4 text-secondary">
            <h5>&#8249; سالن</h5>
            <img src="img/temps/detail-map.png" alt />
            <p>
              تئاتر شهر
              <br />تهران چهارراه ولیعصر
            </p>
          </div>
        </div>
        <div class="content flex-grow-1">
          <div class="notifications p-4 border-bottom w-100" style="border-color:#eee;">
            <h4 class="text-right">اطلاعات اجرا</h4>
            <div class="w-100 details d-flex flex-row-reverse flex-wrap">
              <div class="detail d-flex flex-row-reverse p-3 flex-grow-0" style="max-width:33%;">
                <svg
                  height="30"
                  class="flex-shrink-0"
                  viewBox="0 0 30 30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="15" cy="15" fill="#444" r="15" />
                    <path
                      d="m19.9338602 10.0541892c-1.3705916-1.36556894-3.1629036-2.0541892-4.9669301-2.0541892v7.0029179l-4.9669301 4.9487286c2.7411831 2.731138 7.1926771 2.731138 9.9455746 0 2.7411831-2.731138 2.7411831-7.1663193-.0117144-9.8974573zm-4.9338602-6.0541892c-6.072 0-11 4.928-11 11s4.928 11 11 11 11-4.928 11-11-4.928-11-11-11zm0 20c-4.9725 0-9-4.0275-9-9s4.0275-9 9-9 9 4.0275 9 9-4.0275 9-9 9z"
                      fill="#fff"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">مدت</div>
                  <p class="small">2 ساعت و 30 دقیفه ، شامل یک وقفه</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3" style="max-width:33%;">
                <svg
                  height="30"
                  class="flex-shrink-0"
                  viewBox="0 0 30 30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="15" cy="15" fill="#444" r="15" />
                    <path
                      d="m15 5c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zm-2.74 3.77c-.98 2.39-2.85 4.32-5.21 5.37-.03.28-.05.57-.05.86 0 4.41 3.59 8 8 8s8-3.59 8-8c0-.79-.12-1.55-.33-2.26-.72.17-1.47.26-2.25.26-3.37 0-6.35-1.67-8.16-4.23zm-.26 5.98c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm6 0c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm-4.4436035-7.02246094s4.9759521 4.69519044 8.0616455 3.75244144c3.0856934-.9427491-6.618042-5.4799805-8.0616455-3.75244144z"
                      fill="#fff"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>

                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">مخاطب</div>
                  <p class="small">کودکان کوچکتر از 4 سال اجازه ورود ندارند</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3" style="max-width:33%;">
                <svg
                  height="30"
                  class="flex-shrink-0"
                  viewBox="0 0 30 30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="15" cy="15" fill="#444" r="15" />
                    <path
                      d="m15 6 9 16h-18zm0 12c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm0-8c-.6666667 0-1 .3333333-1 1v4c0 .6666667.3333333 1 1 1s1-.3333333 1-1v-4c0-.6666667-.3333333-1-1-1z"
                      fill="#fff"
                      fill-rule="nonzero"
                    />
                  </g>
                </svg>
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">توضیحات محتوایی</div>
                  <p class="small">استفاده از تفنگ رعد و برق و مه مصنوعی و دود مصنوعی</p>
                </div>
              </div>
              <div class="detail d-flex flex-row-reverse p-3" style="max-width:33%;">
                <svg
                  height="30"
                  class="flex-shrink-0"
                  viewBox="0 0 30 30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="15" cy="15" fill="#444" r="15" />
                    <g fill="#fff">
                      <path
                        d="m15 15s3.7612489 1.400703 3.9892033 3.7746082l.0107967.2253918v3h1v2h-10v-2h1v-3c0-2.5103852 4-4 4-4zm0 1c-2 1.0702277-3 2.0702277-3 3v2h6v-2l-.0056711-.1216729c-.0831758-.8951887-1.0812854-1.854631-2.9943289-2.8783271z"
                      />
                      <path
                        d="m20 6v2h-1v3l-.0096093.2150674c-.2156968 2.4355492-3.9903907 4.7849326-3.9903907 4.7849326s-4-2.4896148-4-5v-3h-1v-2zm-5 4.8561798c-1.6568542 0-3-1.92640459-3 0 0 1.2842698 1 2.6655432 3 4.1438202 2-1.478277 3-2.8595504 3-4.1438202 0-1.92640459-1.3431458 0-3 0z"
                      />
                    </g>
                  </g>
                </svg>
                <div class="px-2 detailtext d-flex flex-column text-right">
                  <div class="title font-weight-bold">جریمه تاخیر</div>
                  <p
                    class="small"
                  >نفراتی که تاخیر داشته باشند توسط مدیریت در صندلی های موجود مستقر می شوند</p>
                </div>
              </div>
            </div>
          </div>
          <div class=" text-right story p-4">
            <h4 class="text-right">داستان</h4>
            <p> شیسبشیسب شیسب شسیب شیسب سشی بشیس بش یسب شسیب شس یب شیس بش یسب شیس ب شیسب شسی ب شسیب شیس ب شسی بش سیب شیس ب شسیب شیس ب شسیب شیس ب شیس بش یسب شیسبنشیستمکبکشمیسنتبمشکیسنتب کشیسنمتبکشمتیسبکمشیستب</p>
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