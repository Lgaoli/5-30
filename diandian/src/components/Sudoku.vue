<template>
  <div class="Sudoku">
    <ul class="Sud-ul">
      <li class="Sud-list">
        <img src="../assets/img/点.png" alt>
        <p>新人专区</p>
      </li>
      <li class="Sud-list">
        <img src="../assets/img/点.png" alt>
        <p>我要开店</p>
      </li>
      <li class="Sud-list">
        <img src="../assets/img/精.png" alt>
        <p>联系客服</p>
      </li>
      <li class="Sud-list">
        <img src="../assets/img/选.png" alt>
        <p>品牌直供</p>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.Sudoku {
  width: 100%;
  height: 6.75rem;

  .Sud-ul {
    margin-top: 1.25rem;
    .Sud-list {
      width: 5.4375rem;
      height: 7rem;
      float: left;
      margin-left: 1.54rem;
      margin-right: 0.625rem;
      text-align: center;
      img {
        width: 4.6875rem;
        height: 4.6875rem;
      }
    }
  }
}
</style>
