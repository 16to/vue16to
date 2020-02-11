<template>
    <div class="home">
        <div class="row">
            <div class="list_title">
                <div class="left">热点专题</div>
                <div class="right">
                    <router-link to="/special">全部</router-link>
                    /
                    <router-link to="/special/?s=type0">前端专题</router-link>
                    /
                    <router-link to="/special/?s=type1">后端专题</router-link>
                    /
                    <router-link to="/special/?s=type2">工具专题</router-link>
                </div>
            </div>
            <div class="list">
                <ul>
                    <li v-for="v in special_list">
                        <div class="box">
                            <router-link :to='"/special/detail/"+v.id' class="img"><img :src="v.img|imgAddPath" :title="v.title"></router-link>
                            <div class="content">
                                <p>
                                    <router-link :to='"/special/detail/"+v.id' :title="v.title" class="title">{{v.title}}</router-link>
                                </p>
                                <p>
                                    <router-link :to='"/special/?s=type"+v.type' class="kind">{{v.type|specialToStr}}</router-link><em class="num"><span>{{v.click}}</span>人气</em><em class="time">{{v.addtime|formatTime("YMD")}}</em>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="art">
                <div class="right">
                    <div class="box">
                        <pubSkill></pubSkill>
                        <pubTag></pubTag>
                    </div>
                </div>
                <div class="left">
                    <div class="box">
                    <div class="art_title">技术总结
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
                    <li v-for="v in skill_list">
                        <div class="time"><span>{{v.addtime|formatTime("Y")}}</span><br><span>{{v.addtime|formatTime("MD")}}</span></div>
                        <div class="content">
                            <div class="title"><router-link :to='"/skill/detail/"+v.id'>{{v.title}}</router-link></div>
                            <div class="info"><span> 分类：<router-link :to='"/skill/?s=type&i="+v.type'>{{v.type|kindToStr}}</router-link></span><span>标签：<router-link :to='"/skill/?s=tag&i="+v.tag'>{{v.tag|tagToStr}}</router-link></span><span><router-link :to='"/skill/detail/"+v.id'>浏览({{v.click}})</router-link></span></div>
                            <div class="des">{{v.content|unescapeHTML|stripHTML|subStr(180)}}</div>
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
import pubSkill from './pubSkill'
import pubTag from './pubTag'
export default {
    name: 'home',
    created(){
        this.$store.dispatch("getSpecial");
        this.$store.dispatch("getSkill");
    },
    data(){
        return {
            msg: "home"
        }
    },
    computed:{
        special_list(){
            return this.$store.getters.specialList;
        },
        skill_list(){
            return this.$store.getters.skillList;
        }

    },
    filters:{

    },
    components:{
        "pubSkill":pubSkill,
        "pubTag":pubTag
    }
}
</script>

<style lang="less">
</style>
