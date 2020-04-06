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
                    <div class="info"><span>发布时间：{{skillDetail.addtime|formatTime("YMDHMS")}}</span><span> 分类：<router-link :to='"/skill/?s=type&i="+skillDetail.type'>{{kindToStr(skillDetail.type)}}</router-link></span><span>标签：<router-link :to='"/skill/?s=tag&i="+skillDetail.tag'>{{tagToStr(skillDetail.tag)}}</router-link></span><span>浏览：{{skillDetail.click}}</span></div>

                    <div class="content markdown-body">
                      <vue-markdown :source='skillDetail.content|unescapeHTML'></vue-markdown>
                    </div>
                    </div>
                </div>

            </div>
       </div>
    </div>
</template>
<script>
import {hotFixed} from "../../static/js/fixed.js"
import highlightCode from '../../static/js/highlightCode.js'
import pubSkill from './pubSkill'
import pubTag from './pubTag'
import VueMarkdown from 'vue-markdown'

export default {
    name: 'skillDetail',
    created(){       
        this.$store.dispatch("getSkillDetail",this.$route.params.id);
    },
    mounted(){
        hotFixed();
    },
    updated(){
        highlightCode();
    },
    data(){
        return {
            content:"```html \n",
            msg:'# 123 \n ```html \n<form method="GET" action="/transferFunds ">\n cash: <input type="text" name="cash"> \n to: <input type=" text " name=“to"> \n<input type="submit" name="action" value=""> \n</form> \n```'
        }
    },
    computed:{
        skillDetail(){
            return this.$store.getters.skillDetail;
        }
    },
    components:{
        VueMarkdown,
        pubSkill,
        pubTag,
    },
    watch:{
        '$route'(to,from){
            this.refreshSkillDetail();
        }
    },
    methods:{
        refreshSkillDetail(){
            console.log(123);
            this.$store.dispatch("getSkillDetail",this.$route.params.id);
        },
        tagToStr(tag){
            return this.$store.getters.skillTag[tag]
        },
        kindToStr(type){
            return this.$store.getters.skillType[type]
        },
    },
}
</script>

<style>
</style>
