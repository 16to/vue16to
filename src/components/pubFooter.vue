<template>
    <div class="footer">
        <div class="bottom_bg">
            <div class="midwidth index_bottom"><span></span></div>
        </div>
        <div id="bottom">
        <div class="row">
        <div class="bottom_show">
        <ul>
            <li class="li_title">关于</li>
            <li>
                <router-link to="/about/me">关于16to</router-link>
            </li>
            <li>
                <router-link to="/about/map">网站地图</router-link>
            </li>
        </ul>
        <ul>
            <li class="li_title">栏目</li>
            <li><router-link to="/skill">技术总结</router-link></li>
            <li><router-link to="/special">系列专题</router-link></li>
            <li><router-link to="/system">技术栈</router-link></li>
        </ul>
        <ul>
            <li class="li_title">联系</li>
            <li><router-link to="/about/contact">联系16to</router-link></li>
            <li><router-link to="/about/contact" id="weixin">微信账号</router-link></li>
            <li><router-link to="/about/contact" id="qq">QQ账号</router-link></li>
        </ul>
        <ul>
            <li class="li_title">帮助</li>
            <li><router-link to="/about/faq">常见问题</router-link></li>
        </ul>
        <ul>
            <li class="li_title">友链</li>
            <li><a href="http://gitui.com" target="_blank">Gitui</a></li>
            <li><a href="http://16coder.com" target="_blank">16coder</a></li>
        </ul>
        <ul>
            <li class="li_title">更多</li>
            <li><a href="http://d.16to.com" target="_blank">常用工具</a></li>
            <li><a href="http://d.16to.com/book" target="_blank">常用书籍</a></li>
            <li><a href="http://mail.16to.com" target="_blank">16to邮箱</a></li>
        </ul>
        <ul>
            <li class="ewm">
                <img src="/static/img/2wm.png">
            </li>
            <li class="copy">
            <p>Copyright © 2013-{{copyTime}} <a href="http://admin.16to.com" target="_blank">一路向前</a></p>
            <p>2013-{{copyTime}} <a href="http://www.beian.miit.gov.cn" target="_blank">浙ICP备13020845号-3</a></p>
            </li>
        </ul>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name:"pubHeader",
    computed:{
        copyTime(){
            return moment().format('YYYY')
        }
    }
}
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
    height:42px;
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
    color:#eeeeee;
}
.bottom_show ul li a{
    color:#eeeeee;
}
.bottom_show ul li a:hover{
    color:#FFBA00;
}
.bottom_show ul .li_title{
    color:#fff;
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
