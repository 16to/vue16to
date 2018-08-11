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
    //获取getSystemTree
    getSystemTree({commit,state}){
        axios.get("/api/system_tree").then((res)=>{
            //console.log(res);
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
