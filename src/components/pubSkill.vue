<template>
    <div class="hot_list">
        <div class="hot_title">
            <span class="hot_title_left">最新技术</span>
            <span class="hot_title_right"><a href="/skill">更多技术</a></span>
        </div>
        <ul class="hot">
            <li v-for="(v,k) in skill_list">
                <em class="num hotnum" v-if="k<=2">{{k+1}}</em>
                <em class="num" v-if="k>2">{{k+1}}</em>
                <a :href='"/skill/detail/"+v.id' :title="v.title">{{(v.title)|subStr(15)}}</a>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    created(){
        this.$store.dispatch("getSkill");
    },
    data(){
        return {
            msg: ""
        }
    },
    computed:{
        skill_list(){
            return this.$store.getters.skillList;
        }
    }
}
</script>
<style>

</style>
