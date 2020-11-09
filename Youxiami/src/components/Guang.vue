<template>
  <div class="banner-download">
    <!-- <img src="../assets/images/08.jpg" class="img-box" /> -->
    <div class="block">
      <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
      <el-carousel height="150px">
        <el-carousel-item v-for="(item,index) in imgg" :key="index">
          <h3 class="small"><img :src="item" /></h3>
        </el-carousel-item> 
      </el-carousel>
    </div>
    <a href="##" class="call-app-btn"></a>
    <a class="download-btn" id="downloadApp"></a>
  </div>
</template>

<script>
export default {
  name: "Guang",
  data() {
    return {
      imgg: [
        require("../assets/images/06.jpg"),
        require("../assets/images/07.jpg"),
        require("../assets/images/08.jpg"),
        require("../assets/images/09.jpg")
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner-download {
  background-color: #fff;
}
.banner-download img {
  width: 100%;
}.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
