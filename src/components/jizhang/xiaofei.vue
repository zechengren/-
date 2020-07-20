<template>
    <div>
      <!-- 头部 -->
        <mt-header title="消费">
          <router-link to="/jizhang" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
        </mt-header>

        <!-- 内容 -->
        <div class="box">
          <div class="row" >
            <label for=""><i class="ico1 iconfont icon-qc-required"></i>日期：</label> 
            <span class="data1" v-for="item in timeList" ref="riqi" :key="item.id">{{item.year}}-{{item.month}}-{{item.date}} </span>
          </div>
        </div>
        <div class="box">
            <div class="row">
              <label for=""><i class="ico1 iconfont icon-qc-required"></i>时间：</label> 
              <span class="data1" v-for="item in timeList" ref="shijian" :key="item.id">{{item.hours}}:{{item.minutes}} </span>
            </div>
        </div>
        <div class="box">
            <div class="row-money">
              <label for=""><i class="ico1 iconfont icon-qc-required"></i>消费类型：</label> 
              <span class="data" > 
                <el-select  placeholder="请选择" class="sel" v-model="xiaofeiList.leixing">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                    >
                  </el-option>
                </el-select>
              </span>
            </div>
        </div>
        <div class="box">
            <div class="row-money">
              <label for=""><i class="ico1 iconfont icon-qc-required"></i>金额（￥）：</label> 
              <span class="data"><input type="text" class="ipt" dir="rtl" v-model="xiaofeiList.jine">  </span>
            </div>
        </div>
        <div class="box">
            <div class="row-money">
              <label for="" style="padding-left:13px">备注：</label> 
              <span class="data"><input type="text" class="ipt" dir="rtl" v-model="xiaofeiList.beizhu">  </span>
            </div>
        </div>
        <div class="btn-father">
        <a class="button medium regular orange" href="javascript:void(0);" @click="sure">确认</a>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            pickerVisible: 2000,
            xiaofeiList: 
            {
              riqi: '',
              shijian: '',
              leixing: '',
              jine: '',
              beizhu: '',
              name: '消费时间',
              id: new Date(),
              ico:''
            },
            timeList: [],
            
            options: [{
            value: '选项1',
            label: '水果零食',
            }, {
              value: '选项2',
              label: '餐饮伙食',

            }, {
              value: '选项3',
              label: '出行旅游',
            }, {
              value: '选项4',
              label: '网上购物',
            }, {
              value: '选项5',
              label: '生活日常',
            }, {
              value: '选项6',
              label: '租房水电',
            }, {
              value: '选项7',
              label: '医疗药物',
            }, {
              value: '选项8',
              label: '其它消费',
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
          if (this.xiaofeiList.leixing === '') {
            Toast({
                message: '请选择您的消费类型',
                position: 'middle',
                duration: 1500
              });
          }else{
            var regNum = /^\d{1,8}$/;
            if (regNum.test(this.xiaofeiList.jine)) {
              //添加日期和时间到对象中
              this.xiaofeiList.riqi = this.$refs.riqi[0].textContent;
              this.xiaofeiList.shijian = this.$refs.shijian[0].textContent;
              this.ico();
              //总金额
              this.$store.state.endXiao += parseInt(this.xiaofeiList.jine);
              this.$store.state.endVal -= parseInt(this.xiaofeiList.jine);
              //把xiaofeiList追加到xiaofeiListAll中
              this.$store.state.xiaofeilistAll.unshift(this.xiaofeiList);
              //加到listAll
              this.$store.state.listAll.unshift(this.xiaofeiList);
              //存到本地
              localStorage.setItem('endXiao', this.$store.state.endXiao)
              localStorage.setItem('endVal', this.$store.state.endVal);
              localStorage.setItem('listAll', JSON.stringify(this.$store.state.listAll));
              localStorage.setItem('xiaofeilistAll', JSON.stringify(this.$store.state.xiaofeilistAll));
              //回到。。。
              window.location.href = '#/shouye'
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
            switch(this.xiaofeiList.leixing) {
                case '水果零食':
                    this.xiaofeiList.ico = 'icon-lingshi iconfont';
                    console.log('水果');
                    break;
                case '餐饮伙食':
                    this.xiaofeiList.ico = 'icon-canyin iconfont';
                    break;    
                case '出行旅游':
                    this.xiaofeiList.ico = 'icon-lvyou iconfont';
                    break;
                case '网上购物':
                    this.xiaofeiList.ico = 'icon-gouwu iconfont';
                    break;   
                case '生活日常':
                    this.xiaofeiList.ico = 'icon-shenghuo iconfont';
                    break;    
                case '租房水电':
                    this.xiaofeiList.ico = 'icon-shuidian iconfont';
                    break;
                case '医疗药物':
                    this.xiaofeiList.ico = 'icon-yiliao iconfont';
                    break;    
                default:
                    this.xiaofeiList.ico = 'icon-icon-qita iconfont';
                         
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
      background-color: #f6cf6f;
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