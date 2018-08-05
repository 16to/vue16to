//首页
import axios from 'axios'

const state={
    special_list:{},
    skill_list:{},
    art_list:{},
    comment_list:{}
}

const getters={
    specialList(state){
        return state.special_list
    },
    skillList(state){
        return state.skill_list
    },
    artList(state){
        return state.art_list
    },
    commentList(state){
        return state.comment_list
    },

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
    },
    //获取art
    getArt({commit,state}){
        axios.get("/api/art_list").then((res)=>{
            commit("ART_LIST",res.data);
        })
    },
    //获取comment
    getComment({commit,state}){
        axios.get("/api/comment_list").then((res)=>{
            commit("COMMENT_LIST",res.data);
        })
    }
}

const mutations={
    SPECIAL_LIST(state,data){
        state.special_list=data;
    },
    SKILL_LIST(state,data){
        state.skill_list=data;
    },
    ART_LIST(state,data){
        state.art_list=data;
    },
    COMMENT_LIST(state,data){
        state.comment_list=data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
