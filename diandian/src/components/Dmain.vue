<template>
  <div class="main">
    <div class="nav">
      <van-tabs @click="onClick" v-model="selectedId">
        <van-tab v-for="(item,index) in items" :key="index" :title="item.name"></van-tab>
      </van-tabs>
    </div>
    <div v-if="selectedId=='0'">
      <Dswiper></Dswiper>
      <Dsudoku></Dsudoku>
      <Dhot></Dhot>
      <Drecently></Drecently>
    </div>
    <div v-else-if="shop.length=='0'||selectedId=='1'">暂时没有此商品分类的商品</div>
    <div v-else>
      <div class="rec-list">
        <ul>
          <li class="rec-list-li" v-for="(item,index) in shop" :key="index">
            <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="rec-list-a">
              <div class="rec-list-a1">
                <div class="rec-list-img">
                  <img :src="item.img_url" alt>
                </div>
                <div class="shopss">
                  <div class="rec-list-text">
                    <p>{{item.goods_name}}</p>
                  </div>

                  <div class="rec-list-buy">
                    <div class="price">
                      <span class="supply_price">￥{{item.supply_price}}</span>
                      <span class="shop_price">原价:￥{{item.shop_price}}</span>
                    </div>
                    <div class="buy">
                      <p>{{item.good_sales}}人购买</p>
                      <router-link :to="{path:'/Detail',query:{id:item.goods_id}}" class="around">
                        <img src="../assets/img/首页01_11.jpg" alt>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <Dgotop></Dgotop>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import Dsudoku from "../components/Sudoku";
import Dswiper from "../components/Dswiper";
import Dgotop from "../components/Dgotop";
import Drecently from "../components/recently";
import Dhot from "../components/Dhot";
export default {
  components: {
    Dswiper,
    Dgotop,
    Drecently,
    Dsudoku,
    Dhot
  },
  data() {
    return {
      hackReset: false,
      selectedId: 0,
      items: [{ name: "首页", cat_id: 0 }],
      shop: [],
      options: {
        activeColor: "#ef7634",
        // 可在这里指定labelKey为你数据里文字对应的字段
        labelKey: "name"
      }
    };
  },
  created() {
    let that = this;
    this.$axios
      .get("https://api.ddjingxuan.cn/api/v2/cate")
      .then(function(res) {
        that.items = that.items.concat(res.data);
      })
      .catch(function(error) {
        that.shop.length == "0";
        console.log("暂时没有此商品分类的商品");
      });
  },

  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    windowScroll() {
      //滚动条距离页面顶部的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //原生兼容
    },
    onClick(index) {
      if (this.items[index].cat_id > 0) {
        let that = this;
        this.$axios
          .get("https://api.ddjingxuan.cn/api/v2/goods/by_category", {
            params: {
              id: this.items[index].cat_id
            }
          })
          .then(function(res) {
            that.shop = res.data;
            console.log();
            that.hackReset = true;
          })
          .catch(function(error) {});
      }
    },

    cat_id() {
      return console.log(this.$store.state);
    }
  }
};
</script>

<style lang="scss">
.main {
  margin-top: 5.625rem;
  margin-bottom: 5.625rem;
}
.rec-list {
  padding: 1.25rem;
  .rec-list-li {
    padding: 0.3125rem;
    margin-top: 0.625rem;
    border: #ccc 0.0625rem solid;
    .rec-list-a1 {
      display: flex;
      justify-content: space-between; 
      .rec-list-img {
        width: 7.9375rem;
        float: left;
        img {
          width: 100%;
        }
      }
      .shopss {
        width: 21.5rem;
        .rec-list-text {
          height: 3rem;
          p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }

        .rec-list-buy {
          display: flex;
          justify-content: space-between;
          .price {
            .supply_price {
              color: #ff7441;
              font-size: 1.396rem;
              font-weight: 600;
            }
            .shop_price {
              color: #ccc;
              font-size: 0.65rem;
              text-decoration: line-through;
            }
          }
          .buy {
            width: 6.25rem;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

