<template>
<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
      <!-- main -->
  <el-main class="el-main-2" > 
      <div class="header-2">
              <p class="p-2"> <img src="../assets/applyhoney.png"><span class="wow">应用蜜罐</span>
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

                <el-tab-pane label="应用蜜罐信息">

                    <div class="tab-1">
                        <div class="tab-1-1">
                        <el-form :inline="true"
                                   :model="temdata"
                                   
                                   class="demo-form-inline"
                                   :label-position="right"
                                   style="width: 100%"
                          >
                            <el-form-item label="IP地址:">
                              <el-input v-model="temdata.IP" style="width:187px"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button style="background:#E95513;color:#ffffff;"  @click="onSubmit">查询主机</el-button>
                            </el-form-item>
                          </el-form>
                        </div>
                        <div class="tab-1-2">
                        <el-table
                            :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                class="table1"
                                row-style="30px"
                                cell-style="padding:0"
                                id="table11"
                                :data="temdata"
                                style="width: 100%">
                                    <el-table-column
                                        prop="number"
                                        label="序号"
                                        width="150">
                                    </el-table-column>
                                    <el-table-column
                                        prop="IP"
                                        label="IP地址"
                                        width="350">
                                    </el-table-column>
                                    <el-table-column
                                        prop="type"
                                        label="主机类型"
                                        width="250">
                                    </el-table-column>
                                    <el-table-column
                                        prop="pan"
                                        label="硬盘"
                                        width="220">
                                    </el-table-column>
                                    <el-table-column
                                        prop="CPU"
                                        label="CPU"
                                        width="250">
                                    </el-table-column>
                                    <el-table-column
                                        prop="load"
                                        label="内存"
                                        width="250">
                                    </el-table-column>
                                    <el-table-column
                                        prop="operater"
                                        label="操作"
                                        width="250">
                                    </el-table-column>
                                </el-table>
                                      <template slot-scope="scope">
                                        <el-button
                                          type="text"
                                          size="mini"
                                          @click="dialog = true">查看详情 蜜罐管理</el-button>
                                        <el-dialog title="查看更多" :visible.sync="dialog">
                                          <el-table
                                            :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                            class="table1"
                                            id="table11"
                                            :data="temdata"
                                            style="width: 100%"><!--表的名字-->
                                            <!-- 选择框   -->

                                          </el-table>
                                          <div slot="footer" class="dialog-footer">
                                            <el-button @click="dialog = false">取 消</el-button>
                                            <el-button type="danger" @click="dialog = false">确 定</el-button>
                                          </div>
                                        </el-dialog>
                                       
                                
                                      </template>
                                
                                <template slot-scope="scope">
                                    <el-button
                                    type="text"
                                    size="mini"
                                    style="background-color: #E95513"
                                    @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                                </template>
                           </div>
                        </div><!--table-1-2-->
                  <div class="p-page">显示第1到第{{1}}条记录，总共{{10}}条记录</div>
            <div style="float:right;margin-top:10px;">
                <!-- <p class="p-page">显示第1到第{{1}}条记录  每页显示</p> -->
                <!-- *********************************分页按钮 -->
                <el-pagination 
                background
                prev-text="上一页"
                next-text="下一页"
                @size-change="handleSizeChange"
                 @current-change="handleCurrentChange" 
                 :current-page="currentPage4" 
                 :page-sizes="[10, 20, 30, 40]" 
                 :page-size="100" 
                 layout=" sizes, prev, pager, next, jumper" :total="50">
                </el-pagination>
            </div>


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
    .wow{
        position: relative;
    bottom:10px;

    }
    .p-page{
    padding-top: 15px;
    color:#666666;
    float:left;
    font-size: 12pt;}
    .p-2{
        
        position: relative;
        top: 10px;
        font-size: 18pt;
      font-weight: bold;
        left: 20px;
        font-family: '微软雅黑';
        margin: 0;
    }       
    /* 白色条框 */
    .header-2{
        margin: 0;
        height:60px;
        width:100%;
        color:black;
        font-weight: 500;
    }
    .el-main-2{
        padding: 2px;
    } 
      /* .el-table .success-row {
         background: #ffffff;
       }*/
    .el-main-2{
        padding: 2px;
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

 
    /* 翻页背景色 */
    .el-pagination .el-pager .active{
        background-color: #E95513 !important;
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover{
        color:#E95513 !important;
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
        page: '16',
        Page1: 5,
        Page2: 5,
        Page3: 5,
        Page4: 4,
        dialogFormVisible: false,
        dialogText: false,
        dialogTable: false,
        form: {
          name: '',
          IP:'',
          temserver:'',
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
          temdata:[
              
              {
            number: '1',
            IP: '192.168.1.13',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '2',
            IP: '192.168.1.15',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '3',
            IP: '192.168.13.110',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '4',
            IP: '192.168.13.112',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '5',
            IP: '192.168.13.114',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '6',
            IP: '192.168.13.116',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",
          }, {
            number: '7',
            IP: '192.168.13.118',
            type: '复合蜜罐',
            pan:"100G",
            CPU:"1cpu",
            load:"5g",
            operater:"查看详情 蜜罐管理",},
          ]
          
    
        }
    },
    methods: {
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
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>
