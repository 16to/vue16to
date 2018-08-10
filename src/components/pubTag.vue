<template>
    <div class="hot_list" id="hot_tag">
        <div class="hot_title">
            <span class="hot_title_left">分类标签</span>
        </div>
        <div id="tag">
            <a v-for="(v,k) in skill_type":href='"/skill/?s=type&i="+k'>{{v}}</a>
            <a v-for="(v,k) in skill_tag":href='"/skill/?s=tag&i="+k'>{{v}}</a>
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
