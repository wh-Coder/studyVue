<template>
  <div>
    <div class="variables">
      <div class="general">general</div>
      <div class="shade">shade</div>
      <div class="depth">depth</div>
    </div>
    <div class="mixin border-1px"></div>
    <div class="mixin"></div>
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
  $general-color = #aaa
  $shade-color = #eee
  $depth-color = #888

  @import "./mixin.styl"
  .variables
    width: 300px
    height: 100px
    margin: 0 auto
    background: red
    div
      width: 80px
      height: 80px
      display inline-block
    .general
      background-color: $general-color
    .shade
      background-color: $shade-color
    .depth
      background-color: $depth-color

  .mixin
    width: 300px
    height: 100px
    border-1px(#000)
</style>
