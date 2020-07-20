<template>
    <div>
      <div class="head"></div>
      <div class="bg" >
        <span class="yve">可用余额</span>
        <countTo :startVal='start' :endVal='end' :duration='3000' class="count" suffix="元"></countTo>
        
      </div>

        
    </div>
</template>
<script>
import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    data () {
      return {
        start:0,
        end: 2344,
      }
    },
    created() {
       this.end = JSON.parse(localStorage.getItem('endVal'));

    },
    methods:{
      
      
    },
    mounted() {

      
    }
  }
</script>
<style lang="css" scoped>
    .bg{
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      width:100%;
      height: 300px;
      background: url('/src/assets/img/home-bg3.jpg') center  no-repeat;
      
    }
    .head{
      width: 100%;
      height: 85px;
      background: url('/src/assets/img/home-head.webp') top no-repeat;
      background-size: cover;
    }
    .yve{
      position: absolute;
      transform: translateX(-50%);
      left:50%;
      top:16%;
      color: #fddd55;
      font-size: 16px;

    }
    .count{
      position: absolute;
      left:37%;
      top:39%;
      color: #25b484;
      font-size: 22px;
    }
</style>