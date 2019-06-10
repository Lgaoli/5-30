<template>
  <div>
    <div v-for="(item,index) in shopdetall" :key="index">
      <div class="detail-header">
        <div class="back">
          <router-link to="/">
            <i class="iconfont">&#xe771;</i>
          </router-link>
        </div>
        <div class>确认订单</div>
        <div class="shop"></div>
      </div>

      <div class="shopping-cart">
        <div class="shopping-cart-header">
          <div>
            <i class="iconfont">&#xe611;</i>
            <span>添加收货地址</span>
          </div>
          <div>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
        <div style="width:100%;
        height: 0.6rem;
        background:#f7f7f7"></div>
        <div class="shopping-cart-main">
          <div style="width:100%;
        height: 0.6rem;
        background:#f7f7f7"></div>
          <div class="shopping-main">
            <div class="shopping-cart-Main">
              <van-checkbox v-model="checked"></van-checkbox>
            </div>
            <div class="shopping-cart-main1">
              <div class="shoping-cart-img">
                <img :src="item.banner[0].img_url">
              </div>
              <div class="shoping-cart-de">
                <div class="shoping-name">
                  <p>{{item.detail.goods_name}}</p>
                </div>
                <div class="shoping-money">
                  <span
                    style="color: rgb(255, 116, 65);font-weight: 600;font-size: 1.25rem;"
                  >￥{{item.detail.supply_price}}</span>
                  <span
                    style="text-decoration: line-through;color: rgb(204, 204, 204);"
                  >￥{{item.detail.shop_price}}</span>
                </div>
                <div class="Stepper">
                  <van-stepper
                    v-model="value"
                    min="1"
                    max="10"
                    integer
                    @plus="test(index)"
                    @minus="reduce(value)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style="width:100%;
        height: 0.6rem;
        background:#f7f7f7"></div>
        </div>
      </div>
      <div class="detail-footer">
        <van-submit-bar :price="parseFloat(Num*100)" button-text="提交订单">
          <van-checkbox v-model="checked">全选</van-checkbox>
          <span slot="tip">你的收货地址不支持同城送,</span>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, Stepper, SubmitBar } from "vant";
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(SubmitBar);
import Dfooter from "../../components/Dfooter";
export default {
  components: {
    Dfooter
  },
  data() {
    return {
      checked: true,
      shopdetall: [],
      value: 1,
      Num: {}
    };
  },
  created() {
    this.com();
    this.test1();
    this.$store.commit("add");
  },
  computed: {
    test1() {
      //点击-
      return this.$store.state.goodsList;
      console.log(this.$store.state.goodsList);
    },
    //计算出商品中，总价和数量
    //              总价
    total_price() {
      let price = 0;
      this.check_goods.forEach(item => {
        //                      总价 = 价格 * 数量
        price += Number(item.goods_price) * Number(item.value);
      });
      return price;
    },
    //              数量
    total_num() {
      let t_num = 0;
      this.check_goods.forEach(item => {
        t_num += Number(item.value);
      });
      return t_num;
    }
  },
  methods: {
    test() {
      //点击+

      this.value = this.value + 1;
      this.Num = this.Num * this.value;
      console.log(this.Num);
    },

    //              商品类减减
    reduce(value) {
      if (item.value <= 0) {
        item.value = 0;
      } else {
        item.value--;
      }
    },
    //              商品累加
    add_num(cart) {
      cart.value++;
    },
    //              删除商品
    delete_num(cart) {
      this.check_goods.splice(this.check_goods.indexOf(cart), 1);
      this.cart_list.splice(this.cart_list.indexOf(cart), 1);
    },
    //              全选
    check_all() {
      if (this.check_goods.length > 0) {
        this.check_goods = [];
      } else {
        this.cart_list.forEach(item => {
          this.check_goods.push(item);
        });
      }
    },
    com() {
      var newsID = this.$route.query.id.goods_id;
      console.log(newsID);
      var that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/goods/" + newsID)
        .then(function(res) {
          // console.log(res.data);
          that.shopdetall.push(res.data);
          that.Num = res.data.detail.supply_price;
          console.log(that.Num);
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
.shopping-cart {
  margin-top: 4.5rem;
  .shopping-cart-header {
    background: #fff;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
  }
  .shopping-main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .shopping-cart-main1 {
      display: flex;
      justify-content: space-around;
      .shoping-cart-img {
        width: 6.25rem;
        height: 6.25rem;
        img {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
        }
      }
      .shoping-cart-de {
        .shoping-name {
          padding: 0.375rem;
        }
        .shoping-money {
          padding: 0.375rem;
          display: flex;
          justify-content: flex-start;
        }
        .Stepper {
          padding: 0.375rem;
        }
      }
    }
    .shopping-cart-Main {
    }
  }
}
</style>
