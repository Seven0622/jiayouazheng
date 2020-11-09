<template>
  <div>
    <mt-header title="搜索页面">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <Guang></Guang>
    <div class="search">
      <i class="fa fa-search fa-2x ico"></i>
      <input type="text" class="inp" placeholder="输入商家名,品类或商圈" />
      <mt-button type="danger" class="btn" size="small">搜索</mt-button>
      <ul class="icon-list page">
        <li class="icon"><a class="hot-link react title">周边热门</a></li>
        <li class="icon">
          <a class="hot-link react" href="##">白鹿原滑雪场</a>
        </li>
        <li class="icon"><a class="hot-link react" href="##">千家粗粮王</a></li>
        <li class="icon"><a class="hot-link react" href="##">如家酒店</a></li>
        <li class="icon"><a class="hot-link react" href="##">春运抢票</a></li>
        <li class="icon"><a class="hot-link react" href="##">俄式厨房</a></li>
        <li class="icon"><a class="hot-link react" href="##">M³电影城堡</a></li>
        <li class="icon"><a class="hot-link react" href="##">UME影城</a></li>
        <li class="icon"><a class="hot-link react" href="##">如家酒店</a></li>
        <li class="icon">
          <a class="hot-link react" href="##">蝎王府羊蝎子</a>
        </li>
      </ul>
    </div>
    <div class="nav-bread">当前位置： <a href="##">西安团购搜索</a></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Guang from "../components/Guang.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Search",
  components: {
    Guang,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("../assets/css/search.css");
</style>