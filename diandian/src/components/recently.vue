<template>
  <div class="recently">
    <div>
      <div class="recently-header">
        <img src="../assets/img/今日推荐.png" alt>
        <p class="rec-title">今日推荐</p>
      </div>
      <div class="rec-more">更多</div>
    </div>
    <div class="rec-list">
      <ul>
        <li class="rec-list-li" v-for="(item,index) in recentlylist" :key="index">
          <div class="rec-list-img">
            <img :src="item.img_url" alt>
          </div>
          <div class="shopss">
            <div class="rec-list-text">
              <p>{{item.goods_name}}</p>
              <span class="supply_price">￥{{item.supply_price}}</span>
              <span class="shop_price">原价：￥{{item.shop_price}}</span>
            </div>
            <div class="rec-list-buy">
              <p>{{item.good_sales}}人购买</p>
              <div class="buy" >
                <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="around">
                <img src="../assets/img/首页01_11.jpg" alt>
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentlylist: []
    };
  },
  created() {
    var that = this;
    this.$axios
      .get("https://api.ddjingxuan.cn/api/v2/goods/recent")
      .then(function(res) {
        that.recentlylist = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    
  }
};
</script>
<style lang="scss">
.recently {
  padding: 1.25rem;
  .rec-list {
    padding: 0.625rem;
    .rec-list-li {
      padding: 0.3125rem;
      margin-top: 0.625rem;
      border: #ccc 0.0625rem solid;
      border-radius: 5%;
      .rec-list-img {
        img {
          width: 100%;
          height: 6.25rem;
          box-sizing: border-box;
        }
      }
      .shopss {
        display: flex;
        justify-content: space-around;

        .rec-list-text {
          padding: 0.625rem;
          display: inline-block;
          width: 15.625rem;

          .supply_price {
            font-size: 1.59rem;
            color: #e6162d;
            margin-right: 0.625rem;
          }
          .shop_price {
            font-size: 0.8125rem;
            color: #ccc;
          }
          p {
            font-size: 0.735rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            width: 100%;
          }
        }
        .rec-list-buy {
          display: inline-block;
          font-size: 0.8125rem;
          color: #ccc;
          img {
            height: 3.125rem;
          }
        }
      }
    }
  }
  .recently-header {
    height: 2.375rem;
    line-height: 2.375rem;
    display: inline-block;
    img {
      width: 2.4375rem;
      height: 2.375rem;
    }
    p {
      display: inline;
      font-size: 1.125rem;
    }
  }
  .rec-more {
    display: inline-block;
    font-size: 13px;
    color: #ccc;
    float: right;
    padding: 0.3125rem;
  }
}
</style>


