<template>
    <div>
        <mt-header title="分析">
        </mt-header>

        <span class="text-effect">消费情况:</span> 
        <div class="bg" v-if="data1 && data1.length != 0 ?false:true"></div>
        <div id="main1"></div>
        <div class="box2">
            <span class="text-effect">收入情况:</span> 
            <div class="bg" v-if="data2 && data2.length != 0 ?false:true"></div>
            <div id="main2"></div>
        </div>
    

    </div>
</template>
<script>
import $ from 'jquery'
var echarts = require('echarts');

export default {
    data() {
        return {
            data1: [],
            data2: []
        }
    },
    created() {
    
    },
    mounted() {
        //获取消费数组和收入数组，循环数组创建一个新的数组，用来生成饼图
        var list1 =  this.$store.state.xiaofeilistAll;
        for(var i = 0;  i < list1.length; i ++ ) {
            this.data1.unshift( {value: parseInt(list1[i].jine), name: list1[i].leixing} )
        }

        var list2 =  this.$store.state.shourulistAll;
        for(var i = 0;  i < list2.length; i ++ ) {
            this.data2.unshift( {value: parseInt(list2[i].jine), name: list2[i].leixing} )
        }
       
        this.start();

    },
    methods:{
        start() {
            var myChart1 = echarts.init(document.getElementById('main1'));
            var myChart2 = echarts.init(document.getElementById('main2'));

            myChart1.setOption({
            series : [
                {
                    name: '访问',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '50%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data: this.data1        // 数据数组，name 为数据项名称，value 为数据项值
                        
                    
                }
            ]
        })
            myChart2.setOption({
            series : [
                {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '50%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data: this.data2        // 数据数组，name 为数据项名称，value 为数据项值
                        
                    
                }
            ]
        })
            
        },
        
      
    }  
}
</script>
<style lang="css" scoped>
    #main1{
        width:100%;
        height: 400px;
    }
    #main2{
        width:100%;
        height: 400px;
    }
    .bg{
        width:100%;
        height: 350px;
        background: url('/src/assets/img/empty2.png') center no-repeat;
        background-size: contain;
        float: left;
        
    }
    /* 标题的颜色设置，还做了适配，有点丑，整个项目也就这一个适配。。。所以这个代码是我复制过来的 */
    .text-effect{
    display: block;
    margin-left:10px;
    font-size: 130px;
    color: #65ab8f;
    text-align: left;
    text-shadow: 0px -1px 4px white, 0px -2px 10px yellow, 0px -10px 20px #ff8000, 0px -18px 40px red;
    position: relative;
    }
    @media only screen and (max-width: 990px){
        .text-effect{ font-size: 30px; }
    }
    @media only screen and (max-width: 767px){
        .text-effect{ font-size: 25px; }
    }
    @media only screen and (max-width: 479px){
        .text-effect{ font-size: 20px; }
    }
    
</style>