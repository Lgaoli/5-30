
<template>
  <div id="goTop">
    <div class="goTop" v-show="goTopShow" @click="goTop">
      <i class="goTopIcon"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "goTop",
  data() {
    return {
      scrollTop: "",
      goTopShow: false
    };
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; ////原生兼容
      if (this.scrollTop > 100) {
        this.goTopShow = true;
      } else {
        this.goTopShow = false;
      }
    },
    goTop() {
      let timer = null,
        _that = this;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 50;
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
          _that.goTopShow = false;
        }
      });
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
 
<style scoped>
.goTop {
  position: fixed;
  right: 1.25rem;
  bottom: 5.625rem;
  width: 3.125rem;
  height: 3.125rem;
  background: rgba(0, 0, 0, 0.65);
}
.goTop:hover {
  background: rgba(0, 0, 0, 0.85);
}
.goTopIcon {
  display: block;
  width: 3.125rem;
  height: 3.125rem;
  background: brown;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

