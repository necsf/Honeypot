<template>
<el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
      <!-- main -->
  <el-main class="el-main-2" > 
      <div class="header-2">
              <p class="p-2"> <i class="el-icon-menu"></i>蜜罐构建
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
                            <el-button type="danger" @click="dialogFormVisible = true">添加模板</el-button>
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
                                <el-button type="danger" @click="dialogFormVisible = false">确 定</el-button>
                            </div>
                            </el-dialog>
                            &nbsp;&nbsp;
                            <el-button type="danger" @click="dialogText = true">部署网络</el-button><!--找不到别的合法信号量了，只能用dialogText了-->
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
                                <el-button type="danger" @click="dialogText = false">确 定</el-button>
                            </div>
                            </el-dialog>
                            &nbsp;&nbsp;
                            <el-button type="danger" @click="open2">删除</el-button>
                        </div><!--table-1-1-->
                        <div class="tab-1-2">
                            <el-table
                                :header-cell-style="{background:'#EE6363',padding:0,color:'#FFFFFF'}"
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
                                    @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                                </template>
                                </el-table-column>
                            </el-table>
                        </div><!--table-1-2-->
                        <p class="table-p1">显示第1条到第{{page}}条记录，总共{{page}}记录</p>
                    </div><!--table-1-->
                    <div class="block"><!--页码-->
                        <span class="demonstration"></span>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="Page"
                            :page-sizes="[10, 20, 30, 40]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="40">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <!-- 服务器配置 -->
                <el-tab-pane label="服务器配置">
                    <div class="tab-2">
                        <div class="tab-2-1">
                                <el-button type="danger" @click="dialogFormVisible = true">添加服务器</el-button>
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
                                    <el-button type="danger" @click="dialogFormVisible = false">确 定</el-button>
                                </div>
                                </el-dialog>
                                &nbsp;&nbsp;
                                <el-button type="danger" @click="open2">删除</el-button>
                                &nbsp;&nbsp;
                        </div><!--table-2-1-->
                        <div class="tab-2-2">
                            <el-table
                                :header-cell-style="{background:'#EE6363',padding:0,color:'#FFFFFF'}"
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
                        <p class="table-p1">显示第1条到第{{page}}条记录，总共{{page}}记录</p>
                    </div><!--table-1-->
                    <div class="block"><!--页码-->
                        <span class="demonstration"></span>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="Page"
                            :page-sizes="[10, 20, 30, 40]"
                            :page-size="10"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="40">
                        </el-pagination>
                    </div>
                </el-tab-pane>


                <!-- 原始日志查询 -->
                <el-tab-pane label="网络拓扑">
                    
                        
                </el-tab-pane>
            </el-tabs>
      </div> <!--main-1-->

    
 </el-main>
  <!-- footer -->
</el-container>
</template>
<style scoped>
       /* *********************************************mian start*****************/
    /* 绿色字体 */
    .p-2{
        position: relative;
        top: 10px;
        font-size: 18pt;
        left: 20px;
        font-family: '微软雅黑';
        margin: 0;
    }       
    /* 白色条框 */
    .header-2{
        margin: 0;
        height:45px;
        width:100%;
        color:#B3EE3A;
        font-weight: 500;
    }                      
    /* .el-main-2{
        padding: 2px;
    } */
    
    .el-main-2{
        padding: 2px;
    }
        /* ************************************tabs的颜色 */
    .el-tabs__item.is-active{
        color: #F56C6C;
    }
    .el-tabs__item:hover{
        color: #F56C6C;
    }
    /********************************** 查看详情的颜色 */
    .el-button--text{

        color:#F56C6C;
    }
    .el-button--text.is-active{
        color: #F56C6C;
    }
    .el-button--text:hover{
        color: #F56C6C;
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
    /* 菜单点击颜色 */
    .el-menu-item.is-active{
         color: #F56C6C;
    }
    .el-menu-item:hover{
        color: #F56C6C;
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
        page: '4',
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
                  IP:'168.196.2.1',
                  template:'123',
                  user:'win789',
                  temserver:'server1'
              },
              {
                  IP:'168.196.2.1',
                  template:'123',
                  user:'win789',
                  temserver:'server2'
              },
              {
                  IP:'168.196.2.1',
                  template:'123',
                  user:'win789',
                  temserver:'server3'
              },
              {
                  IP:'168.196.2.1',
                  template:'123',
                  user:'win789',
                  temserver:'server4'
              },
              {
                  domainIP:'168.196.2.1',
                  domainID:'123',
                  user:'win789',

              },
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
