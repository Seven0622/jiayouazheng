<template>
  <div class="navbar">
    <div class="nav-wrap-left">
      <a href="##" class="react">
        <!-- <span class="nav-city">西安<i class="fa fa-angle-down"></i></span> -->
        <el-dropdown>
          <span class="el-dropdown-link">
            西安<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>上海</el-dropdown-item>
            <el-dropdown-item>深圳</el-dropdown-item>
            <el-dropdown-item>北京</el-dropdown-item>
            <el-dropdown-item disabled>武汉</el-dropdown-item>
            <el-dropdown-item divided>杭州</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </a>
    </div>
    <div class="box-search J-box-search">
      <a class="react" href="##">
        <i class="fa fa-search"></i>
        <router-link to="/search">
          <span class="single-line"> 输入商家/品类/商圈 </span>
        </router-link>
      </a>
    </div>
    <div class="nav-wrap-right">
      <router-link to="/login" class="react" href="##" tag="a">
        <span class="nav-btn">
          <i class="fa fa-user-o fa-5x"></i>
          <br />
          我的
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navHeader",
  data: function() {
    return {};
  },
};
</script>

<style scoped="">
@import "../assets/css/navHeader.css";
 .el-dropdown-link {
    cursor: pointer;
	color: #cdd1d4;

	
  }
  .el-icon-arrow-down {
	font-size: 12px;
	
  }
  .el-dropdown{
    font-size: 12px;
  }
  
</style>
