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

import './css/commen.css'
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
console.log(firstcome);
console.log(typeof(firstcome));

console.log('ppppppppppppppppppp');

var store = new Vuex.Store({
    state: {
        startVal: 0,
        endVal: endVal,
        endRu:endRu,
        endXiao:endXiao,
        xiaofeilistAll: xiaofeilistAll,
        shourulistAll: shourulistAll,
        listAll: listAll,
        firstcome: firstcome
        
    },
    mutations: {
       
    }
})

// console.log('我是main.js');

var vm = new Vue({
    el: '#app',
    
    render: c => c(app),
    router,
    store
})