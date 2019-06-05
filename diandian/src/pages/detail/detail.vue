<template>
  <div>这是详情页</div>
</template>
<script>
export default {
  created() {
    var newsID = this.$route.query.id;
    var that = this;
    this.$axios
      .get("https://api.ddjingxuan.cn/api/v2/goods/" + newsID)
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.comment();
  },
  methods: {
    comment() {
      var newsID = this.$route.query.id;
      var that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/comment/1645" + newsID)
        .then(function(res) {
          console.log(res);
          if (res.data.lenght > 0) {
          } else {
            console.log("暂时没有该商品的评论");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

