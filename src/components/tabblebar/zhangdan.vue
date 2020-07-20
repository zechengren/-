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
        <div class="dibu">
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
        //删除触发
        del(i,item) {
            // console.log(i);
            this.listAll.splice(i,1);
            // localStorage.setItem('listAll', JSON.stringify(this.listAll));
            this.setlocal('listAll', this.listAll);
            this.val(item);
            location.reload();
        },
        val(item) { //根据删除的item.name,改变消费和收入总金额
            if(item.name == '消费时间') {
                this.endXiao -= item.jine;
                this.endVal += parseInt(item.jine);
                //这个就调用成功了？？
                this.setlocal('endXiao', this.endXiao);
                this.setlocal('endVal', this.endVal);
                this.newlist('xiaofeilistAll', this.xiaofeilistAll, item);
            }else {
                this.endRu -= item.jine;
                this.endVal -= item.jine;
                this.setlocal('endRu', this.endRu);
                this.setlocal('endVal', this.endVal);
                this.newlist('shourulistAll', this.shourulistAll, item);
            }
        },
        fuzhi() { //赋值，获取本地数据
            this.listAll = JSON.parse(localStorage.getItem('listAll'));
            this.xiaofeilistAll = JSON.parse(localStorage.getItem('xiaofeilistAll'));
            this.shourulistAll = JSON.parse(localStorage.getItem('shourulistAll'));
            this.endRu = JSON.parse(localStorage.getItem('endRu'));
            this.endXiao = JSON.parse(localStorage.getItem('endXiao'));
            this.endVal = JSON.parse(localStorage.getItem('endVal'));

            //下面这种方法调用失败，不知道为啥？？？
            // this.getlocal('listAll', this.listAll);
            // this.getlocal('xiaofeilistAll', this.xiaofeilistAll);
            // this.getlocal('shourulistAll', this.shourulistAll);
            // this.getlocal('endRu', this.endRu);
            // this.getlocal('endXiao', this.endXiao);
            // this.getlocal('endVal', this.endVal);

        },
        //用filter筛选点击删除后的消费数组和收入数组
        newlist(string, list, item) {
            var newList = list.filter(function(value, index) {
                return value.id != item.id; 
            })
            localStorage.setItem(string, JSON.stringify(newList));
        },
        setlocal(string, list) { //封装存储本地数据
            localStorage.setItem(string, JSON.stringify(list));
        },
        getlocal(string, list) { //封装获取本地数据
            list = JSON.parse(localStorage.getItem(string));
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
    }
    
    .beizhu{
        width:250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        color:#ccc;
        margin-top: 6px;
    }
    /* 想让列表做动画，因为循环的列表不一样，所以用transitonGroup数据就乱了 */
    /* .v-enter,
    .v-leave-to{
        opacity: 0;
        transform: translateX(80px);
    }
    
    .v-enter-active,
    .v-leave-active{
        transition: all .8s ease;
    }
    .v-move{
      transition: all 1s ease;
    }
    .v-leave-active{
      position:absolute;
    } */
</style>