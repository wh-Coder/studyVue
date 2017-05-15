<template>
  <div>
    <h1 @click="alert">hello</h1>
    <div class="scbox">
      <Scroller lock-x height="500px" use-pulldown use-pullup ref="my_scroller"
                @on-pulldown-loading="onPulldown" @on-pullup-loading="onPullup">
        <div class="inner">
          <ul>
            <li v-for="(item,index) in scdata">测试{{item}}</li>
          </ul>
        </div>
      </Scroller>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Scroller} from 'vux'
  export default {
    data() {
      return {
        scdata: []
      }
    },
    mounted() {
      this.scdata = Array.apply(null, Array(100)).map(function (item, i) {
        return i;
      });
    },
    methods: {
      alert() {
        this.$vux.alert.show({
          title: 'alert test',
          content: 'close?',
          onShow () {
            console.log('Plugin: I\'m showing')
          },
          onHide () {
            console.log('Plugin: I\'m hiding')
          }
        })
      },
      onPulldown() {
        console.log('onPulldown')
        setTimeout(() => {
          let num = this.scdata.slice(0, 1)
          this.scdata.unshift(--num);
          this.$refs.my_scroller.donePulldown()
          this.$nextTick(() => {
            this.$refs.my_scroller.reset()
          })
        }, 1000)
      },
      onPullup() {
        console.log('onPullup')
        setTimeout(() => {
          let num = this.scdata.slice(-1);
          this.scdata.push(++num);
          this.scdata.push(++num);
          this.$refs.my_scroller.donePullup();
          this.$nextTick(() => {
            this.$refs.my_scroller.reset()
          })
        }, 1000)
      }
    },
    components: {Scroller}
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .scbox
    width: 300px
    height 500px
    border 2px solid #000000
    background-color #ccc
    overflow: hidden
</style>
