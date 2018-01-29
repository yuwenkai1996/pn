<template>
  <div class="all">
    <div class="head">
      <a href="Javascript:history.go(-1);">返回</a>
      <div class="search">
        <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        <input type="text" placeholder="搜索明星，演出，场馆">
      </div>
      <div class="cancle">取消</div>
    </div>
    <m-content>
      <div class="menu">
        <span  v-for="(ele,index) in menu" @click="getnewdata(index)">{{ele}}</span>
      </div>
      <div class="menubottom">
        <a @click="sort1">综合排序</a>
        <a>全部时间</a>
        <a>在线选座</a>
        <ul class="paixu">
          <li v-for="(ele,index) in sortmenu" @click="changesort(index),sort1">{{ele}}</li>
        </ul>
        <div class="zhezhao">

        </div>
      </div>

      <ListItem :listData="listData">

      </ListItem>
    </m-content>
  </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {

      data(){return {
        menu:["演唱会","话剧歌剧","音乐会","儿童亲子","休闲展览","舞蹈芭蕾","戏曲综艺","体育赛事"],
        sortmenu:["综合排序","最新优先","低价优先","好评优先"],
        sort:1
      }},
      computed :{    ...mapGetters("listpage",["listData"])   },
      name: "index",
      methods:{
        ...mapActions("listpage",["getlistdata","changesort"]),
        getnewdata(index){
          console.log(index)
          this.getlistdata({index:index+1});
        },
        sort1(){
          this.sort?this.sort=0:this.sort=1;
          var dis=this.sort?"none":"block";
          document.getElementsByClassName("paixu")[0].style.display=dis;
        }
      },
      mounted(){
        this.getlistdata({index:1});
      }
    }
</script>

<style scoped>
  .all{
    height: 100%;
    background: white;
    overflow-y: auto;
  }
  .head{
    display: flex;
    height: 42px;
    align-items: center;
  }
  .head a{
    font-size: 16px;
    padding: 0 10px;
    color: #999999;
  }
  .head i{
    font-size: 18px;
    padding: 0 10px;
    color:white;
  }
  .search{
    flex: 1;
    background: rgb(242,242,242);
    height: 32px;
    line-height: 32px;
    margin-right: 10px;
    border-radius: 5px;
    display: flex;
  }
  .search input{
    flex: 1;
    background: transparent;
    border:none;
    position: relative;
    top: -2px;
    width: 100%;
    outline: none;
  }
  .cancle{
    font-size: 16px;
    padding: 0 10px;
    display: none;
  }
  .menu{
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px 0;
    line-height: 1.2;
    border-bottom: 2px solid rgb(211,211,211);
  }
  .menu span{
    padding: 0 10px;
    font-size: 15px;
  }
  .menubottom{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 36px;
    border-bottom: 1px solid rgb(211,211,211);
    position: relative;
  }
  .paixu{
    display:none;
    position: absolute;
    z-index: 100;
    width: 100%;
    top: 36px;
    background: white;

  }
  .paixu li{
    background: white;
    width: 100%;
    padding-left: 10px;
    height: 45px;
    line-height: 45px;
  }
  .zhezhao{
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
</style>
<style>
  .mint-tab-item-label{
    width: 60px;
  }
</style>
