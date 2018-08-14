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
                    <div class="info"><span>发布时间：{{skillDetail.addtime|formatTime("YMDHMS")}}</span><span> 分类：<router-link :to='"/skill/?s=type&i="+skillDetail.type'>{{skillDetail.type|kindToStr}}</router-link></span><span>标签：<router-link :to='"/skill/?s=tag&i="+skillDetail.tag'>{{skillDetail.tag|tagToStr}}</router-link></span></div>
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

<style scoped lang="less">

</style>
