<template>
  <el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
    <!-- main -->
    <el-main class="el-main-2" >
      <div class="header-2">
        <p class="p-2"> <i class="iconfont">&#xe606;</i>平台管理
        </p>
      </div>
      <hr style="margin-bottom:0;"/>
      <div class="main-1">
        <el-tabs
          class="tabs-1"
          :tab-position="top"
          type="card"
          @tab-click="handleClick">
          <!-- 用户管理 -->
          <el-tab-pane label="用户管理">
            <div class="tab-1">
              <div class="tab-1-1">
                <el-row>
                  <el-input v-model="input" class="inputType1"  placeholder="请输入查询信息" style="width: 200px;margin-right:0px"></el-input>
                  <el-button   class="button1" >查询</el-button>
                  <el-button   class="button1" @click="dialogFormVisible = true" >添加</el-button>
                  <el-button   class="button1" @click="dialogFormVisible1 = true">修改</el-button>
                  <el-button   class="button1"  @click="open2">删除</el-button>
                </el-row>

              </div><!--table-1-1-->
              <div class="tab-1-2" style="margin-left: 30px;
    margin-right: 30px;">
                <el-table
                  :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                  class="table1"
                  row-style="30px"
                  cell-style="padding:0"
                  id="table11"
                  border="true"
                  :data="temdata"
                  style="width: 100%">
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
                  <el-table-column
                    prop="number"
                    label="编号"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="user"
                    label="用户"
                    width="350">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="真实姓名"
                    width="220">
                  </el-table-column>
                  <el-table-column
                    prop="role"
                    label="角色"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    prop="department"
                    label="部门"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    prop="operater"
                    label="解锁/重置密码"
                    width="490">
                  </el-table-column>
                </el-table>
                <el-dialog title="添加用户" :visible.sync="dialogFormVisible"  >
                  <el-form :model="form">
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                      <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="formLabelWidth">
                      <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" :label-width="formLabelWidth">
                      <el-input type="password" v-model="form.password1" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用户真实姓名" :label-width="formLabelWidth">
                      <el-input v-model="form.truename" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="角色" :label-width="formLabelWidth">
                      <el-select v-model="form.role" placeholder="">
                        <el-option label="普通用户" value="shanghai"></el-option>
                        <el-option label="安全审计管理员" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="部门" :label-width="formLabelWidth">
                      <el-select v-model="form.department" placeholder="">
                        <el-option label="测试部" value="shanghai"></el-option>
                        <el-option label="安全处" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                  </div>
                </el-dialog>
                <el-dialog title="修改信息" :visible.sync="dialogFormVisible1"  >
                  <el-form :model="form1">
                    <el-form-item label="原始密码" :label-width="formLabelWidth">
                      <el-input type="password" v-model="form1.password0" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" :label-width="formLabelWidth">
                      <el-input type="password" v-model="form1.newpassword" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" :label-width="formLabelWidth">
                      <el-input type="password" v-model="form1.newpassword1" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用户真实姓名" :label-width="formLabelWidth">
                      <el-input v-model="form1.truename" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" :label-width="formLabelWidth">
                      <el-select v-model="form1.department" placeholder="">
                        <el-option label="测试部" value="shanghai"></el-option>
                        <el-option label="安全处" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                  </div>
                </el-dialog>
              </div><!--table-1-2-->
            </div><!--table-1-->
            <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
              <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
              <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                <el-option label="10" value="10"></el-option>
                <el-option label="20" value="20"></el-option>

              </el-select>
              <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span></div>

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

          <!-- 配置管理 -->
          <el-tab-pane label="配置管理">
            <div class="tab-2">
              <div class="tab-2-1">
                <el-tabs tab-position="left" style="height: 500px;width: 100%">

                  <el-tab-pane label="  ＞  部门管理" >
                    <el-main style="width: 100%" >
                      <div  id="main1">
                        <el-row>
                          <el-input v-model="input" class="inputType1" placeholder="请输入查询信息" style="width: 200px"></el-input>
                          <el-button  class="button1" >查询</el-button>
                          <el-button  class="button1" @click="dialogFormVisible2_0 = true">添加</el-button>
                          <el-button  class="button1" @click="dialogFormVisible2_1 = true">修改</el-button>
                          <el-button  class="button1"  @click="open2_">删除</el-button>
                        </el-row>
                        <el-container style="height:100%;" direction="vertrcal">
                          <!-- header -->
                          <!-- main -->
                          <el-main class="el-main-2" >
                            <div style="
    ">
                              <el-table
                                :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                class="table1"
                                row-style="30px"
                                cell-style="padding:0"
                                id="table12"
                                border="true"
                                :data="temdata2"
                                style="width: 100%">
                                <el-table-column
                                  type="selection"
                                  width="55">
                                </el-table-column>
                                <el-table-column
                                  prop="number"
                                  label="编号"
                                  width="250">
                                </el-table-column>

                                <el-table-column
                                  prop="department"
                                  label="部门"
                                  width="460">
                                </el-table-column>
                                <el-table-column
                                  prop="departmentman"
                                  label="部门负责人"
                                  width="768">
                                </el-table-column>
                              </el-table>
                            </div>
                            <el-dialog title="添加部门" :visible.sync="dialogFormVisible2_0"  >
                              <el-form :model="form2">
                                <el-form-item label="部门名称" :label-width="formLabelWidth">
                                  <el-input v-model="form2.departmentName" placeholder=""></el-input>
                                </el-form-item>
                                <el-form-item label="部门负责人" :label-width="formLabelWidth">
                                  <el-input v-model="form2.departmentman" placeholder=""></el-input>
                                </el-form-item>
                              </el-form>
                              <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible2_0 = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible2_0 = false">确 定</el-button>
                              </div>
                            </el-dialog>


                            <el-dialog title="添加部门" :visible.sync="dialogFormVisible2_1"  >
                              <el-form :model="form2_1">

                                <el-form-item label="部门" :label-width="formLabelWidth">
                                  <el-select v-model="form2_1.department" placeholder="">
                                    <el-option label="测试部" value="shanghai"></el-option>
                                    <el-option label="安全处" value="beijing"></el-option>
                                  </el-select>
                                </el-form-item>
                                <el-form-item label="部门负责人" :label-width="formLabelWidth">
                                  <el-input v-model="form2_1.departmentman" placeholder=""></el-input>
                                </el-form-item>
                              </el-form>
                              <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible2_1 = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible12_1 = false">确 定</el-button>
                              </div>
                            </el-dialog>
                          </el-main>
                        </el-container>
                      </div>
                      <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
                        <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
                        <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                          <el-option label="10" value="10"></el-option>
                          <el-option label="20" value="20"></el-option>

                        </el-select>
                        <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span></div>

                      <div style="float:right;margin-top:10px;">

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
                    </el-main>
                  </el-tab-pane>
                  <el-tab-pane label="＞  安全配置"> <div id="main2">

                    <i class="el-icon-circle-plus-outline" style="margin-bottom: 5px"></i><span style="color: #909399;">安全配置</span>
                    <table class="td-1">
                      <tr >
                        <td >用户密码最小长度(位)</td>
                        <td ><el-input-number v-model="num1" size="mini" controls-position="right" @change="handleChange" :min="1" :max="100" style="width: 250px"></el-input-number></td>
                      </tr>
                      <tr>
                        <td>登录错误最大尝试错误(次)</td>
                        <td><el-input-number v-model="num2" size="mini" controls-position="right" @change="handleChange" :min="1" :max="100" style="width: 250px"></el-input-number></td>
                      </tr>
                      <tr>
                        <td>密码失效最小周期(天)</td>
                        <td><el-input-number v-model="num3" size="mini" controls-position="right" @change="handleChange" :min="1" :max="100" style="width: 250px"></el-input-number></td>
                      </tr>
                      <tr>
                        <td>用户被冻结最小时间(分钟)</td>
                        <td><el-input-number v-model="num4" size="mini" controls-position="right" @change="handleChange" :min="1" :max="100" style="width: 250px"></el-input-number></td>
                      </tr>

                    </table>
                    <el-button class="button1"  style="margin-left: 39%;margin-top: 15px">保存</el-button>
                  </div>
                  </el-tab-pane>

                </el-tabs>
                <el-row class="tac">
                </el-row>
              </div><!--table-2-2-->

            </div> <!--table-1-->


          </el-tab-pane>
          <!--系统日志-->
          <el-tab-pane label="系统日志">
            <div class="tab-1">
              <div class="tab-1-1">
                <el-row>
                  <el-input v-model="input" class="inputType1" placeholder="请输入查询信息" style="width: 200px"></el-input>
                  <el-button  class="button1" >查询</el-button>
                  <el-button  class="button1"  @click="open3">删除</el-button>
                </el-row>
                <el-container style="height:100%;" direction="vertrcal">
                  <!-- header -->
                  <!-- main -->
                  <el-main class="el-main-2" >
                    <div style="margin-left: 30px;
    margin-right: 30px;">
                      <el-table
                        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                        class="table1"
                        border="true"
                        row-style="30px"
                        cell-style="padding:0"
                        id="table3"
                        :data="temdata3"
                        style="width: 100%">
                        <el-table-column
                          type="selection"
                          width="55">
                        </el-table-column>
                        <el-table-column
                          prop="number"
                          label="编号"
                          width="150">
                        </el-table-column>
                        <el-table-column
                          prop="time"
                          label="操作时间"
                          width="350">
                        </el-table-column>
                        <el-table-column
                          prop="operator"
                          label="操作人"
                          width="220">
                        </el-table-column>
                        <el-table-column
                          prop="operationName"
                          label="操作名称"
                          width="305">
                        </el-table-column>
                        <el-table-column
                          prop="message"
                          label="备注"
                          width="650">
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-main>
                </el-container>
              </div><!--table-1-2-->
            </div><!--table-1-->
            <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
              <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
              <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                <el-option label="10" value="10"></el-option>
                <el-option label="20" value="20"></el-option>

              </el-select>
              <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span></div>
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
          <!-- 审计日志 -->
          <el-tab-pane label="审计日志">
            <div class="tab-1">
              <div class="tab-1-1">
                <el-row>
                  <el-input v-model="input"   class="inputType1" placeholder="请输入查询信息" style="width: 200px"></el-input>
                  <el-button  class="button1" >查询</el-button>
                  <el-button  class="button1"  @click="open4">删除</el-button>
                </el-row>
                <el-container style="height:100%;" direction="vertrcal">
                  <!-- header -->
                  <!-- main -->
                  <el-main class="el-main-2" >
                    <div style="margin-left: 30px;
    margin-right: 30px;">
                      <el-table
                        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                        class="table1"
                        border="true"
                        row-style="30px"
                        cell-style="padding:0"
                        id="table4"
                        :data="temdata4"
                        style="width: 100%">
                        <el-table-column
                          type="selection"
                          width="55">
                        </el-table-column>
                        <el-table-column
                          prop="number"
                          label="编号"
                          width="100">
                        </el-table-column>
                        <el-table-column
                          prop="time"
                          label="操作时间"
                          width="380">
                        </el-table-column>
                        <el-table-column
                          prop="operator"
                          label="操作人"
                          width="150">
                        </el-table-column>
                        <el-table-column
                          prop="role"
                          label="操作人身份"
                          width="280">
                        </el-table-column>
                        <el-table-column
                          prop="operationName"
                          label="操作名称"
                          width="250">
                        </el-table-column>
                        <el-table-column
                          prop="message"
                          label="备注"
                          width="522">
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-main>
                </el-container>
              </div>
            </div>

            <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第1到第{{1}}条记录，总共{{10}}条记录
              <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
              <el-select v-model="pagesize" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                <el-option label="10" value="10"></el-option>
                <el-option label="20" value="20"></el-option>

              </el-select>
              <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumper" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;">跳转</el-button></span></div>

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
        </el-tabs>
      </div> <!--main-1-->

    </el-main>
    <!-- footer -->

  </el-container>

