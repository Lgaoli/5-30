<template>
  <div class="Layout">
    <Dheader></Dheader>
    <Dnav></Dnav>
    <Dmain></Dmain>
    <Dfooter :activeIndex="0"></Dfooter>
  </div>
</template>

<script>
import Dnav from "../../components/Dnav";
import Dheader from "../../components/Dheader";
import Dfooter from "../../components/Dfooter";
import Dmain from "../../components/Dmain";
export default {
  name: "Layout",
  components: {
    Dheader,
    Dfooter,
    Dmain,
    Dnav
  }
};
</script>
<style lang="scss">
</style>



