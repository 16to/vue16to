<template>
    <div class="footer">
        <div class="bottom_bg">
            <div class="midwidth index_bottom"><span></span></div>
        </div>
        <div id="bottom">
        <div class="row">
        <div class="bottom_show">
        <ul>
            <li class="li_title"><a href="http://www.16to.com/service/about.html">关于</a></li>
            <li>
                <a href="http://www.16to.com/service/about.html">关于猩猩</a>
            </li>
            <li>
                <a href="http://www.16to.com/service/disclaimer.html">免责声明</a>
            </li>
            <li>
                <a href="http://www.16to.com/service/map.html">网站地图</a>
            </li>
        </ul>
        <ul>
            <li class="li_title"><a href="http://www.16to.com/">栏目</a></li>
            <li><a href="http://www.16to.com/skill/">技术积累</a></li>
            <li><a href="http://www.16to.com/special/">热点专题</a></li>
            <li><a href="http://www.16to.com/code/">源码分享</a></li>
            <li><a href="http://www.16to.com/works/">原创作品</a></li>
            <li><a href="http://www.16to.com/art/">精选文章</a></li>
        </ul>
        <ul>
            <li class="li_title"><a href="http://www.16to.com/service/contact.html">联系</a></li>
            <li><a href="http://www.16to.com/service/contact.html">联系猩猩</a></li>
            <li><a href="http://www.weibo.com/u/5090861940/">猩猩微博</a></li>
            <li><a href="javascript:;" id="weixin">猩猩微信</a></li>
            <li><a href="http://pan.baidu.com/share/home?uk=1128617076">猩猩网盘</a></li>
        </ul>
        <ul>
            <li class="li_title"><a href="http://www.16to.com/service/help.html">帮助</a></li>
            <li><a href="http://www.16to.com/service/help.html">常见问题</a></li>
            <li><a href="http://www.16to.com/service/question.html">在线提问</a></li>
        </ul>
        <ul>
            <li class="li_title"><a href="http://www.16to.com/service/link.html">友链</a></li>
            <!-- <li><a href="http://www.52uh.com" target="_blank">我爱优惠</a></li> -->
            <li><a href="http://mail.16to.com" target="_blank">猩猩邮箱</a></li>
            <li><a href="http://www.16to.com/service/link.html">友情链接</a></li>
        </ul>
        <ul>
            <li class="li_title"><a href="http://www.16to.com/">更多</a></li>
            <li><a href="http://www.16to.com/system/">技术体系</a></li>

            <li><a href="http://www.16to.com/comment/">猩友评论</a></li>
            <li><a href="http://www.16to.com/tool/">常用工具</a></li>

            <li><a href="http://www.16to.com/design/">设计欣赏</a></li>
            <li><a href="http://www.16to.com/life/">闲言碎语</a></li>
        </ul>
        <ul>
            <li class="ewm">
                <img src="http://www.16to.com/public/img/2wm.png">
            </li>
            <li class="copy">
            <p>Copyright © 2013-2018 <a href="http://www.16to.com/">一路向前</a></p>
            <p>2013-2018 浙ICP备13020845号-3</p>
            </li>
        </ul>
        </div>
    </div>
    </div>
    </div>
</template>

<script>

</script>

<style scoped lang="less">
.row{
    text-align: center;
}
.bottom_bg{
    background:#7A808A url(/static/img/bottom_bg.png);
    border-top:1px #cccccc solid;
}
.index_bottom{
    position: relative;
    top: 0px;
    z-index: 1;
    height:44px;
    width: 1000px;
    margin: 0px auto;
}
.index_bottom span{
    display: block;
    width: 220px;
    height: 40px;
    margin: 0px auto;
    background:url(/static/img/bottom_title.png) no-repeat;
}
#bottom{
    font-size:12px;
    height:145px;
    padding-top:10px;
    background:#7A808A;
}
.bottom_show{
    width: 100%;
    overflow: hidden;
    display: inline-block;
}
.bottom_show ul:last-child{
    width: 28%;
}
.bottom_show ul{
    float:left;
    margin:0px auto;
    width:12%;
    text-align:center;

}
.bottom_show ul li{
    line-height:22px;
}
.bottom_show ul li a{
    color:#eeeeee;
}
.bottom_show ul li a:hover{
    color:#FFBA00;
}
.bottom_show ul .li_title{

    font-size:13px;
    font-weight:bold;
}
.bottom_show ul .li_title a{
    color:#ffffff;
}
.bottom_show .ewm{
    //width:220px;
}
.bottom_show .copy{
    margin-top:5px;
    line-height:15px;
    //width:220px;
    color:#ffffff;
}
.bottom_show .copy span{
    margin:0px 5px;
}
</style>
