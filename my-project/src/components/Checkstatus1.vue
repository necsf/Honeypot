<template>
<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->

      <!-- main -->
  <el-main  class="el-main-3">  
        <div class="header-2">
            <p class="p-2"> <i class="el-icon-menu"></i>监测状态
            </p>
        </div>
        <hr/>
      <el-row>
      <!-- main-1 父标签-1，，一共两个父标签-->
      <div class="main-1"> 
          <!--   main-1-1子标签  -->
          <div class="main-1-1">
              <!-- 灰色 条状-->
              <div class="main-1-1-1">
                  <p class="main-p1"> 实时警告版</p>
                  <!-- **********************************更多！！！还没做路由 -->
                  <p class="main-p2">更多</p>
              </div>
              <!-- **************表格********* -->
              <div class="main-1-1-2">
                    <el-table
                        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                        height=274
                        row-style="30px"
                        cell-style="padding:0"
                        class="table1"
                        :data="tableData"
                        style="width: 100%; ">
                        <el-table-column
                        type="index"
                        label="编号"
                        width="80"
                        :index="indexMethod">
                        </el-table-column>
                        <el-table-column
                        prop="warningtype"
                        label="警告类型"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="realtimewarning"
                        label="实时警告"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="date"
                        width="180"
                        label="创建时间">
                        </el-table-column>
                    </el-table>
              </div><!--main-1-1-2-->

            </div> <!--main-1-1-->
                <!-- main-1-2 -->
                <div class="main-1-2">
                        <!-- 灰色条框 -->
                        <div class="main-1-2-1"> 
                            <p class="main-p3">一周警告走势图</p>
                            
                        </div>
                 <!-- 折线图1 -->
                    <div class="chatrs" >
                        <div id="myChart" style="width:100%; height:274px;max-width:1025px"></div>
                    </div>
                </div> <!--main-1-2 -->
        </div><!--main-1-->
        </el-row>
        <el-row>
        <!-- main-1 父标签-2，，一共两个父标签-->
        <div class="main-2">
            <div class=" main-2-1" >
                    <div class="main-2-1-1">
                            <p class="main-p4">实时告警版</p>
                            
                    </div>
                    <div class="chatrs-1" >
                        <div id="myChart2" style="width: 100%; height:300px;max-width:750px"></div>
                    </div>
            </div><!--main-2-1-->
            <div class="main-2-2">
                <div class="main-2-2-2">
                    <p class="main-p4">告警总体走势</p>
                </div>
                <div class="chatrs" >
                        <div id="myChart3" style="width: 100%; height:300px;max-width:1025px"></div>
                    </div>
            </div><!--main-2-1-->
        </div> <!--main-2-->
          </el-row>
  </el-main>
  <!-- footer -->

</el-container>
</template>
<style scoped>

               /* *********************************************header结束*****************/       
            /* **********************************************************mian开始**************** */
     /* 白色条框 */
    .header-2{
        margin: 0;
        height:45px;
        width:100%;
        color:#B3EE3A;
        font-weight: 500;
        overflow: hidden;
    }     
    /* 绿色字体 */
    .p-2{
        position: relative;
        top: 10px;
        font-size: 18pt;
        left: 20px;
        font-family: '微软雅黑';
        margin: 0;
    }   
    .el-main-3{
        padding:2px ;
    }
    /* 设置了第一个的父标签-1（共两个）最大高和宽 */
   .main-1{
       height: 50%;
       width: 100%;
       /* font-family: '微软雅黑'; */
   } 
    .main-1-1{
       width: 40%;
       height: 100%;
       float: left;
   }
    .main-1-1-1{
       width: 100%;
       height: 30px;
       background-color: #EDEDED;
       font-size: 11pt;
    }
     .main-1-1-2{
        height: 100%;
    }
    .main-1-2{
        width: 57%;
       height: 100%;
        float:right;
    }
    .main-1-2-1{
       width: 100%;
       height: 30px;
       background-color: #EDEDED;  
       font-size: 11pt;

   }
   .main-2{
       height: 50%;
       width: 100%;
       /* font-family: '微软雅黑'; */
   }
   .main-2-1{
       width: 40%;
       height: 100%;
       float: left;
   }
    .main-2-1-1{
       margin-top:20px; 
       width: 100%;
       height: 30px;
       background-color: #EDEDED;
       /* font-family: '微软雅黑';  */
       font-size: 11pt;
   }
   .main-2-2{
       width: 57%;
       height: 100%;
       float:right;
   }
   .main-2-2-2{
       margin-top:20px; 
       width: 100%;
       height: 30px;
       background-color: #EDEDED;
       font-family: 'Microsoft YaHei';
       font-size: 11pt;
   }

  .main-p1{
       /* 实时警告版 */
       margin: 0;
       margin-top:4px; 
       margin-left:10px;
       margin-bottom: 10px;
       font-family:'Microsoft YaHei';
       float: left;
    }
    .main-p2{
        margin: 0;
        margin-top:4px; 
        margin-right:10px;
        float: right; 
    }
   .main-p3{
       margin: 0;
       margin-top:4px; 
       margin-left:10px;
       margin-bottom: 10px;
       font-family:'Microsoft YaHei';
       float: left;
   }
   .main-p4{
        margin: 0;
       margin-top:4px; 
       margin-left:10px;
       margin-bottom: 10px;
       font-family:'Microsoft YaHei';
       float: left;
   }
   
    /* .table1 td{
        padding: 0;
        height: 30px;
    }
    */
    .charts-1{
        width:740px;
        height: 730px;
        float: left;
        
    }
    /****************************************** main  end */
    
