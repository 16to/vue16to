//skill
import axios from 'axios'

const state={
    skill_all:{},
    skill_detail:{},
    skill_tag:{},
    skill_type:{}
}

const getters={
    skillAll(state){
        return state.skill_all
    },
    skillDetail(state){
        return state.skill_detail
    },
    skillTag(state){
        return state.skill_tag
    },
    skillType(stae){
        return state.skill_type
    }

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
    },
    //获取skillTag
    getSkillTag({commit,state}){
        axios.get("/api/skill_tag").then((res)=>{
            commit("SKILL_TAG",res.data);
        })
    },
    //获取skillType
    getSkillType({commit,state}){
        axios.get("/api/skill_type").then((res)=>{
            commit("SKILL_TYPE",res.data);
        })
    }
}

const mutations={
    SKILL_ALL(state,data){
        state.skill_all=data;
    },
    SKILL_DETAIL(state,data){
        state.skill_detail=data;
    },
    SKILL_TAG(state,data){
        state.skill_tag=data;
    },
    SKILL_TYPE(state,data){
        state.skill_type=data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
