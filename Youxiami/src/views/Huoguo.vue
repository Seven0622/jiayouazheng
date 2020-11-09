<template>
  <div class="content">
    <!-- 这是Huoguo公用的出口，它下面的子路由都从这个出口出去 -->
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "Huoguo",
};
</script>

<style scoped="">
@import url("../assets/css/huoguo.css");
</style>
