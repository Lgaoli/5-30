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
  beforeCreate() {},
  created() {
    console.log(window.location.href);
    let url =
      "http://pub.hqyulin.com/?token=921186a225bca7200eab8ff3aa931699#/";
    let str = url.split("?")[1];

    let str1 = str.split("=")[1].split("#")[0];
    console.log(str1);
    this.$store.commit("set_token", str1["str1"]);
    if (this.$store.state.token) {
      // this.$router.push("/");
      console.log(this.$store.state.token);
    } else {
      // this.$router.replace("/login");
      console.log('没有')
    }



  },
  methods: {}
};
</script>
<style lang="scss">
</style>



