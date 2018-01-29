<template>
  <div>
    <ul>
      <li v-for="ele in listData" class="item" v-if="listData.length">
        <router-link :to="'/detail/'+ele.showid">
        <img v-lazy="'http://localhost:3000/'+ele.showpic" class="showpic">
        <div class="context">
          <h4>[{{ele.showcity}}]{{ele.showname}}</h4>
          <p class="pingfen">评分<span>{{ele.showpingfen}}</span></p>
          <div>
            <p>{{ele.showtime}}</p>
            <p>{{ele.showlocation}}</p>
          </div>
          <div class="pricediv">
            <span class="unit">￥</span><span class="price">{{ele.lowprice}}</span><span class="qi">起</span>
          </div>
        </div>
        </router-link>
      </li>
      <li v-if="!listData.length">
        暂无数据
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "list-item",
        props:{
          listData:{
            type:Array,
            default:()=>[]
          }
        }
    }
</script>

<style scoped>
  .item{
    width: 90%;
    margin: 15px auto;
    display: flex;
  }
  .showpic{
    width: 82px;
    height: 110px;
    padding-right: 10px;
  }
  .pingfen{
    padding: 10px 0;
  }
  .context{
    position: relative;
    flex: 1;
    float: right;
    color: black;
  }
  .context p span{
    color: orange;
  }
  .context div p{
    font-size: 12px;
    width: 60%;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .pricediv{
    position: absolute;
    right: 0;
    top: 50%;
  }
  .unit{
    font-size: 10px;
    color: palevioletred;
  }
  .price{
    font-size: 16px;
    color: palevioletred;
  }
  .qi{
    font-size: 10px;
  }
</style>
