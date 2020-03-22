//skill
import axios from 'axios'

const state={
    search_all:"",
    search_skill:"",
    search_special:"",
}

const getters={
    searchAll(state){
        return state.search_all
    },
    searchSkill(state){
        return state.search_skill
    },
    searchSpecial(state){
        return state.search_special
    },
}

const actions={
    //获取search all
    getSearchAll({commit,state},param){
        let url="/api/search";
        if(param.s !== undefined){
            url="/api/search/?s="+param.s;
        }
        axios.get(url).then((res)=>{
            commit("SEARCH_ALL",res.data);
        })
    },
    //获取search skill
    getSearchSkill({commit,state},param){
        let url="/api/search/skill";
        if(param.s !== undefined){
            url="/api/search/skill?s="+param.s;
        }
        axios.get(url).then((res)=>{
            commit("SEARCH_SKILL",res.data);
        })
    },
    //获取search special
    getSearchSpecial({commit,state},param){
        let url="/api/search/special";
        if(param.s !== undefined){
            url="/api/search/special?s="+param.s;
        }
        axios.get(url).then((res)=>{
            commit("SEARCH_SPECIAL",res.data);
        })
    }
}

const mutations={
    SEARCH_ALL(state,data){
        state.search_all=data;
    },
    SEARCH_SKILL(state,data){
        state.search_skill=data;
    },
    SEARCH_SPECIAL(state,data){
        state.search_special=data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
