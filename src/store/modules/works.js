//skill
import axios from 'axios'

const state={
    works_all:""
}
const getters={
    worksAll(state){
        return state.works_all
    }
}
const actions={
    //获取getWorksAll
    getWorksAll({commit,state}){
        axios.get("/api/works_all").then((res)=>{
            commit("WORKS_ALL",res.data);
        })
    }
}
const mutations={
    WORKS_ALL(state,data){
        state.works_all=data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
