<template>
  <div class="router">
    <div v-for="(item,index) in 50 " style="color: #fff">blue{{ index }}</div>
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
    background-color blue
    margin-bottom 48px
</style>
