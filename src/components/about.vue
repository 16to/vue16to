<template>
    <div class="about">
    <div class="row">
    <div class="service">
        <pubAboutLeft></pubAboutLeft>
        <router-view name="aboutView"></router-view>
    </div>
    </div>
    </div>
</template>
<script>
import pubAboutLeft from "./pubAboutLeft"
export default {
    name: 'about',
    created(){

    },
    data(){
        return {
            msg: "about"
        }
    },
    computed:{

    },
    components:{
        pubAboutLeft
    }
}
</script>

<style scoped lang="less">

</style>