</template>
<style >
<<<<<<< HEAD
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
    color:#5EBF18;
    ;}
  /* *********************************************mian start*****************/
  /* 绿色字体 */
  .wow{
    position: relative;
    bottom:15px;
  }

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
  .el-main-2{
    padding: 2px !important;
  }
  /**tabs的颜色 */
  .el-tabs__item.is-active{
    color: #666666 !important;
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
  .button1{
    width: 80px;
    height: 30px;
    font-size: 12.14px;
    line-height:6px;
    border-radius: 0px;
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
  /****************************************** main  end */
  .button1{
    background-color: #E95513 !important;
    color: #ffff !important;

  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #E95513 !important;
    border-color:#E95513 !important;
  }
  .el-button--primary {
    color: #fff;
    background-color: #E95513 !important;
    border-color:#E95513 !important;
  }
  .td-1 td{
    padding-left: 15px;
    color: #909399;
  }
  .el-tabs__active-bar {
    background-color:#eee;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-bottom: 2px solid #E95513;
  }
  .el-tabs--left .el-tabs__item.is-left, .el-tabs--left .el-tabs__item.is-left.is-active{
    text-align: left;
    width: 250px;
    height: 30px;
    line-height: 30px;
  }
  /*侧面导航栏布局*/
  .tab-2-1 {
    margin-left: 0px;
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
  /*导航栏样式*/
  .el-tabs__item.is-left.is-active{
    color: #E95513 !important;
  }
  /*输入框样式*/
  .inputType1 .el-input__inner{
    height: 30px;
    border-right: 0px;
    border-radius: 0px;
    margin-right: 0px;
  }
  .el-table th>.cell {
    background: #e95513;
    color: #fff;
    /*border-right: 1px solid #fff;*/
    font-weight: bold;
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
  .el-table__body, .el-table__footer, .el-table__header{
    font-weight: bold;
    font-size: 12px;
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
=======
  @import '../assets/css/honeycontrol.css';
>>>>>>> 4bc4e1e24a2b0f72a5f40f03dbfd1d70824dc76f
</style>
<script>
  export default {
    name: "honey-admin",
    data() {
      return {
        jumper:10,
        pagesize:10,
        temdata: [{
          number: '1',
          user: 'test1',
          name: 'test',
          role:"普通用户",
          department:"安全处",
          operater:"解锁/重置密码",
        },
          {
            number: '2',
            user: 'test',
            name: 'LiLei',
            role:"普通用户",
            department:"测试部",
            operater:"解锁/重置密码",
          },
          {
            number: '3',
            user: 'aaa',
            name: 'aaa',
            role:"安全审计管理员",
            department:"办公室",
            operater:"解锁/重置密码",
          }
        ],
        options: [{
          value: '选项1',
          label: '10'
        }, {
          value: '选项2',
          label: '20'
        }
        ],

        input: '',
        dialogFormVisible: false,
        form: {
          name: '',
          password: '',
          password1: '',
          truename: '',
          department:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        dialogFormVisible1: false,
        form1: {
          name: '',
          password0: '',
          newpassword:'',
          newpassword1: '',
          truename: '',
          department:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',


        //
        dialogFormVisible2_0: false,
        dialogFormVisible2_1: false,
        temdata2: [{
          number: '1',
          user: 'test1',
          name: 'test',
          role:"普通用户",
          department:"科技部",
          departmentman:"bbb",
        },
          {
            number: '2',
            user: 'test',
            name: 'LiLei',
            role:"普通用户",
            department:"督察部",
            departmentman:"李惟一",
          },
          {
            number: '3',
            user: 'aaa',
            name: 'aaa',
            role:"安全审计管理员",
            department:"测试部",
            departmentman:"Luffy",
          }
        ],
        form2: {
          department:'',
          departmentman:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        form2_1: {
          department:'',
          departmentman:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        //系统日志
        temdata3: [{
          number: '1',
          time: '2018-02-01 15:53:58',
          operator: 'super',
          role:"系统管理员",
          operationName:"删除部门",
          message:"被删除部门名称为test",
        },
          {
            number: '2',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            operationName:"修改部门负责人",
            message:"",
          },
          {
            number: '3',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"添加部门",
            message:"",
          },
          {
            number: '4',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"",
            message:"",
          },
          {
            number: '5',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"",
            message:"",
          },
          {
            number: '6',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"",
            message:"",
          },
          {
            number: '7',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"",
            message:"",
          },
          {
            number: '8',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"",
            message:"",
          },
          {
            number: '9',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"",
            message:"",
          },{
            number: '10',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"",
            message:"",
          },{
            number: '111',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"",
            message:"",
          },
        ],
        //审计日志数据表
        temdata4: [{
          number: '1',
          time: '2018-02-01 15:53:58',
          operator: 'super',
          role:"系统管理员",
          operationName:"用户登录",
          message:"被删除部门名称为test",
        },
          {
            number: '2',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },
          {
            number: '3',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },
          {
            number: '4',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },
          {
            number: '5',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },
          {
            number: '6',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },
          {
            number: '7',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },
          {
            number: '8',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"修改密码",
            message:"用户'super'信息被修改",
          },
          {
            number: '9',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },{
            number: '10',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },{
            number: '111',
            time: '2018-02-01 15:53:58',
            operator: 'super',
            role:"系统管理员",
            operationName:"用户登录",
            message:"",
          },
        ],
        num1: 8,
        num2: 5,
        num3: 7,
        num4: 20,

      };
    },
    methods: {
      // handleClick(tab, event) {
      //    console.log(tab, event);
      // },
      open2() {
        this.$confirm('您确定要删除这条用户信息吗', '警告', {
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
      open2_() {
        this.$confirm('您确定要删除这条部门信息吗', '警告', {
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
      open3() {
        this.$confirm('您确定要删除这条系统日志信息吗', '警告', {
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
      open4() {
        this.$confirm('您确定要删除这条审计日志信息吗', '警告', {
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




    }
  }
</script>
