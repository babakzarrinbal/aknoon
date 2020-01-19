<template>
  <div class="staticpage" v-html="html"></div>
</template>

<script>
export default {
  data() {
    return {
      loader: `<div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
              </div>`,
      nopage: `<h3 class="PageNotFound">The requested Page does not Exists!</h3>`
    };
  },

  asyncComputed: {
    html: async function() {
      this.html = this.loader;
      let result = await this.Req(this.$route.params.pathMatch);
      return result || this.nopage;
    }
  }
};
</script>

<style>
.PageNotFound {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  /* background-color: white;
    color:gray; */
}
</style>