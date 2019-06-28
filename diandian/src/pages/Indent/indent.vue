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
      <div v-if="list.length">
        <div
          style="  border-bottom: 1px solid #ccc;padding:0 1.25rem  0  1.25rem"
          v-for="(item, index) in list"
          :key="index"
        >
          <van-radio-group
            v-model="radio"
            style="    display: flex;
    justify-content:space-between;
    align-items: center;
    "
          >
            <van-radio :name="item">
              <div class="address" @click="back()">
                <div style="padding-top: 0.6rem">
                  <div>
                    <span
                      style="font-size:1.4rem;font-weight:600;padding-right:0.3ren=m"
                    >{{item.name}}</span>
                    <span>{{item.tel}}</span>
                  </div>
                  <div>{{item.address}}</div>
                </div>
              </div>
            </van-radio>
            <router-link to="/AddressEdit">
              <div style="color:#f15e0e;width: 30px;">编辑</div>
            </router-link>
          </van-radio-group>
        </div>
      </div>
      <div v-else>
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
      </div>
      <div style="width:100%;
          height: 0.6rem;
          background:#f7f7f7"></div>
      <div class="indent-main">
        <div>
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
        button-text="立即支付"
        @submit="SubmitOrderHan"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import qs from 'qs'

import {
  RadioGroup,
  Radio,
  AddressList,
  Checkbox,
  CheckboxGroup,
  Stepper,
  SubmitBar,
  Card,
  SwipeCell,
} from "vant";

Vue.use(Checkbox)
  .use(CheckboxGroup)
  .use(Stepper)
  .use(SubmitBar)
  .use(Card)
  .use(SwipeCell)
  .use(RadioGroup)
  .use(Radio)
  .use(AddressList);
export default {
  
  data() {
    return {
      list: []
    };
  },
  created() {
    this.testlist();
  },
  computed: {
    checkedgoods() {
      return this.$store.getters.checkedgoods;
    },
    checkedmoney() {
      return this.$store.getters.checkedmoney;
    },
    getToken() {
      return this.$store.getters.getToken;
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
    testlist() {
      var that = this;
      // console.log(that);
      
      this.$axios({
        method: "get",
        url: "https://api.ddjingxuan.cn/api/v2/address",
        headers: {
          token: that.getToken
        }
      }).then(res => {
        // console.log(res.data);

        that.list.name = res.data.consigner;
        that.list.id = res.data.user_id;
        that.list.address =
          res.data.province +
          res.data.city +
          res.data.district +
          res.data.address;
        that.list.tel = res.data.phone * 1;

        that.list = [
          {
            name: res.data.consigner,
            id: res.data.user_id,
            address:
              res.data.province +
              res.data.city +
              res.data.district +
              res.data.address,
            tel: res.data.phone * 1
          }
        ];
        // console.log(that.list);
      });
    },
    SubmitOrderHan() {
      var that = this;
      // let arr = [];
      let arr = "";
      let datas = [];
      for (let i in that.checkedgoods) {
        datas[i] = {
          goods_id: that.checkedgoods[i].goods_id,
          goods_num: that.checkedgoods[i].goods_num
        };
      }
      // console.log(datas);
      // for (let i in datas) {
      //   let o = {};
      //   o[i] = datas[i];
      //   arr.push(o);
      // }
      var qs=require('qs')
      arr = qs.stringify(datas);

      // console.log("他" + arr);
      this.$axios({
        method: "post",
        url: "https://api.ddjingxuan.cn/api/v2/order",
        data: { goods: arr },
        headers: {
          token: this.getToken
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          // console.log(error);
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
