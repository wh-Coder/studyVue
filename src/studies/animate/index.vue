<template>
  <div>
    <input type="button" value="bounce" @click="bounce=!bounce"/>
    <div class="wrap">
      <transition enterActiveClass="bounceInLeft" leaveActiveClass="bounceOutRight" appear>
        <div class="animated box" v-show="bounce"></div>
      </transition>
    </div>

    <input type="button" value="fade" @click="fade=!fade"/>
    <div class="wrap">
      <transition enterActiveClass="fadeInLeft" leaveActiveClass="fadeOutRight">
        <div class="animated box" v-show="fade"></div>
      </transition>
    </div>

    <input type="button" value="slide" @click="slide=!slide"/>
    <div class="wrap">
      <transition enterActiveClass="slideInLeft" leaveActiveClass="slideOutRight" appear>
        <div class="animated box" v-show="slide"></div>
      </transition>
    </div>

    <input type="button" value="rotate" @click="rotate=!rotate"/>
    <div class="wrap">
      <transition enterActiveClass="rotateInDownLeft" leaveActiveClass="rotateOutUpRight" appear>
        <div class="animated box" v-show="rotate"></div>
      </transition>
    </div>

    <hr/>
    <input type="button" value="velocity" @click="velfn"/>
    <div class="wrap">
      <div class="box" ref="box"></div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import 'animate.css'
  import Velocity from 'velocity-animate'
  export default {
    data() {
      return {
        bounce: true,
        fade: true,
        slide: true,
        rotate: true,
        opacity: true
      };
    },
    components: {},
    mounted() {
      this.velfn()
    },
    methods: {
      velfn() {
        this.opacity = !this.opacity
        if (!this.opacity) {
          Velocity(this.$refs.box, {
            opacity: 0
          }, {
            duration: 500
          });
        } else {
          Velocity(this.$refs.box, {
            opacity: 1
          }, {
            duration: 500
          });
        }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    height: 100px
    margin-bottom: 20px
    .box
      margin: 0 auto
      width: 200px
      height: 100px
      background: red
</style>
