<template>
  <div id="app">
    <pub-header id="header"/>
    <router-view id="content"/>
    <pub-footer id="footer"/>
  </div>
</template>

<script>
import pubheader from './components/pubHeader.vue'
import pubfooter from './components/pubFooter.vue'
export default {
  name: 'App',
  created(){
    this.$store.dispatch("getSkillTag");
    this.$store.dispatch("getSkillType");
    this.$store.dispatch("getSpecialType");
    this.$store.dispatch("getWorksType");
  },
  components:{
    'pub-header':pubheader,
    'pub-footer':pubfooter,
  }
}
</script>

<style scoped>
#header{
    height: 44px;
}
#content{
    margin-top: 45px;
    background-color: #F4F4F4;
}
</style>
