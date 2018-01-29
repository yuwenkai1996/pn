
import axios from "axios"
export default({
  namespaced:true,
  state:{
    regResult:"",
    userData:{userName:"未登录",grade:".",wantsee:"0",fans:"0",talk:"0",guanzhu:"0"},
    listData:[]
  },
  getters:{
    regResult:state=>state.regResult,
    userData:state=>state.userData,
    listData:state=>state.listData
  },
  mutations:{
    setRegResult(state,payload){
      state.regResult = payload.regResult;
    },
    setUserData(state,payload){
      state.userData = payload.userData;
    },
    setlistData(state,payload){
      state.listData = payload.listData;
    }
  },
  actions:{
    getlistdata(context,payload){
      console.log(payload)
      axios.get(`/api/getlistdata?cartid=${payload.index}&sort=1`).then(res=>{
        context.commit("setlistData",{listData:res.data});
        console.log(res.data)
      })
    },
    changesort(context,index){
      var showtype = context.state.listData[0].showtype;
      axios.get(`/api/getlistdata?cartid=${showtype}&sort=${index}`).then(res=>{
        context.commit("setlistData",{listData:res.data});
        console.log(res.data)
      })
    }
  }
})
