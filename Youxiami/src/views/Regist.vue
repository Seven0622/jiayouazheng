<template>
  <div class="content">
    <mt-header title="注册账号">
      <router-link
        to="/login"
        slot="left"
      >
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button
        icon="more"
        slot="right"
      >导航</mt-button>
    </mt-header>
    <div class="box">
      <ol class="crumbs">
        <li class="active">输入手机号</li>
        <li>输入验证码</li>
        <li>设置密码</li>
      </ol>
      <input
        type="text"
        class="inp"
        v-model="txt"
        placeholder="请输入您的手机号"
        @blur="panduan"
      />
      <mt-radio
        v-model="value"
        @change="change"
        :options="[
          {
            label: '朕已阅读并同意《用户协议》',
            value: 'xxx',
            disabled: checked,
          },
        ]"
      >
      </mt-radio>
      <mt-button
        type="primary"
        size="large"
        :disabled="flag"
        style="width: 98%; margin: 0 auto"
        @click="tijiao"
      >获取验证码</mt-button>
    </div>
  </div>
</template>

<script>
// 引入 localStore.js
import localStore from "../../localStore.js"
import { Toast } from 'mint-ui';
export default {
  data: function () {
    return {
      txt: "",
      value: "",
      checked: false,
      flag: false,
    };
  },
  methods: {
    change() {
      this.checked = !this.checked;
      console.log(this.checked);
    },
    panduan() {
      let pattern = /^[1][3-9][\d]{9}$/gi;
      let kk = pattern.test(this.txt);
      if(!kk){
        Toast('请检查您的手机格式');
      }
    },
    tijiao() {
      let pattern = /^[1][3-9][\d]{9}$/gi;
      let kk = pattern.test(this.txt);
      if (kk && this.checked) {
        console.log('注册成功');
        // 跳转前，先将您的值存储好
        localStore.setStore('phone',this.txt);
        // 若成功，则跳转路由
        this.$router.push({ path:'/login'})
      }
    },
  },
};
</script>

<style scoped="">
.box {
  background-color: #fff;
  padding-bottom: 1rem;
}
.mint-header {
  background-color: #1a1b1b;
  height: 52px;
}
ol.crumbs {
  list-style: none;
  padding-left: 0;
  text-align: center;
  margin: 0;
}
ol.crumbs li {
  display: inline-block;
  text-align: center;
  padding: 0.8rem 1.5rem;
  font-size: 0.8rem;
}
ol.crumbs li.active {
  color: #0c0f0f;
}
ol.crumbs li + li {
  margin-left: 0.6rem;
  position: relative;
}
ol.crumbs li + li:before {
  content: ">";
  display: block;
  position: absolute;
  left: -0.4rem;
  font-weight: bolder;
  color: #aaa;
}
.inp {
  border: 1px solid #eee;
  line-height: 2.8rem;
  height: 2.8rem;
  width: 98%;
  margin: 0.6rem 0 0 0;
  text-indent: 20px;
}
</style>
