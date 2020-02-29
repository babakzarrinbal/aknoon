<template>
  <div class="container-fluid p-0">
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      style="background-color:#2b2b2b !important;box-shadow: black 0px 0px 5px;
"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-row-reverse" id="navbarTogglerDemo01">
        <a class="loginbtn hoverablebox clickable" @click="EventBus.$emit('showlogin')">ورود/عضویت</a>
        <ul class="navbar-nav flex-grow-1 flex-row-reverse justify-content-start mr-2">
          <router-link
            tag="li"
            :to="l.link"
            class="nav-item clickable hoverabletext active"
            v-for="(l,i) in links"
            :key="i"
          >
            <a class="nav-link">
              {{l.title}}
              <!-- <span class="sr-only">(current)</span> -->
            </a>
          </router-link>
        </ul>
        <span @click="showsearch = !showsearch" class="clickable flex-grow-0 font-weight-bold text-light" style="max-width:200px">
          {{showsearch? "بستن" : "جستجو"}}
          <img :src="'img/icons/'+(showsearch? 'close': 'magnifying-galss') + '.svg'" width="20" alt />
        </span>
        <div style="left:0;position:fixed; width:100vw;height:100%;top:0px; z-index:999; background-color:#8080808f;" v-if="showsearch" @click="showsearch=false;">
        <div class="input-group flex-grow-0 " style="margin-top:50px; width:calc(100% - 30px);padding-left:15px;" @click.stop>
          <input type="search" class="form-control" style="height:50px" placeholder="جستجو" aria-label="جستجو" />
          <div class="input-group-append"  style="height:50px">
            <span class="input-group-text" style="background-color:#0068d9">
              <img src="img/icons/magnifying-galss.svg" width="20" alt />
            </span>
          </div>
        </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "خانه", link: "/" },
        { title: "هنرهای بصری", link: "/visual" },
        { title: "نمایش", link: "/theatre" },
        // { title: "تماشاخانه‌ها", link: "/theatre/list" },
        { title: "اجراها", link: "/play/list" },
        // { title: "پلاتوها", link: "/plato/list" },
        { title: "مولتی مدیا", link: "/media" },
        { title: "جزئیات نمایش", link: "/theatre/shows/1" },
        { title: "جزئیات سالن", link: "/theatre/stages/1" }
        // { title: "ویدئو", link: "/medias/videos" },
        // { title: "تصاویر", link: "/medias/pics" },
      ],
      showsearch:false,
    };
  }
};
</script>

<style lang="scss" scoped>
.loginbtn {
  background-color: #64abf7;
  color: #0a070c;
  padding: 0 5px;
  border-radius: 15px;
}
.hoverabletext {
  &:hover {
    // transform: translateY(-2px);
    // text-shadow: -1px 5px 2px #b3b1b1;
    a {
      color: #ffffff9f !important;
    }
  }
  &.router-link-exact-active {
    // transform: translateY(-2px);
    // text-shadow: -1px 5px 2px white;
    a {
      color: #ffffff63 !important;
      font-weight: 900;
    }
  }
}
.hoverablebox {
  &:hover {
    transform: translateY(-2px);
    box-shadow: -2px 2px 8px 0px #faecb0;
    text-decoration: none;
  }
}
</style>