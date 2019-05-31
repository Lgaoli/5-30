<template>
  <div class="main">
    <Dswiper></Dswiper>
    <Dgotop></Dgotop>
  </div>
</template>
<script>
import Dswiper from "../components/Dswiper";
import Dgotop from "../components/Dgotop"
export default {
  components: {
    Dswiper,
    Dgotop
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop); 
},
  methods: {
    windowScroll() {
      //滚动条距离页面顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //原生兼容
      console.log(scrollTop);
    }
  }
};
</script>

<style lang="scss">
.main {
  margin-top: 1.875rem;
  height: 200rem;
}
</style>

