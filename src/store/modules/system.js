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
            if(param.s==="0"){
                url="/api/javascript_tree";
            }
            if(param.s==="1"){
                url="/api/react_tree";
            }
            if(param.s==="2"){
                url="/api/es6_tree";
            }
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
