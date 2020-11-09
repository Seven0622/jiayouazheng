<template>
  <div class="content">
    <Guang></Guang>
    <Slider></Slider>
    <GussLike></GussLike>
  </div>
</template>

<script>
import Guang from "./Guang.vue";
import Slider from "./Slider.vue";
import GussLike from "./GussLike.vue";

export default {
  name: "Index",
  data(){
    return {}
  },
  components: {
    Guang: Guang,
    Slider: Slider,
    GussLike: GussLike,
  },
};
</script>
