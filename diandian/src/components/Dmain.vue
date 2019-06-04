<template>
  <div class="main">
    <Dnav></Dnav>
    <Dswiper></Dswiper>
    <Dsudoku></Dsudoku>
    <Dgotop></Dgotop>
    <Drecently></Drecently>
  </div>
</template>
<script>
import Dsudoku from '../components/Sudoku'
import Dswiper from "../components/Dswiper";
import Dnav from "../components/Dnav";
import Dgotop from "../components/Dgotop";
import Drecently from "../components/recently";
export default {
  components: {
    Dswiper,
    Dgotop,
    Dnav,
    Drecently,
    Dsudoku
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    windowScroll() {
      //滚动条距离页面顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //原生兼容
    }
  }
};
</script>

<style lang="scss">
.main {
  margin-top: 5.625rem;
  margin-bottom: 5.625rem;
}
</style>

