<template>
  <div class="home">
    <!-- <Icon></Icon> -->
    {{showTime | formatTime}}
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'home',
  components: {
    Icon,
  },
  props: {},
  data () {
    return {
      showTime: 18455,
      isPause: false,
      showTimeInterval: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
    initEvent () {
      // let total = 30 * 600 + 450
      this.calculagraph();

      setTimeout(() => {
        clearInterval(this.showTimeInterval);
      }, 5000)

      setTimeout(() => {
        this.calculagraph();
      }, 10000)
    },
    calculagraph () {
      if (!this.isPause) {
        this.showTimeInterval = setInterval(() => {
          this.showTime += 10
        }, 1000)
      }
    }
  },
  created () {
    this.initEvent()
  },
  mounted () { },
  filters: {
    formatTime (num) {
      class MatchTime {
        constructor(time) {
          this.time = time
        }
        showTime () {
          let m = Math.floor(this.time / 600)
          let s = Math.floor((this.time % 600) / 10)
            .toString()
            .padStart(2, '0')
          return `${m}分${s}秒`
        }
      }
      let time = new MatchTime(num).showTime()
      return time;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
