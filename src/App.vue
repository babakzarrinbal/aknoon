<template>
  <LayoutFirst />
</template>

<script>
import LayoutFirst from "@/layouts/First.vue";

export default {
  name: "app",
  components: {
    LayoutFirst,
  }
};
</script>

<style lang="scss" scoped>

/deep/ .clickable {
  user-select: none;
  cursor: pointer;
}
</style>
