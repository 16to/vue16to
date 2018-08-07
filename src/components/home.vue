<template>
    <div class="home">
        <div class="row">
            <div class="list_title">
                <div class="left">热点专题<span>专注一流前端开发</span></div>
                <div class="right">
                    <a href="http://www.16to.com/special/type-0.html">前端专题</a>/
                    <a href="http://www.16to.com/special/type-1.html">后端专题</a>/
                    <a href="http://www.16to.com/special/type-2.html">工具专题</a>
                </div>
            </div>
            <div class="list">
                <ul>
                    <li v-for="v in special_list">
                        <div class="box">
                            <a href="" class="img"><img :src="v.img|add16to" :title="v.title"></a>
                            <div class="content">
                                <p>
                                    <a href="" title="" class="title">{{v.title}}</a>
                                </p>
                                <p>
                                    <a href="" class="kind">{{v.type|specialToStr}}</a><em class="num"><span>{{v.click}}</span>人气</em><em class="time">{{v.addtime|formatTime("YMD")}}</em>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="art">
                <div class="left">
                    <div class="box">
                    <div class="art_title">技术积累<span>每天进步一点点</span>
                    <div class="art_title_right">
                    <a href="/skill/">更多技术</a>
                    </div>
                    </div>
                    <ul>
                    <li v-for="v in skill_list">
                        <div class="time"><span>{{v.addtime|formatTime("Y")}}</span><br><span>{{v.addtime|formatTime("MD")}}</span></div>
                        <div class="content">
                            <div class="title"><a :href='"/skill/detail/"+v.id'>{{v.title}}</a></div>
                            <div class="info"><span> 分类：<a href="http://www.16to.com/skill/type-0.html">{{v.type|kindToStr}}</a></span><span>标签：<a href="http://www.16to.com/skill/tag-25.html">{{v.tag|tagToStr}}</a></span><span><a href="http://www.16to.com/skill/detail-145.html">浏览({{v.click}})</a></span></div>
                            <div class="des">{{v.content|stripHTML|subStr(180)}}</div>
                        </div>
                    </li>
                    </ul>
                    </div>
                </div>
                <div class="right">
                    <div class="box">
                    <div class="hot_list">
                        <div class="hot_title">
                            <span class="hot_title_left">最新文章</span>
                            <span class="hot_title_right"><a href="http://www.16to.com/art/hot.html">更多文章</a></span>
                        </div>
                        <ul class="hot">
                            <li v-for="(v,k) in art_list">
                                <em class="num hotnum" v-if="k<=2">{{k+1}}</em>
                                <em class="num" v-if="k>2">{{k+1}}</em>
                                <a href="http://www.16to.com/art/detail-21.html" :title="v.title">{{v.title|subStr(15)}}</a>
                            </li>


                        </ul>
                    </div>
                    <div class="hot_list">
                        <div class="hot_title">
                            <span class="hot_title_left">最新评论</span>
                            <span class="hot_title_right"><a href="http://www.16to.com/art/hot.html">更多评论</a></span>
                        </div>
                        <ul class="hot">
                            <li v-for="(v,k) in comment_list">
                                <em class="num hotnum" v-if="k<=2">{{k+1}}</em>
                                <em class="num" v-if="k>2">{{k+1}}</em>
                                <a :href="v.id" :title="v.content">{{(v.name+"："+v.content)|subStr(15)}}</a>
                            </li>


                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    created(){
        this.$store.dispatch("getSpecial");
        this.$store.dispatch("getSkill");
        this.$store.dispatch("getArt");
        this.$store.dispatch("getComment");
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
        },
        art_list(){
            return this.$store.getters.artList;
        },
        comment_list(){
            return this.$store.getters.commentList;
        }

    },
    filters:{

    }
}
</script>

<style lang="less">
</style>
