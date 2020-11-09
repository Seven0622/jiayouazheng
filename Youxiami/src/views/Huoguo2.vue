<template>
	<div>
		<mt-header title="合作商铺信息调研">
			<router-link to="/" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<ul class="nav">
			<!-- 按逻辑讲，只需要传一个id过去即可，过去后用id进行ajax获取值 -->
			<li v-for="(val, index) in arr" :key="index" @click="click(val)">
				<p>{{ val.title }}</p>
				<img :src="val.imgsrc" :width="200" :height="150" />
				<p>
					<span>地址：{{ val.address }}</span>
					<br />
					<span>月售: {{ val.yueshou }}</span>
					<br />
					<span>大众点评分数：{{ val.haopin }} 分</span>
				</p>
			</li>
		</ul>
	</div>
</template>
<script>
import arrlist from '../assets/huoguo.js';
export default {
	data: function() {
		return {
			arr: []
		};
	},
	mounted() {
		//   console.info(arrlist);
		this.arr = arrlist;
	},
	methods: {
		click(val) {
			// console.log(val);
			this.$router.push({
				path: `/huoguo/huoguoCon/${val.id}`,
				query: { item: val.title }
			});
		}
	}
};
</script>
<style lang="scss">
body {
	font-weight: bold;
	color: #333333;
	font-size: 10px;

}
</style>
