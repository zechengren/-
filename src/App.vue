<template>
    <div class="content" >
        
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>

        </transition>

        <mt-tabbar class="tabbar" v-if="!(firstcome instanceof Object)">
          <router-link to="/shouye" tag="div" class="mint-tab-item">
                <div class="mint-tab-item-icon">
                    <i slot="icon" class="iconfont icon-shouye1"></i>
                </div>
                <div class="mint-tab-item-label">
                    首页
                </div>
          </router-link>
          <router-link to="/jizhang" tag="div" class="mint-tab-item">
                <div class="mint-tab-item-icon">
                    <i slot="icon" class="iconfont icon-xie"></i>
                </div>
                <div class="mint-tab-item-label">
                    记账
                </div>
          </router-link>
          <router-link to="/zhangdan" tag="div" class="mint-tab-item">
                <div class="mint-tab-item-icon">
                    <i slot="icon" class="iconfont icon-jizhang"></i>
                </div>
                <div class="mint-tab-item-label">
                    账单
                </div>
          </router-link>
          <router-link to="/fenxi" tag="div" class="mint-tab-item">
                <div class="mint-tab-item-icon">
                    <i slot="icon" class="iconfont icon-fenxi"></i>
                </div>
                <div class="mint-tab-item-label">
                    分析
                </div>
          </router-link>

        </mt-tabbar> 
   
  </div>
</template>
<script>
export default {
    data() {
        return {
            firstcome: 'once',
            flag: true
        }
    },
    methods:{
        reload() {
            location.reload()
        },
        setlocal(string, list) {
            localStorage.setItem(string, JSON.stringify(list));
            console.log('存起来了');
        },
        // getLocal(string, list) {
        //     var list = JSON.parse(localStorage.getItem(string) || '[]');
        //     console.log('存起来啦啦');
        // },
        jump() {
            // if(!(this.firstcome instanceof Object)) {
            //     window.location.href = '#/shouye'
            //     console.log('firstcome存在');
            // }
            if(this.$route.path == '/guide') {
                if(!(this.firstcome instanceof Object)) {
                window.location.href = '#/shouye'
                console.log('firstcome存在');
               }
            }
            // console.log(this.$route.path);
        }
    },
    created() {
        this.firstcome = this.$store.state.firstcome;
        //给用户第一次进入时一个标志符
        // var first = 'once'
        // this.setlocal('firstcome', first);
        this.jump();
    },
    watch:{
        '$route.path':function(newVal, oldVal) {
            if(newVal === '/jizhang') {
                // console.log('刷新');
                this.reload();
            }
        },
        
    }
    
}

</script>
<style lang="css">
    * { 
        touch-action: none; 
    }
    body{
        margin:0px;
        padding-bottom: 55px;
    }
    .tabbar{
        position: fixed;
    }
   .content{
    overflow: hidden;
        
   }
    .mint-tab-item-label{
        color:#666;
    }
    
    .router-link-exact-active .mint-tab-item-label
    {
        color:#3196fa ;
        
    }
    .router-link-active .mint-tab-item-icon i{
        color:#3196fa ;

    }
    .router-link-exact-active{
        background-color: #eaeaea;

    }
    /* guide页面小圆点设置，在guide页面内设置不起效果 */
    .mint-swipe-indicators{
        bottom: 90px ;
    }
    .mint-swipe-indicator.is-active{
        background: #0e81da;
    }
    /* trandition动画 */
    /* .v-enter{
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;

    }
    .v-enter-active,
    .v-leave-active{
        opacity: 0;
        transition: all .3s cubic-bezier(.16,.68,.95,.47);
    } */

    /* 页面切换动画css */
    .slide-fade{
      position: fixed;left:0;right: 0;
      width: 100%;
      background-color: white;

    }
    .slide-fade-enter
    {
      left:0;top: 0;right: 0;
      position: absolute;
      transform:translateX(-500px) translateY(-500px) rotate(-150deg) scale(0.5);
      opacity:1;

    }
    .slide-fade-leave-to{
      left:0;top: 0;right: 0;
      transform:translateX(-500px) translateY(-500px) rotate(-150deg) scale(0.5);
      opacity:1;
    }
    .slide-fade-enter-active {
      background-color: white;
      transition: all 0.2s ease-in-out;

    }
    .slide-fade-leave-active {
      transition: all 0.7s ease;
      background-color: white;
      transform:translateX(500px) translateY(500px) rotate(150deg) scale(1) ;
      z-index: 100;

    }

</style>