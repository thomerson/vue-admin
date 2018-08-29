// scroll to top
<template>
    <div class="backtotop" v-show="isShowBacktoTop" @click="toTop">
        <i class="iconfont icon-up el-input__icon"></i>
    </div>
</template>

<script>
export default {
  name: "backtotop",
  data() {
    return {
      isShowBacktoTop: false
    };
  },
  methods: {
    handleScroll: function() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isShowBacktoTop = scrollTop > 0;
    },
    toTop: function() {
      let timer = setInterval(() => {
        let top =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        let speed = Math.ceil(top / 5);
        let step = top - speed;
        document.body.scrollTop = step;
        document.documentElement.scrollTop = step;
        if (top === 0) {
          clearInterval(timer);
        }
      }, 20);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.backtotop {
  position: fixed;
  width: 40px;
  height: 40px;
  background-color: white;
  right: 100px;
  bottom: 100px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 6px #66b1ff;
  z-index: 9;
}

div.backtotop:hover {
  background-color: tan;
}
</style>
