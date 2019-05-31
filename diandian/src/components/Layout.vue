<template>
  <div class="Layout">
    <Dheader></Dheader>
    <div class="main">
  <Dswiper></Dswiper> 
    </div>
    <Dfooter :activeIndex="0"></Dfooter>
  </div>
</template>

<script>
import Dheader from '../components/Dheader'
import Dfooter from '../components/Dfooter'
import Dswiper from '../components/Dswiper'
export default {
  name: 'Layout',
  components:{
    Dheader,
    Dfooter,
    Dswiper
  },

}
</script>
<style lang="scss">
.main{
  margin-top: 1.875rem;
  height: 100rem;
}
</style>



