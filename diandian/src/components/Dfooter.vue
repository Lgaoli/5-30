<template>
  <div class="footer">
    <routerLink class="footer-nav" to="/" :class="{active:(activeIndex==0)}">
      <span>主页</span>
    </routerLink>
    <routerLink class="footer-nav" to="/Catalog" :class="{active:(activeIndex==1)}">
      <span>分类</span>
    </routerLink>
    <routerLink class="footer-nav" to="/My" :class="{active:(activeIndex==2)}">
      <span>我的</span>
    </routerLink>
  </div>
</template>
<script>
  export default {
    props: ['activeIndex'],
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.875rem;
  background-color: #ccc;
  line-height: 1.875rem;
  text-align: center;
  .footer-nav {
    flex: 1;
    span {
      display: block;
      font-size: 0.4rem;
    }
    &.active {
      span {
        color: #fff;
      }
    }
  }
}
</style>
