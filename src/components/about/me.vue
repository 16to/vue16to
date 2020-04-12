<template>
    <div class="service_content">
        <div class="title">关于16to</div>
        <div class="content">
            <div class="map_info">
                <h3>基本概况</h3>
                <pre>
                姓 名：张杰        籍 贯：新昌        性 别：男        
                民 族：汉族        婚 姻：已婚        学 历：大学本科        
                出生年月：1989年1月10日
                </pre>
            </div>
            <div class="map_info">
                <h3>教育情况</h3>
                <pre>
                2008年9月至2012年6月 杭州电子科技大学 通信工程学院 信息对抗技术专业
                </pre>
            </div>
            <div class="map_info">
                <h3>技术栈</h3>
                <pre>
                
                </pre>
            </div>
            <div class="map_info">
                <h3>工作经验</h3>
                <pre>
                2018年12月至{{humanTime}} 华为技术有限公司 前端开发SL 负责前端开发、设计，服务运维管理软件开发等
                2014年8月至2018年12月 华三通信技术有限公司 前端工程师/PL/PM/SE 负责前端开发、设计，服务器开发，软件开发等
                2012年6月至2014年8月 长荣通讯技术有限公司 WEB工程师 负责前端，WEB，监控通讯软件，产品设计等
                </pre>
                </div>
            <div class="map_info">
                <h3>职业规划</h3>
                <pre>
                热爱IT、互联网行业，积极的工作态度，良好的学习能力，不懈的技术追求
                专注前端开发，努力成为这方面的大牛
                </pre>
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
        }
    }
}
</script>
<style>


</style>
