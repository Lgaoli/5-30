<template>
  <div class="wrapper" style="
">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data: function() {
    return {
      swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                autoplayDisableOnInteraction:false,//手动滑动之后还能自动播放
                loop:true,//循环
                autoplay:2000,                //每张播放时长3秒，自动播放
                speed:1000,//滑动速度
                // delay:1000
                
               
            },
      swiperList: [
        {
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
        },
        {},
        {
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
        },
        {}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 12.5rem;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
