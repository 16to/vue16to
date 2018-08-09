<template>
    <div class="detail">
       <div class="row">
           <div class="detail">
                <div class="right">
                    <pubSkill></pubSkill>
                    <pubTag></pubTag>
                </div>
                <div class="left">
                    <div class="box">
                    <div class="title">{{skillDetail.title}}</div>
                    <div class="info"><span>发布时间：{{skillDetail.addtime|formatTime("YMDHMS")}}</span><span> 分类：<a href="http://www.16to.com/skill/type-0.html">{{skillDetail.type|kindToStr}}</a></span><span>标签：<a href="http://www.16to.com/skill/tag-1.html">{{skillDetail.tag|tagToStr}}</a></span></div>
                    <div class="content" v-html="skillDetail.content">

                    </div>
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
    name: 'skillDetail',
    created(){
        this.$store.dispatch("getSkillDetail",this.$route.params.id);
    },
    mounted(){
        hotFixed();
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
        pubTag
    }
}
</script>

<style scoped lang="less">

</style>
