<template>
    <div class="hot_list" id="hot_tag">
        <div class="hot_title">
            <span class="hot_title_left">分类标签</span>
        </div>
        <div id="tag">
            <router-link v-for="(v,k) in skill_type":to='"/skill/?s=type&i="+k' :key="v.id">{{v}}</router-link>
            <router-link v-for="(v,k) in skill_tag":to='"/skill/?s=tag&i="+k' :key="v.id">{{v}}</router-link>
        </div>
    </div>
</div>
</template>
<script>
export default {
    created(){
        this.$store.dispatch("getSkillTag");
        this.$store.dispatch("getSkillType");
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
        skill_type(){
            return this.$store.getters.skillType;
        }
    }
}
</script>
<style>

</style>
