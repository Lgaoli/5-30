<template>
  <div class="footer">
    <routerLink class="footer-nav" to="/" :class="{active:(activeIndex==0)}">
      <i class="iconfont">&#xe681;</i>
      <span>主页</span>
    </routerLink>
    <routerLink class="footer-nav" to="/Catalog" :class="{active:(activeIndex==1)}">
      <i class="iconfont">&#xe64c;</i>
      <span>分类</span>
    </routerLink>
    <routerLink class="footer-nav" to="/shop" :class="{active:(activeIndex==2)}">
      <i class="iconfont">&#xe60a;</i>
      <span>分享</span>
    </routerLink>
    <routerLink class="footer-nav" to="/My" :class="{active:(activeIndex==3)}">
      <i class="iconfont">&#xe636;</i>
      <span>个人中心</span>
    </routerLink>
  </div>
</template>
<script>
export default {
  props: ["activeIndex"],
  methods: {}
};
</script>
<style lang="scss">
.footer {
  border-top: 1px #ccc solid;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5.625rem;
  background-color: #fff;

  text-align: center;
  .footer-nav {
    padding: .625rem;
    flex: 1;
     font-size: 2.6875rem;
        color:#ccc;
      i{
        font-size: 2.6875rem;
        color:#ccc;
      }
    span {
      display: block;
      font-size: 0.4rem;
    
    }
    &.active i{
      color: #ef7634;
    }
  }
}
</style>
