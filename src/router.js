import VueRouter from 'vue-router'
// Vue.use(VueRouter);

import showYe from './components/tabblebar/shouye.vue'
import jiZhang from './components/tabblebar/jizhang.vue'
import zhangDan from './components/tabblebar/zhangdan.vue'
import fenXi from './components/tabblebar/fenxi.vue'
import xiaoFei from './components/jizhang/xiaofei.vue'
import shouRu from './components/jizhang/shouru.vue'
import guide from './components/guide/guide.vue'



var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/guide'},
        { path: '/shouye', component: showYe},
        { path: '/jizhang', component: jiZhang},
        { path: '/zhangdan', component: zhangDan},
        { path: '/fenxi', component: fenXi},
        { path: '/xiaofei', component: xiaoFei},
        { path: '/shouru', component: shouRu},
        { path: '/guide', component: guide}

    ],
    // linkActiveClass: 'is-selected'
})

export default router;
