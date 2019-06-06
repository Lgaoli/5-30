<template>
  <div>
    <div class="detail-header">
      <div class="back">
        <router-link to="/">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>商品详情</div>
      <div class="shop">
        <router-link to="/shop">
          <i class="iconfont icon-htmal5icon29"></i>
        </router-link>
      </div>
    </div>
    <div class="detail-main">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in detileswiper" :key="index">
          <img :src="item.img_url" class="swiper-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" style="text-align: right;"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        autoplayDisableOnInteraction: false, //手动滑动之后还能自动播放
        loop: true, //循环
        autoplay: 2000, //每张播放时长3秒，自动播放
        speed: 1000 //滑动速度
        // delay:1000
      },
      detileswiper: []
    };
  },
  created() {
    var newsID = this.$route.query.id;
    var that = this;
    this.$axios
      .get("https://api.ddjingxuan.cn/api/v2/goods/" + newsID)
      .then(function(res) {
        console.log(res);
        that.detileswiper = res.data.banner;
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
<style lang="scss">
.detail-header {
  height: 4.5rem;
  line-height: 4.5rem;
  font-size: 1.9375rem;
  background: #fafafa;
  display: flex;
  justify-content: space-between;
  i {
    color: #060606;
    font-size: 2.125rem;
  }
  .back {
    width: 3.125rem;
    text-align: center;
    height: 100%;
    line-height: 4.5rem;
  }
  .shop {
    width: 3.125rem;
    text-align: center;
    height: 100%;
    line-height: 4.5rem;
  }
}
.detail-main {
  .swiper-container {
    height: 30.57rem;
    img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>


