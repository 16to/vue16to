<template>
    <div class="skilldetail">
       <div class="row">
           <div class="detail">
                <div class="right">
                    <pubSkill></pubSkill>
                    <pubTag></pubTag>
                </div>
                <div class="left">
                    <div class="box">
                    <div class="title">{{skillDetail.title}}</div>
                    <div class="info"><span>发布时间：{{skillDetail.addtime|formatTime("YMDHMS")}}</span><span> 分类：<router-link :to='"/skill/?s=type&i="+skillDetail.type'>{{skillDetail.type|kindToStr}}</router-link></span><span>标签：<router-link :to='"/skill/?s=tag&i="+skillDetail.tag'>{{skillDetail.tag|tagToStr}}</router-link></span></div>

                    <div class="content">
                      <vue-markdown :source="skillDetail.content|unescapeHTML"></vue-markdown>
                    </div>
                    </div>

                </div>

            </div>
       </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown' //直接作为一个组件引入
import prettify from '../../static/js/prettify.js'
import {hotFixed} from "../../static/js/fixed.js"
import pubSkill from './pubSkill'
import pubTag from './pubTag'
export default {
    name: 'skillDetail',
    created(){
        this.$store.dispatch("getSkillDetail",this.$route.params.id);
    },
    mounted(){
        hotFixed();
        //console.log(prettify);
        
    },
    updated(){
        prettyPrint();
    },
    data(){
        return {
            msg: "skillDetail"
        }
    },
    computed:{
        skillDetail(){
            return this.$store.getters.skillDetail;
        }
    },
    components:{
        pubSkill,
        pubTag,
        VueMarkdown
    },
    watch:{
        '$route'(to,from){
            this.refreshSkillDetail();
        }
    },
    methods:{
        refreshSkillDetail(){
            this.$store.dispatch("getSkillDetail",this.$route.params.id);
        }
    },
}
</script>

<style>
    @import "../assets/css/prettify.css"
</style>
