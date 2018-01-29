<template>
  <div>
    <mt-header title="我的" class="mt-header">
      <a href="Javascript:history.go(-1);" slot="left">
        <mt-button icon="back" class="header-left">返回</mt-button>
      </a>
    </mt-header>
    <m-content >
      <usermain :username="userData.userName" :userData="userData"></usermain>
      <div class="myorder">
        <div class="allorder">
          <p>我的订单</p>
          <p>查看全部订单></p>
        </div>
        <ul class="orderclass">
          <li><i class="iconfont icon-qianbao"></i><p>待付款</p></li>
          <li><i class="iconfont icon-fahuo"></i><p>待发货</p></li>
          <li><i class="iconfont icon-daishouhuo1"></i><p>待收货</p></li>
        </ul>
      </div>
      <div class="youhui">
          <ul>
            <li><p>{{youhui}}</p>优惠券</li>
            <li><p>{{lipin}}</p>礼品卡</li>
          </ul>
      </div>
      <ul class="informations">
        <li><span>收货地址</span><span> > </span></li>
        <li><span>客服电话</span><span> > </span></li>
        <li><span>常见问题</span><span> > </span></li>
      </ul>
      <p class="quit" v-if="userData.userName!='未登录'" @click="quit">
        退出登录
      </p>
    </m-content>
  </div>
</template>

<script>
  import Usermain from "./Usermain"
  import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "index",
        data:()=>{return {
          youhui:0,
          lipin:0
        }},
        computed :{    ...mapGetters("user",["userData"])   },
        methods:{
          ...mapActions("user",["check","clearData"]),
          quit(){
            this.clearData();
          }
        },
        components:{
          "usermain":Usermain
        },
        mounted(){
          this.check();
        }
    }
</script>

<style scoped>

  .mt-header{
    height: 45px;
    background: white;
    color: black;
    font-size: 16px;
    font-weight: bold !important;
  }
  .allorder{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    padding: 0 10px;
    height: 44px;
    background: white;
    border-bottom: 1px solid #e6e6e6;
  }
  .allorder p:nth-child(2){
    color: #999999;
    font-size: 12px;
  }
  .orderclass{
    display: flex;
    height: 68px;
    justify-content: space-around;
    align-items: center;
    background: white;
    text-align: center;
    border-bottom: 1px solid #e6e6e6;
  }
  .orderclass i{
    font-size: 22px;
  }
  .orderclass p{
    font-size: 12px;
  }
  .youhui ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background: white;
    height: 65px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    margin-top: 10px;
  }
  .youhui p{
    color: red;
  }
  .informations{
    margin-top: 10px;
    border-top: 1px solid #e6e6e6;
  }
  .informations li{
    background: white;
    height: 43px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
  }
  .quit{
    text-align: center;
    height: 43px;
    line-height: 43px;
    background: white;
    color: red;
    margin-top: 10px;
  }
</style>
<style>
  .mint-header-title{
    font-weight: bold
  }
</style>
