<template>
    <el-container style="height:100%;" direction="vertrcal">
        <!-- header -->

        <!-- main -->
        <el-main  class="el-main-3">
            <div class="header-2">
                <p class="menu-1" style="font-size:18pt;position: relative;top: -15px;left:17px;"><i class="iconfont" style="margin-right: 2px">&#xe61a;</i>监测状态</p>
            </div>
            <hr/>
            <el-row>
                <!-- main-1 父标签-1，，一共两个父标签-->
                <div class="main-1">
                    <!--   main-1-1子标签  -->
                    <div class="main-1-1">
                        <!-- 灰色 条状-->
                        <div class="main-1-1-1">
                            <p class="main-p1"> 实时警告板</p>
                            <!-- **********************************更多！！！还没做路由 -->
                            <p class="main-p2" @click="moreAlarmInfoDisplay = true">更多</p>
                        </div>
                        <el-dialog title="所有警告" :visible.sync="moreAlarmInfoDisplay" style="width: 2000px;">
                            <el-table
                                    :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                    height=274
                                    row-style="30px"
                                    cell-style="padding:0"
                                    class="table1"
                                    :data="moreAlarmInfoData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                                    style="width: 100%; ">
                                <el-table-column
                                        prop="index"
                                        label="编号"
                                        width="100"
                                        :index="indexMethod">
                                </el-table-column>
                                <el-table-column
                                        prop="warnType"
                                        label="警告类型"
                                        width="240">
                                </el-table-column>
                                <el-table-column
                                        prop="warn"
                                        label="实时警告"
                                        width="300">
                                </el-table-column>
                                <el-table-column
                                        prop="time"
                                        width="300"
                                        label="创建时间">
                                </el-table-column>
                            </el-table>
                            <div style="width: 100%;height:20px">
                                <div class="p-page" style="font-size: 12px;padding-left: 10px">显示第{{(currentPage-1) * pagesize +1}}到第{{((currentPage * pagesize)<(moreAlarmInfoData.length))?currentPage * pagesize:moreAlarmInfoData.length}}条记录
                                    <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
                                    <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                                        <el-option label="10" value="10"></el-option>
                                        <el-option label="20" value="20"></el-option>
                                    </el-select>
                                    <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px"></span></span>
                                </div>

                                <div style="float:right;margin-top:-30px;margin-right: 30px;">
                                    <!-- *********************************分页按钮 -->
                                    <el-pagination
                                            background="#E95513"
                                            prev-text="上一页"
                                            next-text="下一页"
                                            jumper-text="转到"
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :current-page="currentPage"
                                            :page-sizes="[10, 20]"
                                            :page-size="pagesize"
                                            :total="moreAlarmInfoData.length"
                                            layout="slot,prev, pager, next,total" >
                                        <!-- <slot name="as">dddd</slot> -->
                                    </el-pagination>
                                </div>
                            </div>
                        </el-dialog>
                        <!-- **************表格********* -->
                        <div class="main-1-1-2">
                            <el-table
                                    :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                    height=274
                                    row-style="30px"
                                    cell-style="padding:0"
                                    class="table1"
                                    :data="newAlarmData"
                                    style="width: 100%; ">
                                <el-table-column
                                        type="index"
                                        label="编号"
                                        width="100"
                                        :index="indexMethod">
                                </el-table-column>
                                <el-table-column
                                        prop="warnType"
                                        label="警告类型"
                                        width="240">
                                </el-table-column>
                                <el-table-column
                                        prop="warn"
                                        label="实时警告"
                                        width="200">
                                </el-table-column>
                                <el-table-column
                                        prop="time"
                                        width="215"
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
                            <div id="myChart" style="width:100%; height:274px;max-width:1025px;position:relative;top: 35px;"></div>
                        </div>
                    </div> <!--main-1-2 -->
                </div><!--main-1-->
            </el-row>
            <el-row>
                <!-- main-1 父标签-2，，一共两个父标签-->
                <div class="main-2">
                    <div class=" main-2-1" >
                        <div class="main-2-1-1">
                            <p class="main-p4">实时告警分级</p>

                        </div>
                        <div class="chatrs-1" >
                            <div id="myChart2" style="width: 100%; height:290px;max-width:800px;"></div>
                        </div>
                    </div><!--main-2-1-->
                    <div class="main-2-2">
                        <div class="main-2-2-2">
                            <p class="main-p4">告警总体走势</p>
                        </div>
                        <div class="chatrs" >
                            <div id="myChart3" style="width: 100%; height:290px;max-width:1025px;"></div>
                        </div>
                    </div><!--main-2-1-->
                </div> <!--main-2-->
            </el-row>
        </el-main>
        <!-- footer -->

    </el-container>
