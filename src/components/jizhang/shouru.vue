<template>
    <div>
         <mt-header title="收入">
          <router-link to="/jizhang" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>
        <div class="box">
            <div class="row" >
              <label for=""><i class="ico1 iconfont icon-qc-required"></i>日期：</label> 
              <span class="data1" v-for="item in timeList" ref="riqi">{{item.year}}-{{item.month}}-{{item.date}} </span>
            </div>
        </div>
        <div class="box">
            <div class="row">
              <label for=""><i class="ico1 iconfont icon-qc-required"></i>时间：</label> 
              <span class="data1" v-for="item in timeList" ref="shijian">{{item.hours}}:{{item.minutes}} </span>
            </div>
        </div>
        <div class="box">
            <div class="row-money">
              <label for=""><i class="ico1 iconfont icon-qc-required"></i>收入类型：</label> 
              <span class="data" > 
                <el-select  placeholder="请选择" class="sel" v-model="shouruList.leixing">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
                </el-select>
              </span>
            </div>
        </div>
        <div class="box">
            <div class="row-money">
              <label for=""><i class="ico1 iconfont icon-qc-required"></i>金额（￥）：</label> 
              <span class="data"><input type="text" class="ipt" dir="rtl" v-model="shouruList.jine">  </span>
            </div>
        </div>
        <div class="box">
            <div class="row-money">
              <label for="" style="padding-left:13px">备注：</label> 
              <span class="data"><input type="text" class="ipt" dir="rtl" v-model="shouruList.beizhu">  </span>
            </div>
        </div>
        <div class="btn-father">
        <a class="button medium regular green" href="javascript:void(0);" @click="sure">确认</a>

        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            pickerVisible: 2000,
            shouruList: 
            {
              riqi: '',
              shijian: '',
              leixing: '',
              jine: '',
              beizhu: '',
              name: '入账时间',
              id: new Date(),
              ico: ''
            },
            timeList: [],
            options: [{
            value: '选项1',
            label: '基本工资'
            }, {
              value: '选项2',
              label: '副业收入'
            }, {
              value: '选项3',
              label: '工资提成'
            }, {
              value: '选项4',
              label: '其它收入'
            }],
            value: ''

            
        }
    },
    methods: {
        gettime() {
            var date1 = new Date();
            var year = date1.getFullYear();
            var month = (date1.getMonth() + 1).toString().padStart(2, '0');
            var date = date1.getDate().toString().padStart(2, '0');
            var hours = date1.getHours().toString().padStart(2, '0');
            var minutes = date1.getMinutes().toString().padStart(2, '0');
            this.timeList = [{ year, month, date, hours, minutes}]

        },
        sure() {
          if (this.shouruList.leixing === '') {
            Toast({
                message: '请选择您的收入类型',
                position: 'middle',
                duration: 1500
              });
          }else{
            var regNum = /^\d{1,8}$/;
            if (regNum.test(this.shouruList.jine)) {
              //添加日期和时间到对象中
              this.shouruList.riqi = this.$refs.riqi[0].textContent;
              this.shouruList.shijian = this.$refs.shijian[0].textContent;
              this.ico();
              //总金额
              this.$store.state.endRu += parseInt(this.shouruList.jine);
              this.$store.state.endVal += parseInt(this.shouruList.jine);
              //把shouruList追加到shourulistAll中
              this.$store.state.shourulistAll.unshift(this.shouruList);
              //加到listAll
              this.$store.state.listAll.unshift(this.shouruList);
              //存到本地
              localStorage.setItem('endRu', this.$store.state.endRu)
              localStorage.setItem('endVal', this.$store.state.endVal);
              localStorage.setItem('listAll', JSON.stringify(this.$store.state.listAll));
              localStorage.setItem('shourulistAll', JSON.stringify(this.$store.state.shourulistAll));
              //回到。。。
              window.location.href = '/'
            } else {
              Toast({
                  message: '请输入正确金额',
                  position: 'middle',
                  duration: 1500
                });
            }
          }
        },
        ico() {
            switch(this.shouruList.leixing) {
                case '基本工资':
                    this.shouruList.ico = 'icon-gongzi iconfont';
                    break;
                case '副业收入':
                    this.shouruList.ico = 'icon-nongfuyeshengchan iconfont';
                    break;    
                case '工资提成':
                    this.shouruList.ico = 'icon-ticheng iconfont';
                    break;   
                default:
                    this.shouruList.ico = 'icon-qitashouru iconfont';
                         
            }
        }
        
        
    },
    mounted() {
        this.gettime()
    }
}
</script>
<style lang="css" scoped>
    .mint-header {
      margin-bottom: 10px;
      background-color: #6fcf6f;
    }
    .box{
        padding: 0 8px;
    }
    .row,
    .row-money{
        display:flex;
        justify-content: space-between;
        color:#666;
        border-bottom: 1px solid #999;
        padding: 20px 0;
    }
    .row-money{
        padding:0;
        line-height: 55px;
    }
    
    .ico1{
        font-size: 12px;
        color:red;
    }
    .ico2{
        font-size: 16px;
        color:#666;
    }
    .ipt{
        font-size: 16px;
        width: 180px;
        height: 55px;
        color:#666;
        border: 0;
        outline:none;
    }
    .btn-father{
      display: flex;
      justify-content: center;
    }
    .button{
        padding: .5em 6.5em .75em ;
        position: absolute;
        transform: translateY(50%);
    }
    .data1{
        padding-right:10px;
    }
    .sel{
        width: 110px;
    }
</style>