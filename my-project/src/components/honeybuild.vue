<template>
<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
      <!-- main -->
  <el-main class="el-main-2" > 
      <div class="header-2">
              <p class="p-2"> <img src="../assets/buildhoney.png" /><span class="wow">蜜罐构建</span>
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
                            <el-button  type="danger" @click="dialogFormVisible = true" style="background-color:#E95513">添加模板</el-button>
                            <el-dialog title="添加模板" :visible.sync="dialogFormVisible">
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
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="danger" @click="dialogFormVisible = false" style="background-color:#E95513">确 定</el-button>
                            </div>
                            </el-dialog>
                            &nbsp;&nbsp;
                            <el-button type="danger" @click="dialogText = true" style="background-color:#E95513">部署网络</el-button><!--找不到别的合法信号量了，只能用dialogText了-->
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
                                <el-button @click="dialogText = false">取 消</el-button>
                                <el-button type="danger" @click="dialogText = false" style="background-color:#E95513">确 定</el-button>
                            </div>
                            </el-dialog>
                            &nbsp;&nbsp;
                            <el-button type="danger" @click="open2" style="background-color:#E95513">删除</el-button>
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
                                      <el-button @click="dialog = false">取 消</el-button>
                                      <el-button type="danger" @click="dialog = false">确 定</el-button>
                                    </div>
                                  </el-dialog>
                                </template>

                                </el-table-column>
                            </el-table>
                        </div><!--table-1-2-->
                    </div><!--table-1-->
                  <div class="p-page">显示第1到第{{1}}条记录，总共{{10}}条记录</div>

                  <div style="float:right;margin-top:10px;">

                    <!-- *********************************分页按钮 -->
                    <el-pagination
                      background="#E95513"
                      prev-text="上一页"
                      next-text="下一页"
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage4"
                      :page-sizes="[10, 20]"
                      :page-size="100"
                      layout="slot,sizes ,prev, pager, next,jumper" :total="50">
                      <!-- <slot name="as">dddd</slot> -->
                    </el-pagination>
                  </div>
                </el-tab-pane>

                <!-- 服务器配置 -->
                <el-tab-pane label="服务器配置">
                    <div class="tab-2">
                        <div class="tab-2-1">
                                <el-button type="danger" @click="dialogFormVisible = true" style="background-color:#E95513">添加服务器</el-button>
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
                                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                                    <el-button type="danger" @click="dialogFormVisible = false" style="background-color:#E95513">确 定</el-button>
                                </div>
                                </el-dialog>
                                &nbsp;&nbsp;
                                <el-button type="danger" @click="open2" style="background-color:#E95513">删除</el-button>
                                &nbsp;&nbsp;
                        </div><!--table-2-1-->

                        <div class="tab-2-2">
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
                      <div class="p-page">显示第1到第{{1}}条记录，总共{{10}}条记录</div>

                      <div style="float:right;margin-top:10px;">

                        <!-- *********************************分页按钮 -->
                        <el-pagination
                          background="#E95513"
                          prev-text="上一页"
                          next-text="下一页"
                          @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                          :current-page="currentPage4"
                          :page-sizes="[10, 20]"
                          :page-size="100"
                          layout="slot,sizes ,prev, pager, next,jumper" :total="50">
                          <!-- <slot name="as">dddd</slot> -->
                        </el-pagination>
                      </div>
                    </div> <!--table-1-->


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
       /* *********************************************mian start*****************/
    /* 绿色字体 */
    .wow{position: relative;
        bottom:10px;

    }
    .p-2{
        position: relative;
        top: 10px;
   
        font-size: 18pt;
        left: 20px;
        font-family: '微软雅黑';
        margin-bottom: 20px;
    }
    /* 白色条框 */
    .header-2{
        margin: 0;
        height:60px;
        width:100%;
        color:black;
        font-weight: 500;
    
        /*overflow: hidden;*/
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
    /* .el-main-2{
        padding: 2px;
    } */
    
    .el-main-2{
        padding: 2px !important;
    }
        /* ************************************tabs的颜色 */
    .el-tabs__item.is-active{
        color: #E95513 !important;
    }
    .el-tabs__item:hover{
        color: #E95513 !important;
    }
    /********************************** 查看详情的颜色 */
    .el-button--text{

        color:#E95513 !important;
    }
    .el-button--text.is-active{
        color: #E95513 !important ;
    }
    .el-button--text:hover{
        color: #E95513 !important;
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

    .table-p1{
        font-family: 'Microsoft YaHei';
        font-size: 12pt;
        color:#BFBFBF;
    }
    /* *********table 的行边框 */
    /* .table1 td{
        padding: 0;
        height: 30px;
    } */
    /* ******原始日志查询-左侧菜单栏 start*/
    .tab-aside{
        height: 100%;
        overflow: hidden;
        
    }
    /* .tab-main{
        background-color: #F56C6C;
    } */
    /****************************************** main  end */
    
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
      dialogFormVisible: false,
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
