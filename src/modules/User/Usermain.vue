<template>
  <div class="usermain">
    <div class="user-top">
      <img src="../../assets/userimg/unuser.gif">

      <ul v-if="userData.userName=='未登录'">
        <router-link :to="'/login'"><li><p>{{userData.userName}}</p></li></router-link>
        <li><p>{{userData.grade}}</p></li>
      </ul>
      <ul v-if="userData.userName!='未登录'">
        <li><p>{{userData.userName}}</p></li>
        <li><p>{{userData.grade}}</p></li>
      </ul>

      <span>个人主页></span>
    </div>
    <div class="user-bottom">
      <ul>
        <li><p>{{userData.wantsee}}</p>想看</li>
        <li><p>{{userData.talk}}</p>评论</li>
        <li><p>{{userData.guanzhu}}</p>关注</li>
        <li><p>{{userData.  fans}}</p>粉丝</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "usermain",
      props:{
        username:{
          type:String,
          default:"未登录"
        },
        userData:{
          type:Object,
          default:()=>{}
        }
      }
    }
</script>

<style scoped>
  .usermain{
    background: url("../../assets/userimg/userbg.jpg");
    background-size: cover;
  }
  .user-top{
    height: 130px;
    display: flex;
  }
  .user-bottom{
    height: 50px;
  }
  .user-top{
    display: flex;
    align-items: center;
  }
  .user-top img{
    border-radius:50%;
    height: 64px;
    width: 64px;
    margin-left: 16px;
  }
  .user-top ul{
    padding-left: 10px;
    flex: 1;
  }
  .user-top ul li:nth-child(1){
    color: white;
    font-size: 18px;
  }
  .user-top ul li:nth-child(2) p{
    color: white;
    font-size: 12px;
  }
  .user-top span{
    color: white;
    padding-right: 10px;
    font-size: 14px;
  }
  .user-bottom ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size:14px;
    text-align: center;
    background: rgba(0,0,0,0.2);
  }
</style>
