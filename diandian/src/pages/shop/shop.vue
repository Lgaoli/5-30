<template>
  <div>
    <!-- <div v-for="(items,indexs) in item" :key="indexs">{{items}}</div> -->
    <div class="detail-header">
      <div class="back">
        <router-link to="/">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>购物车</div>
      <div class="shop"></div>
    </div>

    <div class="shopping-cart">
      <router-link to="/shippingAddress">
        <div class="shopping-cart-header">
          <div>
            <i class="iconfont">&#xe611;</i>
            <span>添加收货地址</span>
          </div>
          <div>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>
      <div style="width:100%;
          height: 0.6rem;
          background:#f7f7f7"></div>
      <div class="shopping-cart-main">
        <div v-if="!shopdetall.length">购物车好空啊</div>
        <div v-else>
          <div v-for="(item,index) in shoplist" :key="index">
            <div style="width:100%;
          height: 0.6rem;
          background:#f7f7f7"></div>
            <div class="shopping-cart-main1">
              <div class="shopping-cart-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-footer">
      <van-submit-bar :price="parseFloat(Num*100)" button-text="提交订单" @submit="test">
        <van-checkbox v-model="checkedNames">全选</van-checkbox>
        <!-- <span slot="tip">你的收货地址不支持同城送,</span> -->
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
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
      shoplist: [],
      value: 1,
      Num: {},
      checkedNames: [],
      checked: false
    };
  },
  created() {
    var that = this;
    this.shoplist = this.$store.state;
    console.log(that.shoplist.shopdetall);
    this.com();
    this.test1();
  },
  computed: {
    ...mapState(["shopdetall"]),
    count() {
      return this.$store.state;
    }
  },
  methods: {
    changeAllChecked: function() {
      //全选或者全不选
      if (this.checked) {
        this.checkedNames = this.shopdetall;
      } else {
        this.checkedNames = [];
      }
    },

    test1() {
      //点击-
      this.value -= 1;
      // this.Num = this.Num * 1 - this.$route.query.id.supply_price * 1;
      this.Num = this.Num * 1 - this.count.shopdetall.supply_price * 1;
    },
    test() {
      //点击+

      this.value += 1;
      this.Num = this.count.shopdetall.supply_price * 1;
      console.log(this.Num);
      // this.Num = this.Num * 1 + this.$route.query.id.supply_price * 1;
      this.Num = this.Num * 1 + this.count.shopdetall.supply_price * 1;
      console.log(this.Num);
    },

    //              商品类减减

    //              商品累加
    add_num(cart) {
      cart.value++;
    },
    //              删除商品
    delete_num(cart) {},

    com() {}
  },
  watch: {}
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
