import Vue from 'vue'
import $ from 'jquery'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)
import app from './App.vue'
import './assets/ico/iconfont.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import router from './router'
import VueCountUp from 'vue-countupjs'
import countTo from 'vue-count-to';
import './css/button.css'
import './js/starlight'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vuex from 'vuex';
Vue.use(Vuex);


var xiaofeilistAll = JSON.parse(localStorage.getItem('xiaofeilistAll') || '[]')
var shourulistAll = JSON.parse(localStorage.getItem('shourulistAll') || '[]')
var endVal = JSON.parse(localStorage.getItem('endVal' || 0));
var listAll = JSON.parse(localStorage.getItem('listAll') || '[]');
var endXiao = JSON.parse(localStorage.getItem('endXiao') || '[]');
var endRu = JSON.parse(localStorage.getItem('endRu') || '[]');
var firstcome = JSON.parse(localStorage.getItem('firstcome') || '[]');



var store = new Vuex.Store({
    state: {
        startVal: 0, //数字动画起始
        endVal: endVal, //数字动画总金额
        endRu:endRu,  //数字动画收入总金额
        endXiao:endXiao,  //数字动画消费总金额
        xiaofeilistAll: xiaofeilistAll, //消费数组
        shourulistAll: shourulistAll,   //收入数组
        listAll: listAll,  //总数据
        firstcome: firstcome  //判断是否第一次进入，来决定是否先进入guide页面
    },
    mutations: {
       
    }
})


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})