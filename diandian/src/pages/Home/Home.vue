<template>
  <div class="Layout">
    <Dheader></Dheader>
    <Dmain></Dmain>
    <Dfooter :activeIndex="0"></Dfooter>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Popup, Loading } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Loading);
import Dheader from "../../components/Dheader";
import Dfooter from "../../components/Dfooter";
import Dmain from "../../components/Dmain";
export default {
  name: "Layout",
  components: {
    Dheader,
    Dfooter,
    Dmain
  },
  data() {
    return {
      show: true
    };
  },
  beforeCreate() {
    let url =
      "http://pub.hqyulin.com/?token=be9ea809f59ea514b33fa4d6593b75e9#/";
    let str = url.split("?")[1];
    let str1 = str.split("=")[1].split("#")[0];
    localStorage.setItem("token", str1, 7200);
    this.$store.commit("setToken", str1);

    if (this.$store.state.token) {
      this.$router.push("/");
    } else {
      // this.$router.replace("/login");
      console.log("没有token");
    }
  },
  created() {
    this.tokend();
    this.Token();
  },
  methods: {
    tokend() {
      // console.log(window.location.href);
    },
    getTime() {},
    Token() {}
  }, //通过computed获取的方式
  computed: {
    getToken() {
      return this.$store.getters.getToken;
    }
  }
};
</script>
<style lang="scss">
</style>



