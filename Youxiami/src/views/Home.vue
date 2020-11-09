<template>
	<div>
		<NavHeader></NavHeader>
		<!-- 这是Home公用的出口，它下面的子路由都从这个出口出去 -->
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import Footer from '@/components/Footer.vue';


export default {
	name: 'Home',
	components: { NavHeader, Footer }
};
</script>
<style lang="scss">
// 注意：后缀名可加可不加，，统统加上
@import '../assets/css/home.css';
</style>
