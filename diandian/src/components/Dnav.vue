<template>
  <div>
    <ly-tab v-model="selectedId" :items="items" :options="options" :change="selectChange()"></ly-tab>
  </div>
</template>
 
<script>
import Vue from "vue";
import LyTab from "ly-tab";
Vue.use(LyTab);
export default {
  data() {
    return {
      selectedId: 0,
      items: [],
      options: {
        activeColor: "#ef7634",
        // 可在这里指定labelKey为你数据里文字对应的字段
        labelKey: "name"
      }
    };
  },
  created() {
    this.nav();
  },
  methods: {
    selectChange() {
      console.log(this.items[this.selectedId].cat_id);
    },

    nav() {
      let that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/cate")
        .then(function(res) {
          that.items = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
