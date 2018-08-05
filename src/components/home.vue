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
                                    <a href="" class="kind">前端专题</a><em class="num"><span>{{v.click}}</span>人气</em><em class="time">{{v.addtime|formatTime("YMD")}}</em>
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
                    <a href="http://www.16to.com/skill/">更多技术</a>
                    </div>
                    </div>
                    <ul>
                    <li v-for="v in skill_list">
                        <div class="time"><span>{{v.addtime|formatTime("Y")}}</span><br><span>{{v.addtime|formatTime("MD")}}</span></div>
                        <div class="content">
                            <div class="title"><a href="http://www.16to.com/skill/detail-145.html">{{v.title}}</a></div>
                            <div class="info"><span> 分类：<a href="http://www.16to.com/skill/type-0.html">{{v.type}}</a></span><span>标签：<a href="http://www.16to.com/skill/tag-25.html">{{v.tag}}</a></span><span><a href="http://www.16to.com/skill/detail-145.html">浏览({{v.click}})</a></span></div>
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

<style scoped lang="less">
/*list*/
.list_title{
    margin-top: 20px;
    padding:15px 0px;
    overflow:hidden;
    border: 1px #E5E5E5 solid;
    border-bottom: 0px;
    background:#fff;
}
.list_title a{
    margin-right:3px;
    color:#5c5c5c;
}
.list_title a:hover{
    color:#FF4400;
}
.list_title .left{
    float:left;
    margin-left:10px;
    font-size:20px;
    font-weight:bold;
}
.list_title .left span{
    margin-left:20px;
    font-size:12px;
    line-height:32px;
    font-weight:normal;
    color: #666;
}
.list_title .left span a{
    color:#FF4400;
}
.list_title .right{
    float:right;
    margin-right:10px;
    font-size:14px;
    color:#5c5c5c;
    line-height:32px;
}
.list{
    margin-bottom: 20px;
    background:#fff;
    overflow:hidden;
    border:1px #E5E5E5 solid;
    border-top: 1px #F4F4F4 solid;
}
.list ul{
    overflow: hidden;
    padding: 20px;
}
.list ul li{
    width:25%;
    //padding:20px 10px;
    float:left;

}
.list ul li .img{
    padding: 5px 10px;
    display:block;
}
.list ul li .img img{
    width: 100%;
}
.list .content{
    padding:0 10px 5px 10px;
    a:hover{
        text-decoration: underline;
    }
}
.list .title{
    font-size:14px;
    font-weight:bold;
    color:#666666;
    line-height:25px;

}
.list .title:hover{
    color:#FF3300;
}
.list .kind{
    margin-right:10px;
    font-weight:bold;
    color:#FF0084;
    line-height:25px;
}
.list .tag{
    font-weight:bold;
    color:#999999;
    line-height:25px;
}
.list .tag a{
    margin-left:5px;
    font-weight:normal;
    color:#666666;
}
.list .tag a:hover{
    color:#FF3300;
}
.list .time{
    color:#666666;
    line-height:25px;
}
.list .num{
    color:#666666;
    line-height:25px;
    margin-right: 10px;
}
.list .num span{
    color:#FF3300;
}
/*art*/
.art{
    margin: 20px 0;
    overflow:hidden;
    color:#333333;
}
.art a{
    color:#333333;
}
.art a:hover{
    color:#FF4400;
}
.art .left{
    float:left;
    width:73%;
    .box{
        border:1px #E5E5E5 solid;
    }
    background:#ffffff;
}
.art .right{
    float:right;
    width: 25%;
    margin-left: 2%;
}
.art_title{
    overflow:hidden;
    height:60px;
    line-height:60px;
    padding-left:10px;
    font-size:20px;
    font-weight:bold;
    color:#333333;
}
.hot_title{
    background:#FAF9F5;
}
.border_bottom3{
    border-bottom:3px #FF4400 solid;
}
.art_title1{
    margin-top:20px;
}
.art_title span{
    margin-left:20px;
    font-size:12px;
    color:#666666;
}
.art_title_left{
    float:left;
    color:#5c5c5c;
    line-height:40px;
}
.art_title_right{
    float:right;
    margin-right:10px;
    font-size:14px;
    color:#5c5c5c;
    line-height:60px;
}
.art .left ul li{
    overflow:hidden;
    padding:20px 0px;
    border-top:1px #f4f4f4 solid;
}
.art .left .time{
    display: inline-block;
    position: absolute;
    padding:10px 12px;
    margin-left:10px;
    background:#AAAAAA;
    border-radius:3px;
    text-align:center;
    color:#fff;
    font-size:14px;
}
.art .left .content{
    position: relative;
    display: block;
    margin-left:  70px;
    padding: 0 10px;
}
.art .left .title{
    font-size: 16px;
    padding-bottom:10px;
    line-height: 20px;
    height: 20px;
    font-weight: bold;

}
.art .left .title a:hover{
    color:#FF4400;
    text-decoration:none;
}
.art .left .info{
    line-height:20px;
    padding: 0px 10px;
    background:#EDEDED;
}
.art .left .info span{
    margin-right:5px;
}
.art .left .des{
    margin-top:10px;
    line-height:25px;
    font-size:14px;
    color:#5c5c5c;
}
/*public hot*/
.hot_list{
    border:1px #E5E5E5 solid;
    margin-bottom: 20px;
    background:#ffffff;
}
.hot_title{
    overflow:hidden;
    line-height:40px;
    font-size:16px;
    font-weight:bold;
    color:#333333;
    background:#FAF9F5;
    border-bottom:1px #E5E5E5 solid;
}
#hot_tag{
    width:258px;
    border:1px #E5E5E5 solid;
    background-color: #ffffff;
}
.hot_fixed{
    position:fixed;
    z-index: 9;
    top:45px;
}
.hot_title_left{
    float:left;
    margin-left:10px;
    line-height:40px;
}
.hot_title_right{
    float:right;
    margin-right:10px;
    font-size:12px;
    color:#5c5c5c;
    line-height:40px;
}
.hot .num{
    display:inline-block;
    width:20px;
    height:20px;
    margin-right:5px;
    border-radius:3px;
    background:#AAAAAA;
    color:#ffffff;
    text-align:center;
}
.hot .hotnum{
    background:#FF4400;
}
.hot li{
    width:240px;
    padding:5px 0px;
    line-height:20px;
}
.hot{
    padding:10px;
}
#tag{
    padding:10px;
    overflow:hidden;
}
#tag a{
    display:block;
    height:25px;
    line-height:25px;
    padding:0px 5px;
    float:left;
    color:#3E6DA4;
    background:#e3F5FF;
    margin-left:5px;
    margin-top:5px;
    border-radius:3px;
}
#tag a:hover{
    color:#ffffff;
    text-decoration:none;
    background:#FF4400;
}
</style>
