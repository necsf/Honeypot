<template>
<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
      <!-- main -->
  <el-main class="el-main-2" > 
      <div class="header-2">
              <p class="p-2"> <i class="iconfont">&#xe603;</i>蜜罐构建
              </p>
          </div>
          <hr style="margin-bottom:0;"/>
      <div class="main-1">
            <el-tabs 
                class="tabs-1"
                :tab-position="top" 
                type="card" 
                @tab-click="handleClick">
                <!-- 节点配置 -->
                <el-tab-pane label="节点配置">
                    <div class="tab-1">
                        <div class="tab-1-1">
                            <el-button  class="button4"  @click="dialogText1 = true">添加模板</el-button>
                            <el-dialog title="添加模板" :visible.sync="dialogText1">
                            <el-form :model="form">
                                <el-form-item label="模板名称" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="IP" :label-width="formLabelWidth">
                                    <el-input v-model="form.IP" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="服务器" :label-width="formLabelWidth">
                                <el-select v-model="form.region" placeholder="请选择服务器">
                                    <el-option label="服务器1" value="111"></el-option>
                                    <el-option label="服务器2" value="222"></el-option>
                                </el-select>
                                </el-form-item>
                                <el-form-item label="蜜罐类型" :label-width="formLabelWidth">
                                <el-select v-model="form.region" >
                                    <el-option label="蜜罐类型1" value="111"></el-option>
                                    <el-option label="蜜罐类型2" value="222"></el-option>
                                </el-select>
                                <el-select v-model="form.region" >
                                    <el-option label="蜜罐类型1" value="111"></el-option>
                                    <el-option label="蜜罐类型2" value="222"></el-option>
                                </el-select>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button class="button3" @click="dialogText1 = false">取 消</el-button>
                                <el-button class="button2"  @click="dialogText1 = false" style="background-color:#E95513">确 定</el-button>
                            </div>
                            </el-dialog>
                            &nbsp;&nbsp;
                            <el-button class="button4" @click="dialogText = true" style="background-color:#E95513">部署网络</el-button><!--找不到别的合法信号量了，只能用dialogText了-->
                            <el-dialog title="部署网络" :visible.sync="dialogText">
                            <el-form :model="form">
                                <el-form-item label="模板名称" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="IP" :label-width="formLabelWidth">
                                    <el-input v-model="form.IP" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="服务器" :label-width="formLabelWidth">
                                    <el-input v-model="form.server_name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="蜜罐类型" :label-width="formLabelWidth">
                                    <el-input v-model="form.region" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="IP" :label-width="formLabelWidth">
                                    <el-input v-model="form.IP" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="服务器" :label-width="formLabelWidth">
                                    <el-input v-model="form.server_name" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="蜜罐类型" :label-width="formLabelWidth">
                                    <el-input v-model="form.region" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button class="button3" @click="dialogText = false">取 消</el-button>
                                <el-button  class="button2"  @click="dialogText = false" >确 定</el-button>
                            </div>
                            </el-dialog>
                            &nbsp;&nbsp;
                            <el-button class="button4"  @click="open2" >删除</el-button>
                        </div><!--table-1-1-->
                        <div class="tab-1-2">
                            <el-table
                                :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                class="table1"
                                row-style="30px"
                                cell-style="padding:0"
                                id="table11"
                                :data="temdata"
                                style="width: 100%"><!--表的名字-->
                                <!-- 选择框   -->
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column
                                type="index"
                                width="130"
                                label="编号"
                                :index="indexMethod">
                                </el-table-column>
                                <el-table-column
                                prop="template"
                                label="模板名"
                                width="250">
                                </el-table-column>
                                <el-table-column
                                prop="operation"
                                label="操作">
                                <template slot-scope="scope">
                                    <el-button
                                    type="text"
                                    size="mini"
                                    style="font-weight: bold"
                                    @click="dialog = true">查看详情</el-button>
                                  <el-dialog title="查看更多" :visible.sync="dialog">
                                    <el-table
                                      :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                      class="table1"
                                      id="table11"
                                      :data="temdata"
                                      style="width: 100%"><!--表的名字-->
                                      <!-- 选择框   -->
                                      <el-table-column
                                        type="index"
                                        label="编号"
                                        :index="indexMethod">
                                      </el-table-column>
                                      <el-table-column
                                        prop="template"
                                        label="模板名">
                                      </el-table-column>
                                      <el-table-column
                                        prop="IP"
                                        label="IP">
                                      </el-table-column>
                                      <el-table-column
                                        prop="server_name"
                                        label="服务器">
                                      </el-table-column>
                                      <el-table-column
                                        prop="region"
                                        label="蜜罐类型">
                                      </el-table-column>
                                      <el-table-column
                                        prop="IP"
                                        label="IP">
                                      </el-table-column>
                                      <el-table-column
                                        prop="server_name"
                                        label="服务器">
                                      </el-table-column>
                                      <el-table-column
                                        prop="region"
                                        label="蜜罐类型">
                                      </el-table-column>
                                    </el-table>
                                    <div slot="footer" class="dialog-footer">
                                      <el-button class="button3" @click="dialog = false">取 消</el-button>
                                      <el-button  class="button2" @click="dialog = false">确 定</el-button>
                                    </div>
                                  </el-dialog>
                                </template>

                                </el-table-column>
                            </el-table>
                        </div><!--table-1-2-->
                    </div><!--table-1-->
                  <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
                    <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
                    <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                      <el-option label="10" value="10"></el-option>
                      <el-option label="20" value="20"></el-option>
                    </el-select>
                    <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span>
                  </div>

                  <div style="float:right;margin-top:10px;margin-right: 30px;">
                    <!-- *********************************分页按钮 -->
                    <el-pagination
                      background="#E95513"
                      prev-text="上一页"
                      next-text="下一页"
                      jumper-text="转到"
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage4"
                      :page-sizes="[10, 20]"
                      :page-size="100"
                      layout="slot,prev, pager, next" :total="50">
                      <!-- <slot name="as">dddd</slot> -->
                    </el-pagination>
                  </div>
                </el-tab-pane>

                <!-- 服务器配置 -->
                <el-tab-pane label="服务器配置">
                    <div class="tab-2">
                        <div class="tab-2-1">
                                <el-button class="button4" @click="dialogFormVisible = true" >添加服务器</el-button>
                                <el-dialog title="添加服务器" :visible.sync="dialogFormVisible">
                                <el-form :model="form">
                                    <el-form-item label="服务器名称" :label-width="formLabelWidth">
                                    <el-input v-model="form.temserver" auto-complete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="服务器IP" :label-width="formLabelWidth">
                                    <el-input v-model="form.IP" auto-complete="off"></el-input>
                                    </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button class="button3" @click="dialogFormVisible = false">取 消</el-button>
                                    <el-button class="button2" @click="dialogFormVisible = false">确 定</el-button>
                                </div>
                                </el-dialog>
                                &nbsp;&nbsp;
                                <el-button class="button4"  @click="open2">删除</el-button>
                                &nbsp;&nbsp;
                        </div><!--table-2-1-->

                        <div class="tab-2-2">
                            <el-table
                                :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                class="table1"
                                row-style="30px"
                                cell-style="padding:0"
                                id="table21"
                                :data="temdata"
                                style="width: 100%"><!--表的名字-->
                                <!-- 选择框   -->
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column
                                    type="index"
                                    width="130"
                                    label="编号"
                                    :index="indexMethod">
                                </el-table-column>
                                <el-table-column
                                    prop="temserver"
                                    label="服务器名"
                                    width="250">
                                </el-table-column>
                                <el-table-column
                                    prop="IP"
                                    label="服务器IP">
                                </el-table-column>
                            </el-table>
                        </div><!--table-2-2-->
                        <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
                           <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
                           <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                              <el-option label="10" value="10"></el-option>
                              <el-option label="20" value="20"></el-option>
                            </el-select>
                        <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span>
                         </div>

                        <div style="float:right;margin-top:10px;margin-right: 30px;">
                          <!-- *********************************分页按钮 -->
                           <el-pagination
                              background="#E95513"
                              prev-text="上一页"
                              next-text="下一页"
                              jumper-text="转到"
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="currentPage4"
                              :page-sizes="[10, 20]"
                              :page-size="100"
                          layout="slot,prev, pager, next" :total="50">
                          <!-- <slot name="as">dddd</slot> -->
                        </el-pagination>
                      </div>
                    </div>
                </el-tab-pane>

                <!-- 原始日志查询 -->
                <el-tab-pane label="网络拓扑"><!--写了部分代码，但是一直没有出现树形图-->          
                </el-tab-pane>
            </el-tabs>
      </div> <!--main-1-->

 </el-main>
  <!-- footer -->

