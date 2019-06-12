<template>
  <div>
    <div class="order-form-header">
      <div class="back">
        <router-link to="/shop">
          <i class="iconfont">&#xe771;</i>
        </router-link>
      </div>
      <div class>收货地址</div>
      <div class></div>
    </div>
    <div class="order-form-main">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { AddressList } from "vant";

Vue.use(AddressList);
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      disabledList: []
    };
  },

  methods: {
    onAdd() {
      // Toast("新增地址");
      this.$router.push({
        path: `/AddressEdit`
      });
    },

    onEdit(item, index) {
      // Toast("编辑地址:" + index);
    }
  }
};
</script>

<style lang="scss">
.order-form-header {
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
.order-form-main {
  margin-top: 4.5rem;
}
</style>
