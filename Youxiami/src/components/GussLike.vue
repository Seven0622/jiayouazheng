<template>
  <div class="hello">
    <ul>
      <li v-for="(item, index) in arrList" :key="index" class="lie">
        <router-link :to="{ path: '/gusslikeContent', query: { id: item.id } }">
          <img :src="item.imgsrc" :width="100" :height="100" class="Imga" />
          <h3 class="hh">{{ item.Name }}</h3>
          <div class="floa">
            <p>名称:{{ item.title }}</p>
            <p>点评分数: {{ item.haopin }}</p>
            <div class="spa">
              大众免费体验点:
              <span class="sp">{{ item.address | formatMoney("💕") }}</span>
            </div>
            <P>参与调研人数：{{ item.haopin| formatMoney("⚢") }}人</P>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import http from '@/http/http';
import http from '../http/axios.js';
// import imgg from '../assets/cainitup.js';
export default {
	name: 'GussLike',
	data() {
		return { arrList: [

        {
                id: 111,
                title: "好吃火锅11",
                imgsrc:require("../assets/images/01.jpg"),
                address: "长安北路103号",
                haopin: 5213
            
			},
			{
                id: 222,
                title: "难吃火锅22",
                imgsrc: require("../assets/images/02.jpg"),
                address: "长安北路66号",
                haopin: 21214
            },
            {
                id: 333,
                title: "难过火锅33",
                imgsrc: require("../assets/images/03.jpg"),
                address: "长安北路28号",
                haopin: 3142151
            },
            {
                id: 444,
                title: "鸳鸯火锅44",
                imgsrc: require("../assets/images/04.jpg"),
                address: "长安北路256号",
                haopin: 1433242
            },
            {
                id: 555,
                title: "露西火锅55",
                imgsrc: require("../assets/images/05.jpg"),
                address: "长安北路785号",
                haopin: 4123
            }

		] }
	},
	methods: {
	},
	mounted() {
		http.get('http://localhost:8080/gus.json')
				.then(res => {
					console.log(res.data.xx);
					// this.arrList = JSON.parse(res.data).xx;
					// this.arrList=res.data.xx;
				})
				.catch(err => {
					console.log(err);
				});
	},
	filters: {
		//局部过滤器
		formatMoney: function(val, unit = '￥') {
			return unit + val;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("../assets/css/GussLike.css");
.hello{
  font-size: 12px;
  font-family: STXinwei;
}
</style>
<style scoped></style>