</el-container>

</template>
<style >
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
    color:#76EE00;
    ;}

       /* *********************************************mian start*****************/
    /* 绿色字体 */
   
    .p-2{
        position: relative;
      
        font-weight: bold;
        font-size: 18pt;
        left: 20px;
        font-family: '微软雅黑';
        margin-bottom: 20px;
    }
    /* 白色条框 */
    .header-2{
   
        height:60px;
        width:100%;
        color:black;
        font-weight: 500;
        overflow: hidden;
    }
       
       .el-pagination .el-pager .active{
         background-color: #E95513 !important;
       }
       .el-pagination.is-background .el-pager li:not(.disabled):hover{
         color:#E95513 !important;
       }
       .p-page{
         padding-top: 15px;
         color:#666666;
         float:left;
         font-size: 12pt;
       }

       .el-pagination .el-select .el-input .el-input__inner{
         float:left;
       }
       /*分页*/
       .el-pagination .el-select .el-input {
         position: absolute;
         left: -640px;
         top:-15px;
         font-size: 12px;
         border-radius: 0px;
       }
       .el-pagination__sizes .el-input .el-input__inner:hover {
         border-color: #fff;
       }
  /*tabs的颜色 */
  .el-tabs__item.is-active{
      color: #666666 !important;
  }
  .el-tabs__item:hover{
      color: #E95513 !important;
  }
  /*导航栏背景颜色*/
       .el-tabs__nav-wrap.is-left {
         background: #F2F2F2;
       }
       .el-tabs__nav-wrap::after {
         background: #F2F2F2;
       }
       .el-tabs--card>.el-tabs__header .el-tabs__nav {
         background: #F2F2F2;
       }
    /*导航栏间隔*/
       .el-tabs__header {
         padding: 0;
         position: relative;
         margin: 0 0 10px;
       }
       .el-tabs__item:active {
         color: #E95513 !important;
         background: #fff;
       }
       .el-tabs__item:focus, .el-tabs__item:active {
         color: #E95513 !important;
         outline: 0;
         background: #fff;
       }
       .el-tabs--left .el-tabs__active-bar.is-left, .el-tabs--left .el-tabs__nav-wrap.is-left::after {
         background: #fff;
       }
  /*标签页背景色*/
  .el-tabs__item {
    font-size: 12px;
    font-weight: normal;
    color: #666666;
    background: #F2F2F2;
  }
  .el-tabs__item:focus:active {
    outline: 0;
    /* font-size: 12px; */
    /* border-bottom-color: #E95513; */
    color: #E95513 !important;
    background: #fff;
    border-bottom: 2px solid #E95513;
  }
  /*悬停时的背景色*/
  .el-tabs__item:hover{
    color: #E95513 !important;
  }
  /*导航栏激活时下面有颜色的border*/
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-bottom: 2px solid #E95513;
  }
  /*导航栏样式*/
  .el-tabs__item.is-left.is-active{
    color: #E95513 !important;
  }

       /*导航栏样式*/
       .el-table th>.cell {
         background: #e95513;
         color: #fff;
         /*border-right: 1px solid #fff;*/
         font-size: 12px;

         vertical-align: center;
         padding-left: 20px;
         margin-bottom: 0px;
         /* line-height: initial; */
       }
       .el-table th{
         height: 29px;
         border-right: 1px solid #fff;
       }

   .el-pagination .el-select .el-input .el-input__inner{
    float:left;
  }
  /*分页*/
  .el-pagination .el-select .el-input {
    position: absolute;
    left: -640px;
    top:-15px;
    font-size: 12px;
    border-radius: 0px;
  }   
  .el-pagination__jump{
    position: relative;
    left: -1140px;
    top:9px;
  }
  el-pagination__sizes .el-input .el-input__inner:hover {
    border-color: #fff;
  }
  .el-select-dropdown__item.selected {
    color: #fff;
    font-weight: 700;
    background: #e95513;
  }
  .el-select .el-input .el-select__caret{
    font-size: 12px;
  }
  .el-select.el-input__icon{
    line-height: 30px;
  }
  .el-input{
    font-size: 12px;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover:active{
    background: #e95513;
  }
  /*.el-select.el-input*/ .el-input--suffix{
    height: 30px;
  }
  .el-select .el-input.is-focus .el-input__inner{
    border-color:#c0c4cc;
  }
  .el-select.el-input.el-input__inner {
    color: #606266;
    height: 30px;
    line-height: 30px;
  }
  .el-select.el-input__icon{
    line-height: 30px;
    height: 30px;
  }
  .el-select>.el-input--suffix{
    line-height: 30px;
    height: 30px;
  }
  .el-input__suffix{
    height: 30px;
  }
  .el-input__inner{
    line-height: 30px;
    height: 30px;
  }

  .el-icon-arrow-up{
    line-height: 10px;
    height: 30px;
  }
  .is-reverse{
    line-height: 30px;
    height: 30px;
  }
  html { 
            overflow-y:hidden; 
            overflow-x:hidden;
            overflow: hidden;
           
        }
/********************************** 查看详情的颜色 */
    .el-button--text{

        color:#E95513;
    }
    .el-button--text.is-active{
        color: #E95513;
    }
    .el-button--text:hover{
        color: #E95513;
    }
    .tab-1-1{
        margin-left: 30px;
        margin-top:15px;
        margin-bottom: 10px;
    }
    .tab-2-1{
       margin-left: 30px;
       margin-top:15px;
       margin-bottom: 10px;
    }
       .el-table__body, .el-table__footer, .el-table__header{
         font-size: 12px;
       }
    .table-p1{
        font-family: 'Microsoft YaHei';
        font-size: 12pt;
        color:#BFBFBF;
    }
    /* ******原始日志查询-左侧菜单栏 start*/
    .tab-aside{
        height: 100%;
        overflow: hidden;
        
    }
    /*********************确定 跳转 按钮样式*********************/
    .button2{
        background-color: #E95513 !important;
        color: #ffff !important;
        width: 60px;
        height: 30px;
        border-radius: 0px;
        vertical-align: center;
        padding: 2px;
        font-size: 12px;
        margin-left:10px ;
    }
    /*********************取消按钮样式*********************/
    .button3{
         background-color: #ffffff !important;
         color: black !important;
         width: 60px;
         height: 30px;
         border-radius: 0px;
         vertical-align: center;
         padding: 2px;
         font-size: 12px;
         margin-left:10px ;
    }
    /*********************普通按钮样式*********************/
    .button4{
         background-color: #E95513 !important;
         color: #ffff !important;
         width: 80px;
         height: 30px;
         border-radius: 0px;
         vertical-align: center;
         padding: 2px;
         font-size: 12px;
         margin-left:10px ;
    } 
    
</style>
<script>
export default {

  data() {
    return {
        chartData: [
          {
            IP: '168.196.2.1',
            user: 'win789',
            temserver: 'server1'
          },
          {
            IP: '168.196.2.1',
            user: 'win789',
            temserver: 'server2'
          },
          {
            IP: '168.196.2.1',
            user: 'win789',
            temserver: 'server1'
          },
          {
            IP: '168.196.2.1',
            user: 'win789',
            temserver: 'server2'
          },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      jumper:10,
      pagesize:10,
      dialogFormVisible: false,
      dialogText1: false,
      dialogText: false,
      dialog: false,
      form: {
        name: '',
        IP: '',
        temserver: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      // 表的名字
      temdata: [

        {
          IP: '168.196.2.1',
          template: '123',
          user: 'win789',
          temserver: 'server1'
        },
        {
          IP: '168.196.2.1',
          template: '123',
          user: 'win789',
          temserver: 'server2'
        },
        {
          IP: '168.196.2.1',
          template: '123',
          user: 'win789',
          temserver: 'server3'
        },
        {
          IP: '168.196.2.1',
          template: '123',
          user: 'win789',
          temserver: 'server4'
        },
        {
          domainIP: '168.196.2.1',
          domainID: '123',
          user: 'win789',

        },
      ]

    }
  },

  mounted() {
    this.initChart()
  },

  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },



  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    open2() {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    initChart() {
      this.chart = echarts.init(document.getElementById('orgManagement'))
      this.chart.on('contextmenu', params => {
        console.log(params)
        if (params.componentType === 'series') {
          this.selectedOrg = params.data
          this.popoverPanelShow = true
        } else {
          return
        }
      }),
        this.Chart.setOption({
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              data: [this.chartData],
              top: '1%',
              bottom: '11%',
              layout: 'radial',
              symbol: 'emptyCircle',
              symbolSize: 7,
              initialTreeDepth: 3,
              animationDurationUpdate: 750
            }
          ]
        })
    },
    hidePopoverPanel(){
      this.popoverPanelShow = false;
    }

  }

}
</script>
