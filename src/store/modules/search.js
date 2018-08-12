//skill
import axios from 'axios'

const state={
    search_all:""
}

const getters={
    searchAll(state){
        return state.search_all
    }
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
    }
}

const mutations={
    SEARCH_ALL(state,data){
        state.search_all=data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
