//skill
import axios from 'axios'

const state={
    special_all:"",
    special_detail:"",
}
const getters={
    specialAll(state){
        return state.special_all
    },
    specialDetail(state){
        return state.special_detail
    },
    specialType(state){
        return state.special_type
    }
}
const actions={
    //获取special all
    getSpecialAll({commit,state},param){
        let url="/api/special_all";
        if(param.s !== undefined){
            url="/api/special_all/?s="+param.s;
        }
        axios.get(url).then((res)=>{
            commit("SPECIAL_ALL",res.data);
        })
    },
    //获取special detail
    getSpecialDetail({commit,state},id){
        // console.log(id);
        axios.get("/api/special_detail/"+id).then((res)=>{
            commit("SPECIAL_DETAIL",res.data);
        })
    },
    //获取SpecialType
    getSpecialType({commit,state}){
        axios.get("/api/special_type").then((res)=>{
            commit("SPECIAL_TYPE",res.data);
        })
    },
}
const mutations={
    SPECIAL_ALL(state,data){
        state.special_all=data;
    },
    SPECIAL_DETAIL(state,data){
        state.special_detail=data;
    },
    SPECIAL_TYPE(state,data){
        state.special_type=data;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
