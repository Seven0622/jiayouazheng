<template>
  <div>
    <mt-header title="详情页面">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
    <el-badge :value="1" class="item" type="primary">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="2" class="item" type="warning">
      <el-button size="small">回复</el-button>
    </el-badge>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          评论
          <el-badge class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          回复
          <el-badge class="mark" :value="3" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <Content :id="uid"></Content>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import Content from "../components/Content.vue";
export default {
  name: "GusslikeContent",
  data() {
    return { uid: 0 };
  },
  mounted() {
    // console.info(this.$route.query.id);
    this.uid = this.$route.query.id;
  },
  components: { Footer, Content },
};
</script>
<style lang="scss">
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
