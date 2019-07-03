<template>
  <div>
    <div class="Order-header">
      <div class="back" @click="back">
        <i class="iconfont">&#xe79b;</i>
      </div>
      <div class>订单中心</div>
      <div class="shop"></div>
    </div>
    <div class="Order-main">
      <div class="Order-main-header">
        <ul>
          <li
            class="act"
            v-for="(item,index) in wpList"
            :key="index"
            :class="{act1 : act1 == index}"
            @click="selected(index)"
          >
            <div class="text">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="Order-main-main">
        <div class="Order-main-main-shop">
          <!---  循环遍历tabContents数组中的元素,v-show绑定事件,当循环的索引等于num中的值,显示该itemCon值  --->
          <div v-for="(items,indexs) in tabContents" v-show="indexs == act1" :key="indexs">{{items}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      wpList: [
        {
          name: "全部"
        },
        {
          name: "待付款"
        },
        {
          name: "待发货"
        },
        {
          name: "待收货"
        },
        {
          name: "待完成"
        },
        {
          name: "已完成"
        },  {
          name: "退货"
        }

      ],
      act1: "0",
      tabContents: ["内容一", "内容二", "内容三", "内容四", "内容五"]
    };
  },
  methods: {
    selected(index) {
      this.act1 = index;
      console.log(this);
    },
    back() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>
<style lang="scss">
.Order-header {
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
    font-size: 0.682667rem;
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
.Order-main {
  padding: 0.597333rem;
  background: #f7f7f7;
  margin-top: 4.5rem;
  .Order-main-header {
    background: #f7f7f7;

    ul {
      display: flex;
      justify-content: space-around;
      .act {
        border-bottom: #f7f7f7 2px solid;

        .text {
          padding: 0.704rem 0 0.704rem 0;
          font-size: 1.469333rem;
        }
      }
      .act1 {
        border-bottom: #f15e0e 2px solid;
        color: #f15e0e;
      }
    }
  }
  .Order-main-main {
    margin: 1.0855rem;
    background: #fff;
    padding: 0.597333rem;
    border-radius: 5px;
    .Order-main-main-shop {
      border-bottom: #dedede 1px solid;
    }
  }
}
</style>

