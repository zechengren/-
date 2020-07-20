<template>
    <div>
        <mt-swipe :auto="0" :continuous="false">
          <mt-swipe-item class="bg1"></mt-swipe-item>
          <mt-swipe-item class="bg2" ></mt-swipe-item>
          <mt-swipe-item class="bg3"></mt-swipe-item>
          <mt-swipe-item class="bg4" >
            <div @click="enter">
              <router-link to="/shouye" class="button medium round blue btn-guide" href="javascript:void(0);">进入</router-link>
            </div>
          </mt-swipe-item>
        </mt-swipe>


       
    </div>
</template>
<script>

export default {
    created() {

    },
    methods: {
        setlocal(string, list) {
            localStorage.setItem(string, JSON.stringify(list));
            console.log('存起来了');
        },
        enter() {
            //给用户第一次进入时一个标志符
            var first = 'once'
            this.setlocal('firstcome', first);
            window.location.reload();
        }
    }
}
</script>
<style lang="css" scoped>
   .mint-swipe{
       position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%
   }
    .mint-swipe-indicators{
        bottom: 90px ;
    }
    .mint-swipe-indicator{
        opacity: 0.3;
    }
    .mint-swipe-indicator.is-active{
        background: #0e81da;
    }
    
    .bg1{
        background: url('/src/assets/img/guide_4.png') no-repeat;
        background-size: 100%;
    }
    .bg2{
        background: url('/src/assets/img/guide_3.png') no-repeat;
        background-size: 100%;

    }
    .bg3{
        background: url('/src/assets/img/guide_2.png') no-repeat;
        background-size: 100%;

    }
    .bg4{
        background: url('/src/assets/img/guide_1.png') no-repeat;
        background-size: 100%;

    }
    .btn-guide{
        position:absolute;
        transform: translateX(-50%);
        left:50%;
        top:58%;
        color: #fff;
        z-index:9;
    }
</style>