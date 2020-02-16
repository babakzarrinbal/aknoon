<template>
  <div id="loginsignup" @click="$emit('hide')">
    <div class="bzmodal p-4 bg-light" @click.stop>
      <div class="mt-4" v-if="login">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">User</span>
          </div>
          <input type="text" class="form-control" placeholder="نام کاربری" />
        </div>
        <div class="input-group mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text">Pass</span>
          </div>
          <input type="password" class="form-control" placeholder="پسورد" />
        </div>

        <div class="form-group">
          <button
            @click="$emit('hide')"
            class="mt-3 btn btn-primary btn-lg btn-block login-btn"
          >ورود</button>
        </div>
        <div class="btn btn-link" @click="login=false">عضویت</div>
      </div>
      <div class="mt-4" v-else>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">User</span>
          </div>
          <input type="text" class="form-control" placeholder="نام کاربری" />
        </div>
        <div class="input-group mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text">Pass</span>
          </div>
          <input type="password" class="form-control" placeholder="پسورد" />
        </div>
        <div class="input-group mb-1">
          <div class="input-group-prepend">
            <span class="input-group-text">Pass</span>
          </div>
          <input type="password" class="form-control" placeholder="ورود مجدد پسورد" />
        </div>

        <div class="form-group">
          <button
            @click="$emit('hide')"
            class="mt-3 btn btn-primary btn-lg btn-block login-btn"
          >عضویت</button>
        </div>
        <div class="btn btn-link" @click="login=true">ورود</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: true
    };
  },
  created() {
    window.document.body.style.overflow = "hidden";
  },
  beforeDestroy() {
    if (this.$route.name != "VisualArt") window.document.body.style.overflow = "";
  }
};
</script>

<style lang="scss" scoped>
#loginsignup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: #ffffff61;
  display: flex;
  justify-content: center;
  align-items: center;
  .bzmodal {
    box-shadow: #0e0e0e 0 0 9px 3px;
  }
}
</style>