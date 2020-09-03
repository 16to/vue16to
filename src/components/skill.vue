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
                    <div class="art_title">技术总结<span>{{search_title}}</span>
                    <div class="art_title_right">
                    <router-link to="/skill">全部</router-link>
                    /
                    <router-link to="/skill/?s=type&i=0">前端开发</router-link>
                    /
                    <router-link to="/skill/?s=type&i=1">后端开发</router-link>
                    /
                    <router-link to="/skill/?s=type&i=2">数据库</router-link>
                    /
                    <router-link to="/skill/?s=type&i=3">服务器</router-link>
                    /
                    <router-link to="/skill/?s=type&i=4">开发工具</router-link>
                    </div>
                    </div>
                    <ul>
                    <li v-for="v in skill_all">
                        <div class="time"><span>{{v.addtime|formatTime("Y")}}</span><br><span>{{v.addtime|formatTime("MD")}}</span></div>
                        <div class="content">
                            <div class="title"><router-link :to='"/skill/detail/"+v.id'>{{v.title}}</router-link></div>
                            <div class="info"><span> 分类：<router-link :to='"/skill/?s=type&i="+v.type'>{{kindToStr(v.type)}}</router-link></span><span>标签：<router-link :to='"/skill/?s=tag&i="+v.tag'>{{tagToStr(v.tag)}}</router-link></span><span><router-link :to='"/skill/detail/"+v.id'>浏览({{v.click}})</router-link></span></div>
                            <div class="des">{{v.content|unescapeHTML|subStr(180)}}</div>
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
import pubSkill from './pubSkill'
import pubTag from './pubTag'
export default {
    name: 'skill',
    created(){
        this.$store.dispatch("getSkillAll",{s:this.$route.query.s,i:this.$route.query.i});
    },
    mounted(){
        hotFixed();
    },
    computed:{
        skill_all(){
             return this.$store.getters.skillAll;
        },
        search_title(){
            let str="";
            if(this.$route.query.s=="type"){
                str="分类："+this.kindToStr(this.$route.query.i);
            }
            else if(this.$route.query.s=="tag"){
                str="标签："+this.tagToStr(this.$route.query.i);
            }
            else if(this.$route.query.s=="hot"){
                str="热度排序";
            }
            else if(this.$route.query.s=="time"){
                str="时间排序";
            }
            else{
                str="全部";
            }
            return str;
        }
    },
    watch:{
        '$route'(to,from){
            this.getSkillAllByType();
        }
    },
    methods:{
        getSkillAllByType(){
            this.$store.dispatch("getSkillAll",{s:this.$route.query.s,i:this.$route.query.i});
        },
        tagToStr(tag){
            return this.$store.getters.skillTag[tag]
        },
        kindToStr(type){
            return this.$store.getters.skillType[type]
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
