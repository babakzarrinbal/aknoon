<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" style="background-color:#2b2b2b !important">
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
        <a class="loginbtn hoverablebox" href="#">ورود/عضویت</a>
        <ul class="navbar-nav flex-grow-1 justify-content-end mr-2">
          <li class="nav-item clickable hoverabletext active" v-for="(l,i) in links" :key="i">
            <a class="nav-link">
              {{l.title}}
              <!-- <span class="sr-only">(current)</span> -->
            </a>
          </li>
        </ul>
        <div class="input-group flex-grow-0" style="max-width:200px">
          <input
            type="search"
            class="form-control"
            placeholder="جستجو"
            aria-label="جستجو"
          />
          <div class="input-group-append">
            <span class="input-group-text bg-warning" >
              <img src="img/icons/magnifying-galss.svg" width="20" alt="">
            </span>
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
        { title: "اجراها" },
        { title: "تماشاخانه‌ها" },
        { title: "پلاتوها" },
        { title: "پادکست‌ها" },
        { title: "ویدئو" },
        { title: "ببینیم" },
        { title: "اخبار" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.loginbtn {
  background-color: #faecb0;
  color: #0a070c;
  padding: 0 5px;
  border-radius: 15px;
}
.hoverabletext {
  &:hover {
    transform: translateY(-2px);
    text-shadow: -1px 5px 2px white;
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