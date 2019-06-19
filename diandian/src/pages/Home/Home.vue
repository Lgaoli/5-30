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
         console.log(this)
      this.$axios.get("https://api.ddjingxuan.cn/api/v2/code/user")
        .then(function(res) {
          console.log(res);
          
        })
        .catch(function(error) {
          console.log(error);
        });

},
  created() {
 
  },
  methods: {
 
  },

};
</script>
<style lang="scss">
</style>



