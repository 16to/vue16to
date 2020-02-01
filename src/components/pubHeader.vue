<template>
<div class="head">
    <div class="row">
        <div class="logo">
            <a href="/index"><img src="/static/img/logo.png" title="一路向前"></a>
        </div>
        <div class="tab">
            <router-link to="/index">首页</router-link>
            <router-link to="/skill">总结</router-link>
            <router-link to="/special">专题</router-link>
            <router-link to="/works">项目</router-link>
            <router-link to="/system">技术栈</router-link>
        </div>
        <div class="login">
            <router-link to="/about/me">关于</router-link>
        </div>
        <div class="search">
            <input type="text" name="s" id="seach_input" @keyup.enter="search" value="">
            <span @click="search()" id="search_btn"></span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'pubHeader',
    methods:{
        search(){
            this.$router.push({ path: '/search', query: { s: document.getElementById("seach_input").value }})
        }
    }

}
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
