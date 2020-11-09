import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入全部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import "./assets/css/base.css" /* 样式初始化文件 */
import "./assets/css/font-awesome.css" /* 奥森字体样式 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);



// 引入mockjs
let flag = true;
if (flag) {
	require('../mock.js');
	require('./assets/cainitup.js')
}

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
