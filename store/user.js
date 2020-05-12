import {http} from '../plugins/axios'

const state = ()=>( {
    username:"",
    password:"",
    token:""
})
const mutations = {
    SET_USER(state,user={}){
        state.username = user.username,
        state.password = user.password
    },
    SET_TOKEN(state,token){
        state.token = token
    }
}
const getters = {
    
}

const actions = {
    login:async({state,commit},data)=>{
        let ret = await http.post("/login",data)
        localStorage.setItem("token",ret.token)
        commit('SET_TOKEN', ret.token)
        return ret
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
  }