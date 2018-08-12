<template>
<div class="service_content">
    <div class="title">网站地图</div>
    <div class="content">
        <div class="map_info">
            <h3><router-link to="/skill">技术总结</router-link></h3>
            <div class="map_list">
                <router-link to="/skill/?s=time">最新总结</router-link>
                <router-link to="/skill/?s=hot">热门总结</router-link>
            </div>
        </div>
        <div class="map_info">
            <h3><router-link to="/special">热点专题</router-link></h3>
            <div class="map_list">
                <router-link to="/special/?type0">前端专题</router-link>
                <router-link to="/skill/?type1">后端专题</router-link>
                <router-link to="/skill/?type2">工具专题</router-link>
            </div>
        </div>
        <div class="map_info">
            <h3><router-link to="/works">原创项目</router-link></h3>
        </div>
        <div class="map_info">
            <h3><router-link to="/system">技术体系</router-link></h3>
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
