<template>
<div class="head">
    <div class="row">
        <div class="logo">
            <a href="/index"><img src="/static/img/logo.png" title="一路向前"></a>
        </div>
        <div class="tab">
            <router-link to="/index">首页</router-link>
            <router-link to="/skill">技术</router-link>
            <router-link to="/special">专题</router-link>
            <router-link to="/works">项目</router-link>
            <router-link to="/art">文章</router-link>
            <router-link to="/system">技术栈</router-link>
        </div>
        <div class="login">
            <router-link to="/about">关于</router-link> |  <router-link to="/contact">联系</router-link>
        </div>
        <div class="search">
            <input type="text" name="s" id="seach_input" value="">
            <span href="javascript:;" id="search_btn"></span>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped lang="less">
.head{
    position:fixed;
    top:0px;
    z-index:9999;
    height:45px;
    width:100%;
    margin-top:0px;
    background:url(/static/img/top_bg.png);
}
.nav{
    height:45px;
}
.logo{
    float:left;
    width:150px;
    height:38px;
    margin-top:2px;
}
.tab{
    font-size:14px;
    font-weight:bold;
}
.tab a{
    display:block;
    float:left;
    width:55px;
    height:43px;
    line-height:44px;
    text-align:center;
    color:#000000;
}
.tab .nav_more{
    display:block;
    float:left;
    width:55px;
    height:43px;
    line-height:44px;
    text-align:center;
    color:#000000;
    padding-right:8px;
    background:url(/static/img/nav_more.png) 42px 20px no-repeat;
    cursor:pointer;
}
.tab .nav_more:hover{
    color:#ffffff;
    background:#2d2d2d url(/static/img/nav_more_a.png) 42px 20px no-repeat;
}
.tab .nav_more a{
    display:block;
    width:100px;
    background:#2d2d2d;
    color:#ABABAB;
    line-height:35px;
    height:35px;
    font-weight:normal;
    font-size:12px;
}
.tab .nav_more a:hover{
    background:#111111;
    color:#FFB900;
}
.nav_more_content{
    position:relative;
    top:-1px;
    display:block;
    display:none;
}
.tab a:hover{
    background:#2d2d2d;
    color:#ffffff;
    text-decoration:none;
}
.tab .router-link-exact-active,.tab .router-link-active{
    background:#2d2d2d;
    color:#ffffff;
}
.search{
    float:right;
    width:180px;
    height:25px;
    margin-top:8px;
}
#seach_input{
    float:left;
    width:130px;
    height:25px;
    line-height:18px;
    margin:0px 0px 0px 10px;
    padding:0px 3px;
    border:0px;
    background:#F6F6F6;
    font-size:12px;
    color:#666666;
    border:1px #FF9200 solid;
    border-right:0px;
    outline:none;
}
#search_btn{
    float:left;
    display:block;
    height:25px;
    width:25px;
    border:1px #FF9200 solid;
    border-left:0px;
    margin-top:0px;
    background:#F6F6F6 url(/static/img/search_btn.png) no-repeat;
}
#search_btn:hover
{
    background-position:0px -25px;
}
.login{
    float:right;
    margin-left:20px;
    line-height:44px;
    font-size:12px;
    color:#666666;
}
.login a{
    color:#2D2D2D;
}
.login a:hover{
}
</style>
