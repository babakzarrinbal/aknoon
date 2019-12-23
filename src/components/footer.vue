<template>
  <div class="container-fluid d-flex flex-row-reverse footer">
    <div class="pics d-flex ">
      <img src="" class="footerpics"  alt="">
      <img src="" class="footerpics"  alt="">
      <img src="" class="footerpics" alt="">
    </div>
    <div class="sec team d-flex flex-column" dir="rtl">
      <h4>تیم اکنون</h4>
      <span style="text-align:right" v-for="(v,i) in ['آتوسا قاضی' , 'رامین','خودم','خودش']" :key="i">{{(i +1)+ " - "+ v}}</span>
    </div>
    <div class="sec address d-flex flex-column">
      <h4>آدرس دفتر اکنون</h4>
      <span>شیس بشیسب شیسب شسیبش سیبش یسبشیسشیسب شیسبشیسب یبشیسب شیسب شسیب یشبشیسب یسبشیس</span>
    </div>
    <div class="sec contact d-flex flex-column">
      <h4>راه‌های ارتباطی</h4>
      <span v-for="(v,i) in ['کبوتر نامه بر','موبایل','نامه','ایمیل']" :key="i">{{ v}}</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  color:white;
  h4{
    color:#f3c10f
  }
  .pics{
    .footerpics{
      background-color: #f3c10f;
      border-radius: 12px;
      margin:8px;
      width:70px;
      height:70px
    }
    
  }
  .sec{
    min-width:150px;
    margin:0 10px;
    text-align: right;
  }
  padding: 45px 0;
}
</style>