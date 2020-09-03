<template>
<div class="service_content">
    <div class="title">网站地图</div>
    <div class="content">
        <div class="map_info">
            <h3><router-link to="/skill">技术总结</router-link></h3>
            <div class="map_list">
                    <router-link to="/skill">全部</router-link>
                    <router-link to="/skill/?s=type&i=0">前端开发</router-link>
                    <router-link to="/skill/?s=type&i=1">后端开发</router-link>
                    <router-link to="/skill/?s=type&i=2">数据库</router-link>
                    <router-link to="/skill/?s=type&i=3">服务器</router-link>
                    <router-link to="/skill/?s=type&i=4">开发工具</router-link>
            </div>
        </div>
        <div class="map_info">
            <h3><router-link to="/special">系列专题</router-link></h3>
            <div class="map_list">
                <router-link to="/special/?type0">前端专题</router-link>
                <router-link to="/skill/?type1">后端专题</router-link>
                <router-link to="/skill/?type2">工具专题</router-link>
            </div>
        </div>
        <div class="map_info">
            <h3><router-link to="/system">技术栈</router-link></h3>
        </div>
        <div class="map_info">
            <h3><router-link to="/about/me">关于</router-link></h3>
            <div class="map_list">
                <router-link to="/about/me">关于16to</router-link>
                <router-link to="/about/map">网站地图</router-link>
                <router-link to="/about/contact">联系16to</router-link>
                <router-link to="/about/faq">常见问题</router-link>
                <router-link to="/about/link">友情链接</router-link>
            </div>
        </div>
    </div>
</div>
</template>
<script>

</script>
<style>

</style>
