<template>
    <div>

        <mt-header title="账单">
        </mt-header>
        <div class="bg" v-if="listAll && listAll.length != 0?false:true"></div>
        <div class="box" v-for="(item,i) in listAll" :key="item.id">
            <i :class="item.ico" class="ico"></i>
            <div class="msg"> 
                <div class="top">
                    <div class="leixing"> {{item.leixing}}  </div>
                    <div class="jine"> {{item.jine}} $</div>
                </div>
                <div class="bottom">
                    <div class="time">{{item.name}}： {{item.riqi}} {{item.shijian}}</div>
                    <div class="del" @click="del(i,item)">取消</div>
                </div>
                <div class="beizhu" v-show="item.beizhu?true:false">
                    备注：{{item.beizhu}}
                </div>
            </div>
        </div>
        <div class="dibu" >
            <div class="one">
                <div class="ru">入账</div>
                <div class="ru-money">
                    <countTo :startVal='start' :endVal='endRu' :duration='3000' style="color:#f7ba2a;"></countTo>
                </div>
            </div>
            <div class="two">-</div>
            <div class="three">
                <div class="xiao">消费</div>
                <div class="xiao-money" >
                    <countTo :startVal='start' :endVal='endXiao' :duration='3000' style="color:#fe4949;"></countTo>
                </div>
            </div>
            <div class="four">=</div>
            <div class="five">
                <div class="yu">余额</div>
                <div class="yu-money">
                    <countTo :startVal='start' :endVal='endVal' :duration='3000' style="color:#13ce66;"></countTo>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import countTo from 'vue-count-to';
export default {
    components: { countTo },
    data() {
        return {
            listAll: [],
            xiaofeilistAll:[],
            shourulistAll:[],
            start:0,
            endRu: 0,
            endXiao: 0,
            endVal: 0,
        }
    },
    methods: {
        del(i,item) {
            console.log(i);
            this.listAll.splice(i,1);
            localStorage.setItem('listAll', JSON.stringify(this.listAll));
            this.val(item);
            location.reload();
            

        },
        val(item) {
            if(item.name == '消费时间') {
                this.endXiao -= item.jine;
                this.endVal += parseInt(item.jine);
                localStorage.setItem('endXiao',this.endXiao);
                localStorage.setItem('endVal',this.endVal);
               
                this.newlist('xiaofeilistAll', this.xiaofeilistAll, item);

            }else {
                this.endRu -= item.jine;
                this.endVal -= item.jine;
                localStorage.setItem('endRu',this.endRu);
                localStorage.setItem('endVal',this.endVal)

                this.newlist('shourulistAll', this.shourulistAll, item);
            }
        },
        fuzhi() {
            this.listAll = JSON.parse(localStorage.getItem('listAll'));
            this.xiaofeilistAll = JSON.parse(localStorage.getItem('xiaofeilistAll'));
            this.shourulistAll = JSON.parse(localStorage.getItem('shourulistAll'));
            this.endRu = JSON.parse(localStorage.getItem('endRu'));
            this.endXiao = JSON.parse(localStorage.getItem('endXiao'));
            this.endVal = JSON.parse(localStorage.getItem('endVal'));
        },
        newlist(string, list, item) {
            //删除后的消费数组
            var newList = list.filter(function(value, index) {

                return value.id != item.id; 
            })
            localStorage.setItem(string, JSON.stringify(newList));
        }

        
    },
    created() {
        this.fuzhi();
        
        
    }
}
</script>
<style lang="css" scoped>
    
    .box{
        display: flex;
        padding: 0 10px;

        
    }
    .ico{
        flex:1;
        line-height: 69px;
        font-size: 32px;
        /* background-image: linear-gradient(); */
        color:#ff9fc2;
    }
    .msg{
        flex:5;
        border-bottom: 1px solid #ccc;
        padding: 15px 0;
    }
    .top{
        display: flex;
        justify-content:space-between;
        font-weight: 700;
        margin-bottom: 4px;
    }
    .bottom{
        display: flex; 
        justify-content:flex-end; 
        /* background-color: red; */
        font-size: 15px;
        color:#666;
    }
    .del{
        background-color: #fe5151;
        border-radius: 8px;
        padding:1px 3px;
        color:#fff;
        margin-left: 7px;
    }
    .dibu{
        display: flex;
        position: absolute;
        width:100%;
        bottom: 55px;
        justify-content: space-around;
        color: #3196fa;
        text-align: center;
    }
    
    .two,
    .four{
        line-height: 40px;
        font-size: 24px;
        
    }
    .bg{
        width:100%;
        height: 400px;
        background: url('/src/assets/img/empty2.png') center no-repeat;
        background-size: contain;
    }
    .leixing{
        display: flex;
        color:#76b4ff;
        /* justify-content: space-between; */
    }
    
    .beizhu{
        width:250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        color:#ccc;
        margin-top: 6px;
    }
</style>