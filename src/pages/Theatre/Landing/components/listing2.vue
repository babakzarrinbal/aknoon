<template>
  <div class="container-fluid listing2 mt-2 d-flex flex-row-reverse">
    <div class="favlist d-flex flex-column" style="width:300px;">
      <h5 style="font-weight:bold">تئاترهای محبوب</h5>

      <div class="categories">
        <h5 class="text-bold" style="background-color: #cccccc;padding: 8px 5px;">دسته‌بندی‌ها</h5>
        <div class="cats d-flex flex-wrap flex-row-reverse">
          <span
            class="px-2 py-1 m-2 clickable btn border border-primary"
            style="font-size:13px;color:initial;"
            v-for="(v,i) in cats"
            :key="i"
            :class="{'btn-success':v==activeCat,'btn-warning':v!=activeCat}"
            @click="activeCat = v"
          >{{v}}</span>
        </div>
      </div>
      <div
        v-if="banners && banners.length && banners[1]"
        class="banner align-self-center mb-3 pb-3 border-bottom border-dark"
      >
        <img :src="banners[1]" width="250px" height="40px" alt />
      </div>
      <div class="filter d-flex justify-content-around">
        <span
          class="filteritem clickable"
          :class="{'active':activeRate==fv.id}"
          @click="activeRate = fv.id"
          v-for="(fv,i) in ratings"
          :key="i"
        >{{fv.title}}</span>
      </div>
      <div class="showlist d-flex flex-column pr-3" dir="rtl">
        <a class="my-2" v-for="(i,index) in visibleshows" :key="index">{{i.title}}</a>
      </div>
      <div
        class="showall m-3 border-bottom text-center border-dark align-self-center"
      >نمایش همه تئاترها</div>
    </div>
    <div class="shows-firstpart">
      <div class="shows mt-5 d-flex flex-row-reverse flex-wrap">
        <div
          class="show d-flex flex-column m-2"
          v-for="(v,i) in visibleshows.slice(0,4)"
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
      <div v-if="banners && banners.length && banners[2]" class="banner my-2">
        <img :src="banners[2]" style="height:70px;max-width:100%;" />
      </div>
      <div class="shows mt-5 d-flex flex-row-reverse flex-wrap">
        <div
          class="show d-flex flex-column m-2"
          v-for="(v,i) in visibleshows.slice(4,8)"
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
  props: {
    shows: Array,
    ratings: Array,
    banners: Array
  },
  data() {
    return {
      activeRate: 1,
      activeCat: "همه اجراها"
    };
  },
  computed: {
    cats() {
      return this.shows.reduce(
        (cu, show) => {
          show.categories.forEach(c => {
            if (cu.includes(c)) return;
            cu.push(c);
          });

          return cu;
        },
        ["همه اجراها"]
      );
    },
    visibleshows() {
      let rate = this.ratings.find(r => r.id == this.activeRate);
      let shows =
        this.activeCat == "همه اجراها"
          ? [...this.shows]
          : this.shows.filter(s => s.categories.some(c => c == this.activeCat));
      if (!rate) return shows;
      return shows.sort((a, b) =>
        (a[rate.field] || 0) > (b[rate.field] || 0) ? 1 : -1
      );
    }
  }
  // data() {
  //   return {

  //   };
  // }
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
  .show {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 5px gray;
    }
  }
}
</style>