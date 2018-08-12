<template>
    <div class="skill">
       <div class="row">
            <div class="art">
                <div class="right">
                    <pubSkill></pubSkill>
                    <pubTag></pubTag>
                </div>
                <div class="left">
                    <div class="box">
                    <div class="art_title">
                        搜索结果
                        <span>{{search_title}}</span>
                    </div>
                    <ul>
                    <li v-for="v in search_all">
                        <div class="time"><span>{{v.addtime|formatTime("Y")}}</span><br><span>{{v.addtime|formatTime("MD")}}</span></div>
                        <div class="content">
                            <div class="title"><router-link :to='"/skill/detail/"+v.id'>{{v.title}}</router-link></div>
                            <div class="info"><span> 分类：<router-link :to='"/skill/?s=type&i="+v.type'>{{v.type|kindToStr}}</router-link></span><span>标签：<router-link :to='"/skill/?s=tag&i="+v.tag'>{{v.tag|tagToStr}}</router-link></span><span><router-link :to='"/skill/detail/"+v.id'>浏览({{v.click}})</router-link></span></div>
                            <div class="des">{{v.content|stripHTML|subStr(180)}}</div>
                        </div>
                    </li>
                    </ul>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import {hotFixed} from "../../static/js/fixed.js"
import * as filterFun from "../../static/js/filters.js"
import pubSkill from './pubSkill'
import pubTag from './pubTag'
export default {
    name: 'search',
    created(){
        this.$store.dispatch("getSearchAll",{s:this.$route.query.s});
    },
    mounted(){
        hotFixed();
    },
    computed:{
        search_all(){
             return this.$store.getters.searchAll;
        },
        search_title(){
            let str="";
            if(this.$route.query.s){
                str='"'+this.$route.query.s+'"'+"共"+this.search_all.length+"条记录";
            }
            else{
                str='""'+"共"+this.search_all.length+"条记录";
            }
            return str;
        }
    },
    watch:{
        '$route'(to,from){
            this.getSearchAllByS();
        }
    },
    methods:{
        getSearchAllByS(){
            this.$store.dispatch("getSearchAll",{s:this.$route.query.s});
        }
    },
    components:{
        "pubSkill":pubSkill,
        "pubTag":pubTag
    }
}
</script>

<style scoped>
</style>
