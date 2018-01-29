<template>
  <div class="all">
    <header>
      <a href="Javascript:history.go(-1);"><</a>
    </header>
    <ul class="login-main">
      <li>注册</li>
      <li><input type="text" placeholder="请输入手机号" id="userName"></li>
      <li><input type="text" placeholder="6-12位密码" id="userPassword"></li>
      <li><div @click="userreg">注册</div></li>
    </ul>
    <p>{{regResult}}</p>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: "index",
    computed :{    ...mapGetters("user",["regResult"])   },
    methods:{
      ...mapActions("user",["reg"]),
      userreg(){
        const userName = document.getElementById("userName").value;
        const userPassword = document.getElementById("userPassword").value;
        var reg = /^1\d{10}$/;
        console.log(userPassword.length)
        if(!reg.test(userName)){
          this.Toast("请输入正确手机号");
        }else if(userPassword.length<6||userPassword.length>12){
          this.Toast("请输入6-12位密码");
        }else{
          this.reg({userName,userPassword});
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
