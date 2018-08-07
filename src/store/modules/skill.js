//skill
import axios from 'axios'

const state={
    skill_all:{},
    skill_detail:{}
}

const getters={
    skillAll(state){
        return state.skill_all
    },
    skillDetail(state){
        return state.skill_detail
    },

}

const actions={

    //获取skill all
    getSkillAll({commit,state}){
        axios.get("/api/skill_all").then((res)=>{
            commit("SKILL_ALL",res.data);
        })
    },
    //获取skill detail
    getSkillDetail({commit,state},id){
        console.log(id);
        axios.get("/api/skill_detail/"+id).then((res)=>{
            commit("SKILL_DETAIL",res.data);
        })
    }
}

const mutations={
    SKILL_ALL(state,data){
        state.skill_all=data;
    },
    SKILL_DETAIL(state,data){
        state.skill_detail=data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
