<template>
    <div class="hot_list">
        <div class="hot_title">
            <span class="hot_title_left">最新技术</span>
        </div>
        <ul class="hot">
            <li v-for="(v,k) in skill_list10" :key="v.id">
                <em class="num hotnum" v-if="k<=2">{{k+1}}</em>
                <em class="num" v-if="k>2">{{k+1}}</em>
                <router-link :to='"/skill/detail/"+v.id' :title="v.title">{{(v.title)|subStr(17)}}</router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    created(){
        this.$store.dispatch("getSkill10");
    },
    data(){
        return {
            msg: ""
        }
    },
    computed:{
        skill_list10(){
            return this.$store.getters.skillList10;
        }
    }
}
</script>
<style>

</style>
