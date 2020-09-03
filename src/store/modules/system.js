//skill
import axios from 'axios'

const state={
    system_tree:""
}
const getters={
    systemTree(state){
        return state.system_tree
    }
}
const actions={
    //获取getTree
    getTree({commit,state},param){
        let url="/api/system_tree";
        if(param && param.s !== undefined){
            url="/api/system_tree/?s="+param.s;
        }
        axios.get(url).then((res)=>{
            commit("SYSTEM_TREE",res.data);
        })
    }
}
const mutations={
    SYSTEM_TREE(state,data){
        state.system_tree=data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
