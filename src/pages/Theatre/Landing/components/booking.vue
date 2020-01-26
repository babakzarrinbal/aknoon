<template>
  <div class="booking d-flex flex-row-reverse mt-4">
    <div class="inputcontainer">
      <input type="search" v-model="show.name" placeholder="نام اجرا" />
    </div>
    <div class="inputcontainer qty">
      <input type="number" min="0" v-model="show.qty" class="py-1" placeholder="تعداد بلیط" />
    </div>
    <div class="inputcontainer" style="color:initial;">
      <DatePicker v-model="show.date" placeholder="تاریخ" />
    </div>
    <div class="inputcontainer">
      <DatePicker type="time" v-model="show.time" placeholder="زمان اجرا" />
    </div>
    <div class="inputcontainer" @click="buyticket()">
      <div class="applybtn py-3" >خرید بلیط</div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue-persian-datetime-picker";
export default {
  data(){
return {
  show:{
    name:null,
    data:null,
    qty:null,
    time:null
  }
}
  },  
  components: {
    DatePicker
  },
  methods:{
    buyticket(){
      window.alert(JSON.stringify(this.show))
    }
  }
};
</script>

<style scoped lang='scss'>
.inputcontainer{
  width:calc(25% - 20px);

}
/deep/ input {
  text-align: right;
  border-radius: 0;
  height: 38px;
  width:100%;
}
.qty input::-webkit-outer-spin-button,
.qty input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.applybtn {
  background-color: #f3c10f;
  width:100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

/deep/ .vpd-icon-btn {
  display: none;
}
</style>