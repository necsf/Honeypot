<template>
<el-container style="height:100%;" direction="vertrcal">
  <el-header height="50px" >
      <div class="header" ><i class="el-icon-share"></i>系统管理员&nbsp;&nbsp;&nbsp;<i class="el-icon-tickets"></i>  <i class="el-icon-minus"></i> <i class="el-icon-close"></i></div>
      
      </el-header>
  <el-main>
       <el-row type="flex" class="row-head">
        <div  class="h1" style=" float:left;height:20px;width:100%;color:#B3EE3A;"><i class="el-icon-menu"></i> 状态监测
            <hr/>
        </div>
        <!-- <div class="h2" style="float:left;margin:10px;width:100%;height:1px;background:red;"></div> -->
       </el-row>
      <el-row type="flex"  class="row-h">
          <el-col :span="12" class="col-h"> 
              <div class="min-h">&nbsp;&nbsp;实时告警板</div>
              <div class="min-h2">更多&nbsp;&nbsp;</div>
              <!-- 警告表格 -->
              <el-table
    :data="tableData"
    size="small"
    border
    height="210"

    style="width: 100%;">
    <el-table-column
      type="index"
      label="编号"
     width="80"
     
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="address"
      label="警告类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="实时警告"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="创建时间">
    </el-table-column>
  </el-table>
                </el-col>
          <el-col :span="12" > 
              <!-- 折线图 -->
               <div class="min-h3">&nbsp;&nbsp;一周告警走势图</div>
                <div id="myChart" :style="{width: '600px', height: '200px'}"></div>
                </el-col>
      </el-row>
      <el-row type="flex" class="row-h">
          <el-col :span="12"> 
              <div class="min-h1">&nbsp;&nbsp;实时告警板</div>
              <!-- 柱状图 -->
              <div id="myChart2" :style="{width: '640px', height: '200px'}"></div>
               </el-col>
          <el-col :span="12">  
              <!-- 双折线图 -->
              <div class="min-h3">&nbsp;&nbsp;告警总体走势图</div>
              <div id="myChart3" :style="{width: '600px', height: '200px'}"></div>
               </el-col>
      </el-row>

  </el-main>
  <el-footer>
    <hr class="hr-2"/>
    <el-menu 
    :default-active="$route.path" 
    background-color="#FAFAFA"
     class="el-menu-demo"
      mode="horizontal"
      active-text-color="#B3EE3A"
       @select="handleSelect"
       >
    <el-menu-item index="1"  ><i class="el-icon-delete"></i>系统主页</el-menu-item>
    <el-menu-item index="" ><i class="el-icon-delete"></i>状态监测</el-menu-item>
    <el-menu-item index="3" ><i class="el-icon-delete"></i>蜜网构建</el-menu-item>
    <el-menu-item index="4"><i class="el-icon-delete"></i>应用蜜罐</el-menu-item>
    <el-menu-item index="5"><i class="el-icon-delete"></i>主机蜜罐</el-menu-item>
    <el-menu-item index="6"><i class="el-icon-delete"></i>平台管理</el-menu-item>
    </el-menu>
  </el-footer>
</el-container>
</template>
<style>
    .el-header{
        background-color: rgb(10, 10, 10);
        color: rgb(252, 249, 249);
        text-align: center;
        line-height: 60px;
        
         }
    .header{
        font-family: "微软雅黑";
        float:right;
    }
    .row-h{
        height: 50%;
        
    }
    .row-head{
        font-size: 20px;
        height:40px;
        width:100%;
        font-family: "微软雅黑";
    }
    .el-menu-demo{
        font-family: "微软雅黑";
    }
    .min-h{
        float: left;
        background-color:#EDEDED;
        font-family: "微软雅黑";
        font-size: 10px;
        font-weight: 500;
    }
    .min-h1{
        float: left;
        width:100%;
        background-color:#EDEDED;
        font-family: "微软雅黑";
        font-size: 10px;
        font-weight: 500;
    }
    .min-h2{
        font-family: "微软雅黑";
        font-size: 10px;
        font-weight: 500;
        float: right;
    }
    .min-h3{
        
        margin-left:30px;
        font-family: "微软雅黑";
        background-color:#EDEDED;
        font-size: 10px;
        font-weight: 500;
        width: 90%;

    }
    .col-h{
        background-color:#EDEDED;
    }
    .hr-2{
        margin: 0;
    }

</style>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '可疑序列警告 ',
          tag: ''
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '可疑序列警告',
          zip: 200333,
          tag: '公司'
        },   {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '可疑序列警告',
          zip: 200333,
          tag: '公司'
        },{
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '可疑序列警告 ',
          zip: 200333,
          tag: '公司'
        }],
      }
      
    },
    mounted(){
    this.drawLine();
    },
    methods: {
      indexMethod(index) {
        return index;
      },
      drawLine(){
           // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        //  折线图
        myChart.setOption({   
            title: { 
                textStyle:{
                    fontSize:3, 
                },
                left:30
            },
            tooltip: {},
            xAxis: {
                data: [18,19,20,21,22,23]
            },
            yAxis: {},
            series: [{
                name: '告警',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        // 柱状图
        myChart2.setOption({
            title: { 
                
                textStyle:{
                    fontSize:3, 
                },
                
                left:1
             },
            tooltip: {},
            xAxis: {
                data: ["可疑序列警告","敏感行为告警","虚拟机告警"]
            },
            yAxis: {},
            series: [{
                name: '告警',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        //双折线图
        myChart3.setOption({
            title: {  },
            tooltip: {
                  trigger: 'axis'
            },
            legend: {
                data:['警告1','警告2']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                data: ["03-1","03-2","03-3","03-4","03-5","03-6"]
            },
            yAxis: {},
            series: [
                {
                    name: '警告1',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                },
                {
                    name: '警告2',
                    type: 'line',
                    data: [6, 21, 37, 18, 19, 24]
                },
            ]
        });

      }
    }
  };
</script>