</style>
<script>

export default {

    
    data() {
      return {
          administrator:'wulala',
          times:'2018-5-21',
            // ***************表格数据start
            tableData: [{
            date: '2016-05-03',
            realtimewarning: '王小虎',
            warningtype: '可疑序列警告 ',
            tag: ''
            },{
            date: '2016-05-03',
            realtimewarning: '王小虎',
            warningtype: '可疑序列警告 ',
            tag: ''
            },{
            date: '2016-05-02',
            realtimewarning: '王小虎',
            warningtype: '可疑序列警告',
            tag: ''
            },   {
            date: '2016-05-02',
           realtimewarning: '王小虎',
            warningtype: '可疑序列警告',
            },{
            date: '2016-05-01',
            realtimewarning: '王小虎',
            warningtype: '可疑序列警告 ',
            tag: ''
            },{
            date: '2016-05-01',
            realtimewarning: '王小虎',
            warningtype: '可疑序列警告 ',
            tag: ''
            },{
            date: '2016-05-01',
           realtimewarning: '王小虎',
            warningtype: '可疑序列警告 ',
            tag: ''
            },{
            date: '2016-05-01',
           realtimewarning: '王小虎',
            warningtype: '可疑序列警告 ',
            tag: ''
            }
            ],
            // *****************表格数据end
        }
      
    },
    mounted(){
        // *****************echarts图  2个折线图，一个柱状图
        this.drawLine();
         window.addEventListener("resize", function() {
                 myChart.resize();
            }); 
            
        },
     methods: {
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))//单折线图
            let myChart2 = this.$echarts.init(document.getElementById('myChart2'))// 柱状图
            let myChart3 = this.$echarts.init(document.getElementById('myChart3'))// 双折线图
            // 绘制图表

            //双折线图
             myChart3.setOption({
                title: {  },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#E0FFFF'
                        }
                    }
                },
                legend: {
                    data:['敏感行为告警','虚拟机告警']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                 
                xAxis: {
                    type : 'category',
                    boundaryGap : false,
                    data: ["03-1","03-2","03-3","03-4","03-5","03-6","03-7","03-8"]
                },
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                series: [{
                    name: '虚拟机告警',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [4100,4000, 4300,2900,4800, 5500,3800]
                },
                {
                    name: '敏感行为告警',
                    type: 'line',
                    areaStyle: {normal: {}},
                    data: [900,0, 300,0,0,0,0,0]
                }
                ]            
            })
            //柱状图
             myChart2.setOption({
                title: {  },
                tooltip: { },
                // legend:{
                //     data:['告警数量']
                // },

                xAxis: {
                    data: ["可疑序列告警","敏感行为告警","虚拟机告警"]
                },
                yAxis: {},
                series: [{
                    name: '告警数量',
                    type: 'bar',
                    data: [900, 1000, 8200]
                }]            
            })
            // 单折线图
            myChart.setOption({
                title: {  },
                tooltip: {
                    trigger:'axis'
                },
                legend:{
                    data:['敏感行为告警','虚拟机告警',]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type:'category',
                    boundaryGap: false,
                    data: [18,19,20,21,22,23,24]
                },
                yAxis: {},
                series: [{
                    name: '敏感行为告警',
                    type: 'line',
                    data: [0, 0, 7, 0, 0, 0,0]
                },
                {
                    name: '虚拟机告警',
                    type: 'line',
                    data: [0, 0, 0, 0, 0, 0,0]
                }
                ]            
            })
            window.addEventListener("resize", function() {
              //     myChart1.setOption(option1);
                 myChart.resize();
                 myChart2.resize();
                 myChart3.resize();

             }); 

        },
        
    }
   
}

 
</script>
