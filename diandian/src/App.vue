<template>
  <div id="app" style="font-size:1.3rem">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs, Popup, Loading } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Popup)
  .use(Loading);
export default {
  name: "App",
  data() {
    return {};
  } ,
  // beforeCreate() {
  //       this.$axios
  //         .get("https://api.ddjingxuan.cn/api/v2/code/user")
  //         .then(function(res) {
  //           console.log(res);
  //         })
  //         .catch(function(error) {
  //           console.log(error);
  //         });
  //     }
};
</script>

<style>
@import "./common/iconf/iconfont.css";
@import "./uitls/base.css";
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
a {
  color: #000;
}
</style>
