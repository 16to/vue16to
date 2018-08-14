//首页
import axios from 'axios'

const state={
    special_list:{},
    skill_list:{}

}

const getters={
    specialList(state){
        return state.special_list
    },
    skillList(state){
        return state.skill_list
    }
}

const actions={
    //获取专题
    getSpecial({commit,state}){
        axios.get("/api/special_list").then((res)=>{
            commit("SPECIAL_LIST",res.data);
        })
    },
    //获取skill
    getSkill({commit,state}){
        axios.get("/api/skill_list").then((res)=>{
            commit("SKILL_LIST",res.data);
        })
    }
}

const mutations={
    SPECIAL_LIST(state,data){
        state.special_list=data;
    },
    SKILL_LIST(state,data){
        state.skill_list=data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
