<template>
  <div class="indent">
    <div class="detail-header">
      <div class="back">
        <router-link to="/">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>确认订单</div>
      <div class="shop"></div>
    </div>

    <div class="indent-cart">
      <router-link to="/shippingAddress">
        <div class="indent-cart-header">
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
      <div class="indent-main">
        <div v-if="checkedgoods.length>0">
          <div v-for="(item,index) in checkedgoods" :key="index">
            <van-card
              :num="item.goods_num"
              :price="item.supply_price"
              :desc="item.goods_name"
              :thumb="item.shopimg"
            />
          </div>
        </div>
        <div v-else style="padding:1.25rem;">暂时无商品</div>
      </div>
      <div style="width:100%;
          height: 0.6rem;
          background:#f7f7f7"></div>
    </div>
    <div>
      <router-link to="/shippingAddress">
        <div class="indent-cart-header">
          <div>
            <span>支付方式</span>
          </div>
          <div>
            <span>余额支付</span>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>
      <router-link to="/shippingAddress">
        <div class="indent-cart-header">
          <div>
            <span>运费</span>
          </div>
          <div>
            <span>{{freight}}元</span>
            <i class="iconfont">&#xe632;</i>
          </div>
        </div>
      </router-link>
    </div>
    <div style="width:100%;
          height: 0.6rem;
          background:#f7f7f7"></div>
    <div class="postscript">
      <textarea type="text" placeholder="备注信息"></textarea>
    </div>
    <div class="indent-footer">
      <van-submit-bar
        :price="(checkedmoney+freight)*100"
        button-text="提交订单"
        @submit="SubmitOrderHan"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, SubmitBar } from "vant";

Vue.use(SubmitBar).use(Card);
export default {
  created() {
    console.log(this);
  },
  computed: {
    checkedgoods() {
      return this.$store.getters.checkedgoods;
    },
    checkedmoney() {
      return this.$store.getters.checkedmoney;
    },
    freight() {
      let freight = 8;
      if (this.checkedmoney >= 88) {
        freight = 0;
      }
      return freight;
    }
  },
  methods: {
    SubmitOrderHan() {
      let data = {
        goodData: JSON.stringify(this.checkedgoods)
      };
      console.log(data);
      this.$axios({
        method: "post",
        url: "https://api.ddjingxuan.cn/api/v2/order",
        data: { products: data.goodData },
        headers: {
          token: "47e544eae77faf1f47c6b2da970ae480"
        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
.indent {
  margin-top: 4.5rem;
  margin-bottom: 4.5rem;
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
  .postscript {
    padding: 1.25rem;
    textarea {
      width: 100%;
      height: 6.25rem;
    }
  }
  .indent-cart {
    .indent-cart-header {
      background: #fff;
      padding: 1.25rem;
      display: flex;
      justify-content: space-between;
    }
  }
  .indent-cart-header {
    background: #fff;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    border-bottom: #c8c9cc 1px solid;
  }
}
</style>
