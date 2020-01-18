<template>
  <div class="container-fluid listing2 mt-2 d-flex flex-row-reverse">
    <div class="favlist d-flex flex-column" style="width:300px;">
      <h5 style="font-weight:bold">تئاترهای محبوب</h5>
      <div class="filter d-flex justify-content-around" style>
        <span class="filteritem active">گیشه</span>
        <span class="filteritem">مردم</span>
        <span class="filteritem">منتقدان</span>
      </div>
      <div class="showlist d-flex flex-column pr-3" dir="rtl">
        <a class="my-2" v-for="i in new Array(14).keys()" :key="i">- نمایش شماره {{i+1}}</a>
      </div>
      <div
        class="showall m-3 border-bottom text-center border-dark align-self-center"
      >نمایش همه تئاترها</div>
      <div class="banner align-self-center mb-3 pb-3 border-bottom border-dark">
        <img src="img/temps/banner.jpg" width="250px" height="40px" alt />
      </div>
      <div class="categories">
        <h5 class="text-bold">دسته‌بندی‌ها</h5>
        <div class="cats d-flex flex-wrap">
          <span class="py-2" style="width:50%" v-for="(v,i) in cats" :key="i">{{v}}</span>
        </div>
      </div>
    </div>
    <div class="shows-firstpart">
    <div class="shows mt-5 d-flex flex-row-reverse flex-wrap">
      <div
        class="show d-flex flex-column m-2 "
        v-for="(v,i) in new Array(4).keys()"
        :key="i"
        style="border:2px solid yellow;width:300px; "
      >
        <img
          :src="'img/temps/2-'+(i+1)+'.jpg'"
          alt
          style="border-bottom:2px solid yellow;width:296px"
        />
        <div>
          خلاصه مطلب در اینجا قرار میگیرد
          خلاصه مطلب در اینجا قرار میگیرد
        </div>
      </div>
    </div>
    <div class="banner my-2" >
      <img src="img/temps/banner.jpg" style="height:70px;max-width:100%;">
    </div>
    <div class="shows mt-5 d-flex flex-row-reverse flex-wrap">
      <div
        class="show d-flex flex-column m-2 "
        v-for="(v,i) in new Array(4).keys()"
        :key="i"
        style="border:2px solid yellow;width:300px;"
      >
        <img
          :src="'img/temps/2-'+(i+5)+'.jpg'"
          alt
          style="border-bottom:2px solid yellow;width:296px"
        />
        <div>
          خلاصه مطلب در اینجا قرار میگیرد
          خلاصه مطلب در اینجا قرار میگیرد
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: [
        "بزرگسال",
        "کودک و نوجوان",
        "کمدی",
        "رخداد",
        "بزرگسال",
        "کودک و نوجوان",
        "کمدی",
        "رخداد"
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.listing2 {
  padding-top: 15px;
  background-color: white;
  text-align: right;
  .filter {
    background-color: #cccccc;
    padding: 8px 0;
    .filteritem {
      color: #3a3a3a;
      font-weight: bold;
      border-bottom: 1px solid transparent;
      &.active {
        color: black;
        border-bottom: 1px solid red;
      }
    }
  }
  .show{
    &:hover{
      transform: translateY(-2px);
      box-shadow: 0 2px 5px gray;
    }
  }
}
</style>