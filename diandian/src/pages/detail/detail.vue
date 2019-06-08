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
      <div class="detail-main-main">
        <div class="vip" style="background:#fafafa">
          <div class="vipmain">
            <div class="dredge-vip" style="background:#fb7c37">
              <p>开通会员</p>
            </div>
            <div class="vipmain1">
              <div class="vipmain1-T">
                <div class="vipmain1-text" style="    padding-right:7.625rem;">
                  <p>立马享受最高5.8折优惠</p>
                </div>
                <div class="vipmain1-text1">
                  <i class="iconfont">&#xe632;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shopdetall">
          <div v-for="(items,indexs) in shopdetall" :key="indexs">
            <div class="shopmoney">
              <span class="supply_price">优惠价：￥ {{items.supply_price}}</span>
              <span class="shop_price">原价：￥{{items.shop_price}}</span>
            </div>
            <div class="share">
              <span>
                <i class="iconfont">&#xe63e;</i>
                分享
              </span>
            </div>
            <div class="shopname">
              <p style="font-weight:600">{{items.goods_name}}</p>
            </div>
            <div class="goods_sales" style="padding:0.95rem">
              <div
                class="goods_sale_text"
                style="  text-decoration: line-through;"
              >原价:{{items.shop_price}}</div>
              <div class="goods_sale_text">库存量:{{items.store_count}}</div>
              <div class="goods_sale_text">销量:{{items.good_sales}}</div>
            </div>
            <div class="detail-main-main-content">
              <van-tabs v-model="active">
                <van-tab title="商品介绍" v-html="items.goods_content"></van-tab>
                <van-tab title="评论" v-for="(items,indexs) in detilcomment" :key="indexs">
                  <div v-if="detilcomment.length>0">
                    {{items.goods_rank}}

                    <van-rate v-model="items.goods_rank" />
                  </div>
                  <div v-else>暂时没有商品评论</div>
                </van-tab>
              </van-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-footer">
      <div class="detail-footer1">
        <div class="service">
          <div class="service1">
            <a>
              <i class="iconfont">&#xe61c;</i>
              <span>客服</span>
            </a>
          </div>

          <div class="collect">
            <a>
              <i class="iconfont">&#xe613;</i>
              <span>客服</span>
            </a>
          </div>
        </div>
        <div class="detail-buy">
          <div style="    border-top-left-radius: 6.25rem; border-bottom-left-radius: 6.25rem;">
            <p>加入购物车</p>
          </div>
          <div
            style="
    border-top-right-radius: 6.25rem;
    border-bottom-right-radius: 6.25rem;
          background: #ef7634;  
          "
          >
            <p>立即购买</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Rate } from "vant";
Vue.use(Tab)
  .use(Tabs)
  .use(Rate);
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
      detileswiper: [], //商品轮播图
      shopdetall: [], //商品信息
      detilcomment: [], //商品评论
      active: 0
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
        that.shopdetall.push(res.data.detail);
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
        .get("https://api.ddjingxuan.cn/api/v2/comment/1645/" + newsID)
        .then(function(res) {
          that.detilcomment = res.data;
          console.log(that.detilcomment[0].goods_rank);
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
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  height: 4.5rem;
  line-height: 4.5rem;
  top: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  position: fixed;
  justify-content: space-between;
  z-index: 9999;
  font-size: 1.9375rem;

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
  margin-top: 4.5rem;
  margin-bottom: 4.4375rem;
  .swiper-container {
    height: 30.57rem;
    img {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
  }
  .vip {
    .vipmain {
      display: flex;
      justify-content: flex-start;
      padding: 1.8125rem;
      .dredge-vip {
        display: inline-block;

        border-top-left-radius: 10%;
        border-bottom-left-radius: 10%;
        p {
          color: #ffd9ad;
          font-size: 1.4375rem;
          padding: 0.89rem;
        }
      }
      .vipmain1 {
        display: inline-block;
        background: #f5f5f5;
        margin-left: -0.225rem;
        border-top-right-radius: 10%;
        border-bottom-right-radius: 10%;
        .vipmain1-T {
          color: #fc7a33;
          display: flex;
          justify-content: space-evenly;
          padding: 0.89rem;

          i {
            font-size: 1.75rem;
          }
        }
      }
    }
  }
  .shopdetall {
    padding: 1.189rem;
    .shopmoney {
      .supply_price {
        color: #ff7441;
        font-size: 1.496rem;
        font-weight: 600;
        margin-right: 3.75rem;
      }
      .shop_price {
        color: #ccc;
        font-size: 0.65rem;
        text-decoration: line-through;
      }
    }
    .share {
      padding: 0.863rem;
      text-align: right;
      span {
        padding: 0.958rem;
        background: #dedede;
        border-radius: 6.25rem;
      }
    }
    .goods_sales {
      display: flex;
      justify-content: space-between;
      div {
        color: #ccc;
      }
    }
    .shopname {
      padding: 0.7rem;
    }
    .detail-main-main-content {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.detail-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  z-index: 999;
  background: #fff;
  .detail-footer1 {
    display: flex;
    justify-content: flex-start;
    height: 4.4375rem;
    padding: 0.625rem;
    .service {
      display: flex;
      flex: 1;
      div {
        flex: 0.4;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .detail-buy {
      flex: 1;
      border: #ef7634 1px solid;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        p {
        }
      }
    }
    a {
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }
  }
}
</style>


