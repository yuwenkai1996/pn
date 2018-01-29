import axios from "axios"
export default({
  namespaced:true,
  state:{
    detaildata:{},
    showerdata:{}
  },
  getters:{
    detaildata:state=>state.detaildata,
    showerdata:state=>state.showerdata
  },
  mutations:{
    setdetaildata(state,payload){
      state.detaildata = payload.detaildata;
      console.log(payload.detaildata)
    },
    setshowerdata(state,payload){
      state.showerdata = payload.showerdata;
      console.log(payload.showerdata)
    }
  },
  actions:{
    getdetaildata(context,payload){
      console.log(payload)
      axios.get(`/api/getdetaildata?showid=${payload.showid}`).then(res=>{
        console.log(res.data);
        context.commit("setdetaildata",{detaildata:res.data.detaildata[0]});
        context.commit("setshowerdata",{showerdata:res.data.showerdata[0]});
      })
    }
  }
})
