<template>
  <div class="all">
    <header>
      <a href="Javascript:history.go(-1);"><</a>
    </header>
    <ul class="login-main">
      <li>账户密码登录</li>
      <li><input type="text" placeholder="请输入手机号" id="userName"></li>
      <li><input type="text" placeholder="请输入密码" id="userPassword"></li>
      <li><div @click="userlogin">登录</div></li>
    </ul>
    <router-link to="/reg">点击注册</router-link>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
    export default {
      name: "index",

      methods:{
        ...mapActions("user",["login"]),
        userlogin(){
          const userName = document.getElementById("userName").value;
          const userPassword = document.getElementById("userPassword").value;
          var reg = /^1\d{10}$/;
          if(reg.test(userName)){
            this.login({userName,userPassword});
          }else{
            this.Toast("请输入正确手机号");
          }
        }

      }
    }
</script>

<style scoped>
  .all{
    height: 100%;
    background: white;
  }
  header{
    height: 40px;
    background: white;
    line-height: 40px;
    padding-left: 10px;

  }
  header a{
    font-size: 24px;
    color: #999999;
  }
  .login-main{
    text-align: center;
  }
  .login-main li:nth-child(1){
    font-size: 20px;
    padding: 30px 0;
  }
  .login-main input{
    width: 260px;
    height: 46px;
    border-radius: 5px;
    border: none;
  }
  .login-main div{
    width: 260px;
    height: 46px;
    margin: 0 auto;
    margin-top: 10px;
    color: white;
    line-height: 46px;
    font-size: 18px;
    background: url("../../assets/userimg/login.gif") repeat-y;
  }
</style>
