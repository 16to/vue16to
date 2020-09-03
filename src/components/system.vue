<template>
  <div class="system">
    <div class="row">
      <div class="list_title">
        <div class="left">
          技术栈
          <span>{{search_title}}</span>
        </div>
        <div class="right">
          <span>
              <router-link to="/system">全部</router-link>
          </span>
          <span v-for="(v,index) in typeArr" v-bind:key="v">
          /
          <router-link :to='"/system/?s="+index'>{{v}}</router-link>
          </span>
        </div>
      </div>
      <div class="detail">
        <div class="box">
          <div class="detail_content" id="main" style="height:300px;padding:10px;margin-top:20px"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
// 引入饼状图组件
require("echarts/lib/chart/tree");
// 引入提示框和title组件，图例
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// require('echarts/lib/component/legend')


export default {
  name: "system",
  created() {
    this.getTreeByType();
  },
  data() {
    return {
      msg: "system",
    //   typeArr: ["数据结构和算法","React","ES6","前端安全","性能优化"],
      typeArr: ["数据结构和算法","React","ES6"],
    };
  },
  computed: {
    tree_data() {
      return this.$store.getters.systemTree;
    },
    search_title(){
            let str="全部";
            if(this.$route.query.s){
                str=this.typeArr[this.$route.query.s]
            }
            return str;
        }
  },
  watch: {
    tree_data(to, from) {
      this.drawTree();
    },
    '$route'(to,from){
        this.getTreeByType();
    }
  },
  methods: {
    getTreeByType(){
      this.$store.dispatch("getTree",{s:this.$route.query.s});
    },
    drawTree() {
      const myChart = echarts.init(document.getElementById("main"));
      const treeData = this.tree_data;
      myChart.setOption({
        series: [
          {
            type: "tree",

            data: [treeData],

            top: "1%",
            left: "9%",
            bottom: "1%",
            right: "25%",

            symbolSize: 10,
            itemStyle:{
                borderColor:"#FF4400",
            },
            label: {
              normal: {
                position: "left",
                verticalAlign: "middle",
                align: "right",
                fontSize: 12
              }
            },

            leaves: {
              label: {
                normal: {
                  position: "right",
                  verticalAlign: "middle",
                  align: "left"
                }
              }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      });
      const treeResize = ()=>{
        // 获取树节点的数量
        let arr = Array.from(new Set(myChart._chartsViews[0]._data._graphicEls));
        let minHeight = 300;
        let treeHeight = 14 * (arr.length-1);
        let curHeight = Math.max(minHeight,treeHeight);
        document.getElementById("main").style.height = curHeight + 'px';
        myChart.resize();
      }
      myChart.on("click", function(params) {
        // 判断是否点击了收缩的节点
        if(params.componentType === 'series'){
            if(!params.value){
                treeResize();
            }
        }
        if (typeof params.value == "undefined") {
          return;
        }

        const url = params.value;
        location.href = url;
      });
      treeResize();
    }
  }
};
</script>

<style scoped>
</style>
