<template>
  <div>
    <mt-swipe :auto="4000" id="swo">
      <mt-swipe-item id="qq"
        ><img src="../assets/images/08.jpg" class="imgguang"
      /></mt-swipe-item>
      <mt-swipe-item id="ww"
        ><img src="../assets/images/07.jpg" class="imgguang"
      /></mt-swipe-item>
      <mt-swipe-item id="zz"
        ><img src="../assets/images/09.jpg" class="imgguang"
      /></mt-swipe-item>
    </mt-swipe>
    <div class="block">
    
      <el-pagination layout="prev, pager, next" :total="80"> </el-pagination>
    </div>
    <!-- <img src="../assets/download_banner.png" /> -->
<br><br>
    <el-button @click="show2 = !show2">合作厂商</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">广告1</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">广告2</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">广告3</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "GusslikeContent",
//   data() {
//     return {
// 		 show2: true
// 	};
//   },
    data: () => ({
		
      show2: true
    }),
  props: ["id"],
};

</script>
<style lang="scss">
h1 {
  margin: 2rem 0;
}
#swo {
  height: 300px;
}
#qq {
  background-color: #d2ae33;
}
#ww {
  background-color: #0000ff;
}
#zz {
  background-color: #ff0000;
}
.imgguang {
  height: 300px;
  width: 400px;
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
