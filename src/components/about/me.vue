<template>
    <div class="service_content">
        <div class="title">关于16to</div>
        <div class="content">
            <div class="map_info">
                <h3>基本概况</h3>
                <pre>
                姓 名：张杰        籍 贯：新昌        性 别：男        
                民 族：汉族        婚 姻：已婚        学 历：大学本科        
                出生年月：1989年1月10日</pre>
            </div>
            <div class="map_info">
                <h3>教育情况</h3>
                <pre>
                2008年9月至2012年6月 杭州电子科技大学 通信工程学院 信息对抗技术专业</pre>
            </div>
            <div class="map_info">
                <h3>技术栈</h3>
                <pre>
                前端框架：React，Vue，Angular，Backbone
                编译语言：ES6，TypeScript，JSX，LESS
                UI框架：Ant Design，TinyUI，Bootstrap，LayUI，ElementUI，GitUI
                前端组件：Echarts/AntV，Ztree，Jquery，CKEditor/UEditor
                后端相关：NodeJs，Express，MySql，Python
                运维相关：Linux/Shell，PM2/Forever，Nginx
                自动化测试：Selenium + NodeJs/Python
                前端构建：Grunt/Gulp，Webpack
                移动端：Weex，React-Native</pre>
            </div>
            <div class="map_info">
                <h3>工作经验 {{humanAll}}年</h3>
                <pre>
                【{{humanY}}年{{humanNow}}个月】2018年12月至{{humanTime}}  华为技术有限公司 前端SL 负责前端开发、设计，服务运维管理软件开发等
                【4年4个月】2014年8月至2018年12月  新华三集团有限公司 前端工程师/PL/PM/SE 负责前端开发、设计，服务器开发，软件开发等
                【2个月】2014年6月至2014年8月  恒生电子股份有限公司 前端工程师 负责产品iHOMS前端开发、功能开发等，不隐藏工作经历请忽略
                【2年】2012年6月至2014年6月  长荣通讯技术有限公司 WEB工程师 负责前端，WEB，监控通讯软件，产品设计等</pre>
            </div>
            <div class="map_info">
                <h3>项目经验</h3>
                <pre>
                前端监控项目：负责jsAgent探针，API请求，JS错误，静态资源，设备信息，自定义上报，链路跟踪，操作明细等信息的上报和展示
                Ops平台项目：负责前端所有内容，涉及资源管理，监控，作业，日志，通知，API，Agent，报表等业务
                设备平台项目：负责单个嵌入式设备、批量设备管理相关的前端所有内容，涉及Restful，snmp，日志，电源，功耗，批量升级，部署等
                办公应用项目：负责整个项目，涉及所有前后端功能，在线oj系统，日报，代办，任务分发，规格管理，设备借用，加班等
                CMS展示项目：jnsd.16to.com，shedepm.16to.com，yifan.16to.com，hzchangrong.16to.com，supe.16to.com等
                个人相关项目：个人站点，个人组件，个人框架，个人工具</pre>
            </div>
            <div class="map_info">
                <h3>职业规划</h3>
                <pre>
                热爱IT、互联网行业，积极的工作态度，良好的学习能力，不懈的技术追求
                专注前端开发，一路向前</pre>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    name:"me",
    computed:{
        humanTime(){
            return moment().format('YYYY[年]MM[月]')
        },
        humanNow(){
            return moment().format('M')
        },
        humanY(){
            return moment().format('YYYY')-2019
        },
        humanAll(){
            return moment().format('YYYY')-2012
        },
    }
}
</script>
<style>


</style>
