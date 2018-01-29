
import axios from "axios"
export default({
  namespaced:true,
  state:{
    regResult:"",
    userData:{userName:"未登录",grade:".",wantsee:"0",fans:"0",talk:"0",guanzhu:"0"}
  },
  getters:{
    regResult:state=>state.regResult,
    userData:state=>state.userData
  },
  mutations:{
    setRegResult(state,payload){
      state.regResult = payload.regResult;
    },
    setUserData(state,payload){
      state.userData = payload.userData;
    }
  },
  actions:{
    login(context,payload){
      console.log(payload);
      axios.post("/api/user/login",payload).then(res=>{
        if(res.data.flag){
          window.localStorage.setItem("u_info",res.data.token);
          console.log(res.data.result)
          context.commit("setUserData",{userData:res.data.result});
          location.href="/#/user";
        }
      })
    },
    reg(context,payload){
      axios.post("/api/user/reg",payload).then(res=>{
        if(res.data.flag){
          window.localStorage.setItem("u_info",res.data.token);
          context.commit("setRegResult",{regResult:"注册成功！正在跳转..."})
          location.href="/#/user";
        }else{
          context.commit("setRegResult",{regResult:"手机号已存在！"})
        }
      })
    },
    check(context,payload){
      var token=window.localStorage.getItem("u_info");
      axios.post("/api/user/check",{token}).then(res=>{
        context.commit("setUserData",{userData:res.data.result});
      })
    },
    clearData(context,payload){
      context.commit("setUserData",{userData:{userName:"未登录",grade:".",wantsee:"0",fans:"0",talk:"0",guanzhu:"0"}});
      window.localStorage.removeItem("u_info");
      location.href="/#/user";
    }
  }
})
