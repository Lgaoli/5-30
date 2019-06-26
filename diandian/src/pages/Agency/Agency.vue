<template>
  <div>
    <select name="status" id="status" v-model="selected" @change="ge">
      <option
        :value="item.statusVal"
        v-for="(item,index) in statusArr"
        :key="index"
      >{{item.statusVal}}</option>
    </select>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      statusArr: [
        {
          statusId: "0",
          statusVal: "请选择"
        },
        {
          statusId: "1",
          statusVal: "未处理"
        },
        {
          statusId: "0",
          statusVal: "处理中"
        },
        {
          statusId: "0",
          statusVal: "处理完成"
        }
      ],
      selected: ""
    };
  },
  created() {
    // 在组件创建之后，把默认选中项的value值赋给绑定的属性
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    this.selected = this.statusArr[0].statusVal;
  },
  methods: {
    ge() {
      //获取选中的优惠券
      console.log(this.selected);
    }
  }
};
</script>
