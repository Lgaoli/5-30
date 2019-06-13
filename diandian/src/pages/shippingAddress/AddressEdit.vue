<template>
  <div>
    <div class="AddressEdit-header">
      <div class="back">
        <router-link to="/shippingAddress">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>收货地址</div>
      <div class></div>
    </div>
    <div class="AddressEdit-main">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :address-Info="AddressInfo"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        @change-default="onvlue"
      />
    </div>
  </div>
</template>
<script>
import areaList from "../../assets/area.js";
import Vue from "vue";
import { AddressEdit } from "vant";
Vue.use(AddressEdit);
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      AddressInfo: []
    };
  },
  created() {},
  computed: {},
  methods: {
    onDelete() {},
    onvlue(value) {
      if (value == false) {
        this.onshow = 0;
        console.log(this.onshow);
      } else {
        this.onshow = 1;
        console.log(this.onshow);
      }
      value;
    },
    onChangeDetail(val) {
      //详细地址
      if (val) {
        // console.log(val);
      } else {
        this.searchResult = [];
      }
    },
    onSave(val) {
      //获取表单所有信息
      //       addressDetail: "元岗街道慧通产业园B9栋"//详细地址
      // areaCode: "440106"
      // city: "广州市"//城市
      // country: ""
      // county: "天河区"//区
      // isDefault: true  //是否设为默认地址
      // name: "张三"
      // postalCode: "000000"//邮政编号
      // province: "广东省"//省
      // tel: "12312312312"
      if (val) {
        console.log(val);
        this.$router.go(-1);
      } else {
      }
    }
  }
};
</script>

<style lang="scss">
.AddressEdit-header {
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
.AddressEdit-main {
  margin-top: 4.5rem;
}
</style>
