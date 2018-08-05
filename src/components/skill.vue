<template>
    <div class="skill">
       {{msg}}
    </div>
</template>

<script>
export default {
    name: 'skill',
    created(){

    },
    data(){
        return {
            msg: "skill"
        }
    },
    computed:{

    }
}
</script>

<style scoped>
    p{
        line-height: 100px;
    }
</style>
