//skill
import axios from 'axios'

const state={
    works_all:"",
    works_type:""
}
const getters={
    worksAll(state){
        return state.works_all
    },
    worksType(state){
        return state.works_type
    }
}
const actions={
    //获取getWorksAll
    getWorksAll({commit,state}){
        axios.get("/api/works_all").then((res)=>{
            commit("WORKS_ALL",res.data);
        })
    },
    //获取WorksType
    getWorksType({commit,state}){
        axios.get("/api/works_type").then((res)=>{
            commit("WORKS_TYPE",res.data);
        })
    },
}
const mutations={
    WORKS_ALL(state,data){
        state.works_all=data;
    },
    WORKS_TYPE(state,data){
        state.works_type=data;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
