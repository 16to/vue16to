<template>
<div class="left_nav">
    <router-link  class="nav_title" to="/about/me">关于16to</router-link>
    <router-link  class="nav_title" to="/about/map">网站地图</router-link>
    <router-link  class="nav_title" to="/about/contact">联系16to</router-link>
    <router-link  class="nav_title" to="/about/faq">常见问题</router-link>
    <router-link  class="nav_title" to="/about/link">友情链接</router-link>
</div>
</template>
<script>
</script>
<style scoped lang="less">
.left_nav{
    float:left;
    width:209px;
    padding:20px 0px 20px 0px;
}
.nav_title{
    display:block;
    width:208px;
    height:82px;
    line-height:80px;
    font-size:16px;
    text-align:center;
    color:#666666;
    margin-left:1px;
    background:url(/static/img/nav_title_bg.png) no-repeat;
}
.nav_title:hover{
    color:#FF3300;
    text-decoration:none;
    background-position:0px -164px;
}
.left_nav .router-link-active{
    color:#ffffff;
    background-position:0px -82px;
}
.left_nav .router-link-active:hover{
    color:#ffffff;
    background-position:0px -82px;
}
</style>
