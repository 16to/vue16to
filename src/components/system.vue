<template>
    <div class="system">
        <div class="row">
            <div class="detail">
                <div class="box">
                <div class="detail_content" id="main" style="height:2000px;padding:10px;margin-top:20px">
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'system',
    created(){
        this.$store.dispatch("getSystemTree");
    },
    data(){
        return {
            msg: "system"
        }
    },
    computed:{
        tree_data(){
            return this.$store.getters.systemTree;
        }
    },
    watch:{
        'tree_data'(to,from){
            this.drawTree();
        }
    },
    methods:{
        drawTree(){
            var myChart = this.$echarts.init(document.getElementById('main'));
            var treeData=this.tree_data;
            console.log([treeData]);
            myChart.setOption({
                series: [
                    {
                        type: 'tree',

                        data: [treeData],

                        top: '1%',
                        left: '9%',
                        bottom: '1%',
                        right: '25%',

                        symbolSize: 10,

                        label: {
                            normal: {
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 12
                            }
                        },

                        leaves: {
                            label: {
                                normal: {
                                    position: 'right',
                                    verticalAlign: 'middle',
                                    align: 'left'
                                }
                            }
                        },

                        expandAndCollapse: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }
                ]
            });
            myChart.on("click",function(params){
                if(typeof params.value == 'undefined'){
                    return;
                }
                var url=params.value;
                window.open(url)
            })

        }

    }
}
</script>

<style scoped>

</style>
