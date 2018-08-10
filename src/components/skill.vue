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
                    <div class="art_title">技术积累<span>每天进步一点点</span>
                    <div class="art_title_right">
                    <a href="/skill/?s=hot">热门技术</a>
                    </div>
                    </div>
                    <ul>
                    <li v-for="v in skill_list">
                        <div class="time"><span>{{v.addtime|formatTime("Y")}}</span><br><span>{{v.addtime|formatTime("MD")}}</span></div>
                        <div class="content">
                            <div class="title"><a :href='"/skill/detail/"+v.id'>{{v.title}}</a></div>
                            <div class="info"><span> 分类：<a :href='"/skill/?s=type&i="+v.type'>{{v.type|kindToStr}}</a></span><span>标签：<a :href='"/skill/?s=tag&i="+v.tag'>{{v.tag|tagToStr}}</a></span><span><a :href='"/skill/detail/"+v.id'>浏览({{v.click}})</a></span></div>
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
    data(){
        return {
            msg: "skill"
        }
    },
    computed:{
        skill_list(){
            return this.$store.getters.skillList;
        }
    },
    watch:{
        '$route'(to,from){
            getSkillAllByType();
        }
    },
    methods:{
        getSkillAllByType(type){
            this.$store.dispatch("getSkillAll",{s:this.$route.query.s,i:this.$route.query.i});
            this.skill_list=this.$store.getters.skillList;
        }
    },
    components:{
        "pubSkill":pubSkill,
        "pubTag":pubTag
    }
}
</script>

<style scoped>
    p{
        line-height: 100px;
    }
</style>