</template>
<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 796633 */
        src: url('//at.alicdn.com/t/font_796633_b3c1isjjwu.eot');
        src: url('//at.alicdn.com/t/font_796633_b3c1isjjwu.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_796633_b3c1isjjwu.woff') format('woff'),
        url('//at.alicdn.com/t/font_796633_b3c1isjjwu.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_796633_b3c1isjjwu.svg#iconfont') format('svg');
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:36px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0px;
        color: #5ebf18;
    ;}


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
        height: 95%;
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
    /****************************************** main  end */

</style>
<script>

    export default {


        data() {
            return {
                //实时警告板更多警告信息
                moreAlarmInfoData:[],
                //分页变量
                currentPage: 1,
                jumper:1,
                pagesize:10,
                //实施警告版更多页面是否显示
                moreAlarmInfoDisplay:false,
                //一周警告走势
                chart1_timeList2 :[0,0,0,0],
                chart1_sumList2 : [0,0,0,0],
                myChart2_data:[1,1,5000],
                administrator:'wulala',
                times:'2018-5-21',
                // ***************表格数据start
                newAlarmData: [{
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

                // 总体走势表格数据
                chart3_timeList: [],
                chart3_sumList: [],

            }

        },
        mounted(){
            // *****************echarts图  2个折线图，一个柱状图
            this.getNewWarnMsg();
            this.getMoreWarnMsg();
            this.getWarningSum();
            this.getAllWarningSum();
            this.getWarnMsgNum();
            this.drawLine();
        },
        methods: {
            cleanUserName() {
                // alert(1111)
                // sessionStorage.setItem("username","0");
                // window.location.href = "#/systemindex"
            },
            getMoreWarnMsg(){
                var that = this;
                this.$axios.get("/getMoreWarnMsg").then(function (response) {
                    that.moreAlarmInfoData = response.data;
                })
            },
            //实时警告板表格的警告信息获取方法
            getNewWarnMsg(){
                var that = this;
                this.$axios.get("/getNewWarnMsg").then(function (response) {
                    that.newAlarmData = response.data;
                })
            },

            getWarnMsgNum() {
                var that = this;
                this.$axios.get("/getWarnMsgNum").then(function (response) {
                    that.chart1_timeList2 = response.data.timeList;
                    that.chart1_sumList2 = response.data.sumList;
                    // alert(that.timeList2)
                    that.drawLine();
                })

                // // alert(this.timeList2)
                // alert(this.timeList2+"numlist")
            },
            getAllWarningSum(){
                var that = this;
                this.$axios.get("/getAllWarningSum").then(function (response) {
                    // alert(response.data);
                    that.chart3_timeList = response.data.timeList;
                    that.chart3_sumList = response.data.numList;
                    // alert(that.timeList);
                    that.drawLine();
                })

            },
            //获取实时警告板信息（柱形图）
            getWarningSum(){
                var that = this;
                this.$axios.get("/getWarningSum").then(function (response) {
                    that.myChart2_data = response.data;
                    that.drawLine();

                });
            },
            handleSizeChange(size) {
                this.pagesize = size;
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage;
                console.log(`当前页: ${val}`);
            },
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))//单折线图
                let myChart2 = this.$echarts.init(document.getElementById('myChart2'))// 柱状图
                let myChart3 = this.$echarts.init(document.getElementById('myChart3'))// 双折线图
                // 绘制图表
                //双折线图
                myChart3.setOption({
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: this.chart3_timeList
                        },
                        yAxis: {
                            type: 'value'
                        },
                    legend: {
                        data:['流量','降雨量'],
                        x: 'left'
                    },
                        series: [{
                            data: this.chart3_sumList,
                            type: 'line',
                            areaStyle: {
                                normal:{
                                    color:'rgba(112, 168, 255, 0.5)'
                                }
                            },
                            symbolSize: 10,
                            itemStyle: {
                                normal: {
                                    color: "#70A8FF",
                                    lineStyle: {
                                        color: "#70A8FF"
                                    }
                                }
                            },
                        }]
                    }

                );
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
                        data: this.myChart2_data,
                    }]
                })
                // 单折线图
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.chart1_timeList2
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: this.chart1_sumList2,
                        type: 'line',
                        areaStyle: {
                            normal:{
                                color:'rgba(112, 168, 255, 0.5)'
                            }
                        },
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                color:"#70A8FF",
                                lineStyle: {
                                    color: "#70A8FF"
                                }
                            }
                        }
                    }]
                });
                // echart自适应
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
