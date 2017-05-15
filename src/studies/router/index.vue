<template>
  <div style="position: relative">
    <transition :name="transitionName">
      <router-view class="my-router"></router-view>
    </transition>
    <div class="tabs">
      <router-link class="tab" v-for="tab in tabs" :key="tab.id" :to="tab.path">
        <icon :name="tab.icon" :scale="2" style="color: red"></icon>
        <div class="tab-title">{{tab.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tabs: [
          {path: '/router/red', title: '红色',icon: 'Category'},
          {path: '/router/green', title: '绿色',icon: 'all'},
          {path: '/router/blue', title: '蓝色',icon:'favorite'},
        ],
        transitionName: ''
      };
    },
    components: {},
    watch: {
      '$route' (to, from) {
        let toRouter = to.path.split('/')[2];
        let fromRouter = from.path.split('/')[2];
        if (toRouter === 'red' && fromRouter === 'blue')
          this.transitionName = 'slide-left'
        else if (toRouter === 'green' && fromRouter === 'red')
          this.transitionName = 'slide-left'
        else if (toRouter === 'blue' && fromRouter === 'green')
          this.transitionName = 'slide-left'
        else if (toRouter === 'blue' && fromRouter === 'red')
          this.transitionName = 'slide-right'
        else if (toRouter === 'red' && fromRouter === 'green')
          this.transitionName = 'slide-right'
        else if (toRouter === 'green' && fromRouter === 'blue')
          this.transitionName = 'slide-right'
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tabs
    background: #f5f5f5
    height: 48px
    border: 0
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    z-index: 1000
    display: flex
    .tab
      flex: 1
      color: #8d8888
      text-align: center
      margin-top: 6px
      font-size: 12px

  .my-router
    position absolute
    left 0
    top 0

  .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active {
    transition: all .5s linear
  }

  .slide-right-enter, .slide-left-leave-active
    left -400px

  .slide-right-leave-active, .slide-left-enter
    left 400px
</style>
