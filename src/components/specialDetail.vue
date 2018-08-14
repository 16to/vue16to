<template>
    <div class="special_detail">
        <div class="special_detail">
            <div class="title" :style='"background-color:"+specialDetail.color'>
                <div class="row">
                    <h1>{{specialDetail.title}}</h1>
                    <h2>{{specialDetail.subtitle}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="content">
                  <vue-markdown :source="specialDetail.content"></vue-markdown>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown' //直接作为一个组件引入
export default {
    name: 'specialDetail',
    created(){
        this.$store.dispatch("getSpecialDetail",this.$route.params.id);
    },
    mounted(){
    },
    data(){
        return {
            msg: "specialDetail"
        }
    },
    computed:{
        specialDetail(){
            return this.$store.getters.specialDetail;
        }
    },
    components:{
      VueMarkdown
    },
    watch:{
        '$route'(to,from){
            this.refreshSpecialDetail();
        }
    },
    methods:{
        refreshSpecialDetail(){
            this.$store.dispatch("getSpecialDetail",this.$route.params.id);
        }
    },
}
</script>

<style scoped lang="less">
/*special detail*/

.special_detail .title {
  overflow: hidden;
  width: 100%;
  height: 260px;
  margin-top: -3px;
  position: relative;
  background-image: url(/static/img/special_title_bg.png);
  background-color: #1a1a15;
  text-align: center;
  color: #FFFFFF;
}
.special_detail .title h1 {
  margin-top: 40px;
  font-size: 48px;
}
.special_detail .title h2 {
  margin-top: 30px;
  font-size: 20px;
}
.special_detail .title a {
  margin: 0px auto;
  margin-top: 40px;
  display: block;
  width: 140px;
  padding: 7px 0;
  background: #FF4400;
  color: #FFFFFF;
  font-size: 16px;
  border-radius: 3px;
}
.special_detail .title a:hover {
  text-decoration: none;
  background: #FF0000;
}
.special_detail .content {
  position: relative;
  border: 1px #E5E5E5 solid;
  background: #FFFFFF;
  padding: 20px 20px;
  color: #333333;
  font-size: 14px;
  line-height: 28px;
  margin-bottom: 20px;
}
.special_detail .content h1{
  padding: 10px 0px;
}
.special_detail .content h2{
  font-size: 18px;
  border-left:5px solid #FF4400;
  margin: 10px 0px;
  padding:10px 0px;
  padding-left: 8px;
  background: #FBFBFB;
}
.special_detail .content h3{
  color: #007CCC;
  font-size: 16px;
  padding:10px 0px;
  padding-left: 10px;
  list-style: square;
}
.special_detail .content h3:before{
  position: relative;
  display: inline-block;
  color: #999999;
  content: "■";
  top: -3px;

}
</style>
