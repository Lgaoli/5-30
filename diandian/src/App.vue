<template>
  <div id="app" >
    <keep-alive exclude="classify,detail">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './common/iconf/iconfont.css';
@import './uitls/base.css';
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
a{
  color: #000;
}
</style>
