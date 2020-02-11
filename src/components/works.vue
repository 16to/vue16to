<template>
    <div class="works">
        <div class="row">
            <div class="list_title">
                <div class="left">原创项目</div>
            </div>
            <div class="list">
                <ul>
                    <li v-for="v in works_all">
                        <a :href="v.url" target="_blank" class="img"><img :src="v.img|imgAddPath" :title="v.title"/></a>
                    <div class="content">
                        <p><a :href="v.url" target="_blank" :title="v.title" class="title">{{v.title}}</a></p>
                        <p class="kind">{{v.type|worksToStr}} <span class="tag">{{v.tag}}</span></p>
                        <p><em class="time">{{v.addtime|formatTime("YMD")}}</em></p>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'works',
    created(){
        this.$store.dispatch("getWorksAll");
    },
    computed:{
        works_all(){
            return this.$store.getters.worksAll;
        }
    }
}
</script>

<style scoped>

</style>
