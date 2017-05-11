<template>
  <div class="router">
    <div v-for="(item,index) in 100 " style="color: #fff">green{{ index }}</div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    },
    components: {}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .router
    width 100%
    background-color green
    margin-bottom 48px
</style>
