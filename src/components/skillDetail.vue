<template>
    <div class="detail">
       <div class="row">
           <div class="detail">
                <div class="right">
                    <div class="hot_list">
                        <div class="hot_title">
                            <span class="hot_title_left">热门技术</span><span class="hot_title_right"><a href="http://www.16to.com/skill/hot.html">更多热门</a></span>
                        </div>
                        <ul class="hot">
                            <li>
                                <em class="num hotnum">1</em>
                                <a href="http://www.16to.com/skill/detail-83.html" title="IE查看sessionStorage和localStorage">IE查看sessionStor...</a>
                            </li>
                            <li>
                                <em class="num hotnum">2</em>
                                <a href="http://www.16to.com/skill/detail-71.html">AMD和CMD</a>
                            </li>
                            <li>
                                <em class="num hotnum">3</em>
                                <a href="http://www.16to.com/skill/detail-56.html" title=" firebug加载不了js脚本文件问题"> firebug加载不了js脚...</a>
                            </li>
                            <li>
                                <em class="num">4</em>
                                <a href="http://www.16to.com/skill/detail-112.html">总结-使用data-的好处</a>
                            </li>
                            <li>
                                <em class="num">5</em>
                                <a href="http://www.16to.com/skill/detail-12.html" title="搭建邮箱服务器Postfix+dovecot+squirrelmail">搭建邮箱服务器Postfix+...</a>
                            </li>
                            <li>
                                <em class="num">6</em>
                                <a href="http://www.16to.com/skill/detail-97.html" title="Sublime Text 3设置代理">Sublime Text 3设...</a>
                            </li>
                            <li>
                                <em class="num">7</em>
                                <a href="http://www.16to.com/skill/detail-64.html" title="做为合格前端，无论怎么样都必须知道吧">做为合格前端，无论怎么样都必须...</a>
                            </li>
                            <li>
                                <em class="num">8</em>
                                <a href="http://www.16to.com/skill/detail-11.html">PHP中去除反斜杠的技巧</a>
                            </li>
                            <li>
                                <em class="num">9</em>
                                <a href="http://www.16to.com/skill/detail-45.html">设置Eclipse的上网代理</a>
                            </li>
                            <li>
                                <em class="num">10</em>
                                <a href="http://www.16to.com/skill/detail-63.html" title="使用Jquery如何获取带特殊符号的ID标签(空格，逗号) ">使用Jquery如何获取带特殊...</a>
                            </li>
                        </ul>
                    </div>
                    <div id="hot_tag">
                        <div class="hot_title">
                            <span class="hot_title_left">类型标签</span>
                        </div>
                        <div id="tag">
                            <a href="http://www.16to.com/skill/type-0.html">WEB开发</a>
                            <a href="http://www.16to.com/skill/type-1.html">WEB设计</a>
                            <a href="http://www.16to.com/skill/type-2.html">数据库</a>
                            <a href="http://www.16to.com/skill/type-3.html">服务器</a>
                            <a href="http://www.16to.com/skill/type-4.html">开发工具</a>
                            <a href="http://www.16to.com/skill/type-5.html">SEO</a>
                            <a href="http://www.16to.com/skill/type-6.html">C/C++</a>
                            <a href="http://www.16to.com/skill/tag-0.html">PHP</a>
                            <a href="http://www.16to.com/skill/tag-1.html">JavaScript</a>
                            <a href="http://www.16to.com/skill/tag-2.html">Jquery</a>
                            <a href="http://www.16to.com/skill/tag-3.html">CSS</a>
                            <a href="http://www.16to.com/skill/tag-4.html">HTML</a>
                            <a href="http://www.16to.com/skill/tag-5.html">HTML5</a>
                            <a href="http://www.16to.com/skill/tag-6.html">XML</a>
                            <a href="http://www.16to.com/skill/tag-7.html">AJAX</a>
                            <a href="http://www.16to.com/skill/tag-8.html">SOCKET</a>
                            <a href="http://www.16to.com/skill/tag-9.html">ThinkPHP</a>
                            <a href="http://www.16to.com/skill/tag-10.html">MySql</a>
                            <a href="http://www.16to.com/skill/tag-11.html">Sqlite</a>
                            <a href="http://www.16to.com/skill/tag-12.html">Linux</a>
                            <a href="http://www.16to.com/skill/tag-13.html">Apahce</a>
                            <a href="http://www.16to.com/skill/tag-14.html">XP</a>
                            <a href="http://www.16to.com/skill/tag-15.html">WIN7</a>
                            <a href="http://www.16to.com/skill/tag-16.html">WIN8</a>
                            <a href="http://www.16to.com/skill/tag-17.html">嵌入式</a>
                            <a href="http://www.16to.com/skill/tag-18.html">VIM</a>
                            <a href="http://www.16to.com/skill/tag-19.html">Eclipse</a>
                            <a href="http://www.16to.com/skill/tag-20.html">Firefox</a>
                            <a href="http://www.16to.com/skill/tag-21.html">IE</a>
                            <a href="http://www.16to.com/skill/tag-22.html">前端设计</a>
                            <a href="http://www.16to.com/skill/tag-23.html">SVN</a>
                            <a href="http://www.16to.com/skill/tag-24.html">CSS3</a>
                            <a href="http://www.16to.com/skill/tag-25.html">gulp</a>
                            <a href="http://www.16to.com/skill/tag-26.html">Sublime</a>
                        </div>
                    </div>
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
    }
}
</script>

<style scoped lang="less">

</style>
