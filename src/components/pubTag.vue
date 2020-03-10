<template>
    <div class="hot_list" id="hot_tag">
        <div class="hot_title">
            <span class="hot_title_left">标签</span>
        </div>
        <div id="tag">
            <router-link v-for="(v,k) in skill_tag":to='"/skill/?s=tag&i="+k' :key="v.id">{{v}}</router-link>
        </div>
    </div>
</div>
</template>
<script>
export default {
    created(){
    },
    data(){
        return {
            msg: ""
        }
    },
    computed:{
        skill_tag(){
            return this.$store.getters.skillTag;
        },
    }
}
</script>
<style>

</style>
