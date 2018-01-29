<template>
  <div>
    <mt-header title="演出详情" class="mt-header">
      <a href="Javascript:history.go(-1);" slot="left">
        <mt-button icon="back" class="header-left">返回</mt-button>
      </a>
    </mt-header>
    <m-content class="m-content">
      <div class="header-main" v-if="detaildata.showid">
        <img :src="'http://localhost:3000/'+detaildata.showpic" alt="">
        <div class="header-main-right">
          <h3>[{{detaildata.showcity}}]{{detaildata.showname}}</h3>
          <span class="yushou">预售中</span>
          <p class="time">{{detaildata.showtime}}</p>
          <div class="star">
            <i class="iconfont icon-xingxing2" v-for="ele in (Math.floor(detaildata.showpingfen/2))"></i>
            <i class="iconfont icon-unie615" v-for="ele in (Math.floor(detaildata.showpingfen%2))"></i>
            <i class="iconfont icon-xing_l" v-for="ele in (Math.floor((10-detaildata.showpingfen)/2))"></i>
          </div>
          <div class="wantsay-talk">
            <p><i class="iconfont icon-xin"></i>想看</p>
            <p><i class="iconfont icon-pinglun"></i>评论</p>
          </div>
        </div>

      </div>
      <div class="location">
        <p><i class="iconfont icon-04"></i>{{detaildata.showlocation}}<i class="iconfont icon-youjiantou"></i></p>
      </div>
      <div class="price">
        <p>￥<span>{{detaildata.lowprice}}</span>起<i>已有1000人购买</i></p>
      </div>
      <div class="shower" v-if="showerdata.showerid">
        <h4>艺人明星<span>详情{{">"}}</span></h4>
        <div class="showerdiv">
          <img :src="'http://localhost:3000/shower/'+showerdata.showerhead" alt="">
          <div class="showeritem">
            <p>{{showerdata.showername}}{{showerdata.showerjob}}</p>
            <span>+关注</span>
          </div>
        </div>
      </div>
    </m-content >
    <div class="buy">
      <p><i class="iconfont icon-kefu"></i>客服</p>
      <p>直接购票</p>
    </div>
  </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: "index",
        computed:{
          ...mapGetters("detail",["detaildata","showerdata"])
        },
        methods:{
          ...mapActions("detail",["getdetaildata"])
        },
        mounted(){
          const showid = this.$route.params.showid;
          this.getdetaildata({showid});
        }
    }
</script>

<style scoped>
  .mt-header{
    color: black;
    background: white;
    font-size: 16px;
  }
  .header-main{
    display: flex;
    padding: 15px;
    background: cornsilk;
  }
  .header-main h3{
    padding-bottom: 5px;
  }
  .header-main-right{
    width: 100%;
  }
  .header-main img{
    width: 105px;
    height: 140px;
    padding-right: 10px;
  }
  .yushou{
    font-size: 8px;
    border: 1px solid black;
    border-radius:3px;
    padding: 2px;
  }
  .time{
    font-size: 12px;
    padding: 3px 0;
  }
  .star{
    color:rgb(253,177,70);
    padding: 3px 0;
  }
  .wantsay-talk{
    width: 100%;
    display: flex;
  }
  .wantsay-talk p{
     width: 50%;
    text-align: center;
    border: 1px solid #999999;
    padding: 3px 0;
    margin-right: 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
   }
  .location{
    padding: 15px 15px;
    background: white;
    font-size: 14px;
  }
  .location i:nth-child(2){
    float: right;
  }
  .price{
    padding: 15px 15px;
    background: white;
    font-size: 14px;
  }
  .price i{
    font-style: normal;
    float: right;
  }
  .price span{
    font-style: normal;
    color: deeppink;
    font-size: 20px;
  }
  .shower{
    padding: 0 15px;
    margin-top: 15px;
    background: white;
    padding-bottom: 15px;
  }
  .shower h4{
    padding: 15px 0;
    font-size: 16px;
  }
  .shower h4 span{
    float: right;
    font-style: normal;
    font-size: 12px;
  }
  .shower img{
    height: 68px;
    width: 68px;
  }
  .showerdiv{
    display: flex;
  }
  .showeritem{
    flex: 1;
    padding-left: 10px;
  }
  .showeritem span{
    padding: 2px 3px;
    border: 1px solid black;
    float: right;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  }
  .buy{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 50px;
    background: white;
    display: flex;
  }
  .m-content{
    padding-bottom: 50px;
  }
  .buy p:nth-child(1){
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .buy p:nth-child(2){
    background: rgb(255,38,97);
    flex: 1;
    text-align: center;
    color: white;
    line-height: 50px;
    font-size: 18px;
  }
</style>
