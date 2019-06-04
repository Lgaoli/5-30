<template>
  <div class="recently">
    <div>
      <div class="recently-header">
        <img src="../assets/img/今日推荐.png" alt>
        <p class="rec-title">今日推荐</p>
      </div>
      <div class="rec-more">更多</div>
    </div>
    <div class="rec-list">
      <ul>
        <li class="rec-list-li" v-for="(item,index) in recentlylist" :key="index">
          <div class="rec-list-img">
            <img :src="item.img_url" alt>
          </div>
          <div class="rec-list-text">
            <p>{{item.goods_name}}</p>
            <span class="original">{{item.supply_price}}</span>
            <span class="original">{{item.shop_price}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentlylist: []
    };
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      var that = this;
      this.$axios
        .get("https://api.ddjingxuan.cn/api/v2/goods/recent")
        .then(function(res) {
          console.log(res);
          that.recentlylist = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss">
.recently {
  padding: 1.25rem;
  .rec-list {
    padding: 0.625rem;
    .rec-list-li {
        padding: .3125rem;
        margin-top: .625rem;
      border: #ccc 0.0625rem solid;
      border-radius: 5%;
      img {
        width: 100%;
        height: 6.25rem;
        box-sizing: border-box;
      }
      .rec-list-text {
        padding: 0.625rem;

        p {
          font-size: 1.435rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          width: 100%;
        }
      }
    }
  }
  .recently-header {
    height: 2.375rem;
    line-height: 2.375rem;
    display: inline-block;
    img {
      width: 2.4375rem;
      height: 2.375rem;
    }
    p {
      display: inline;
      font-size: 1.125rem;
    }
  }
  .rec-more {
    display: inline-block;
    font-size: 13px;
    color: #ccc;
    float: right;
    padding: 0.3125rem;
  }
}
</style>


