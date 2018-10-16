<template>
  <el-container style="height:100%;" direction="vertrcal">
    <!-- header -->
    <!-- main -->
    <el-main class="el-main-2" >
      <div class="header-2">
        <p class="p-2" style="font-size:18pt;position: relative;top:10px;left:17px;font-weight: normal"> <i class="iconfont" style="">&#xe606;</i>平台管理
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
                  <el-input v-model="searchUser" class="inputType1"  placeholder="请输入查询信息" style="width: 200px;margin-right:0px" clearable></el-input>
                  <el-button   class="button1"  @click="fuzzyQueryUser">查询</el-button>
                  <el-button   class="button1" @click="dialogFormVisible = true" >添加</el-button>
                  <el-button   class="button1" @click="updateUser">修改</el-button>
                  <el-button   class="button1"  @click="delUser">删除</el-button>
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
                  :data="userData.slice((currentPageUser-1)*pagesizeUser,currentPageUser*pagesizeUser)"
                  @selection-change="handleSelectionChangeUser"
                  style="width: 100%">
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
                  <el-table-column
                          type="index"
                          :index="(currentPageUser-1)*pagesizeUser+1"
                          label="编号"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    prop="username"
                    label="用户"
                    width="350">
                  </el-table-column>
                  <el-table-column
                    prop="realName"
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
                  >
                    <template slot-scope="scope">
                      <el-button
                              type="text"
                              size="mini"

                              @click="dialog = true">解锁/重置密码</el-button>
                      <el-dialog title="查看更多" :visible.sync="dialog">
                        <el-table
                                :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
                                class="table1"
                                id="table1"
                                :data="potdata"
                                style="width: 100%"><!--表的名字-->
                          <!-- 选择框   -->

                        </el-table>
                        <div slot="footer" class="dialog-footer">
                          <el-button class="button3" dialog = false>取 消</el-button>
                          <el-button class="button2" @click="dialog = false">确 定</el-button>
                        </div>
                      </el-dialog>


                    </template>
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
                        <el-option label="系统管理员" value=1></el-option>
                        <el-option label="安全审计管理员" value=2></el-option>
                        <el-option label="普通用户" value=3></el-option>
                        <el-option label="安全保密管理员" value=4></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="部门" :label-width="formLabelWidth">
                      <el-select v-model="form.department" placeholder="">
                        <el-option v-for="dept in deptData" :key='dept.id' :label="dept.department" :value="dept.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button class="button3" @click="dialogFormVisible = false">取 消</el-button>
                    <el-button class="button2" @click="addUser">确 定</el-button>
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
                        <el-option v-for="dept in deptData" :key='dept.id' :label="dept.department" :value="dept.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button class="button3" @click="cancelUpdateUser">取 消</el-button>
                    <el-button class="button2" @click="confirmUpdateUser">确 定</el-button>
                  </div>
                </el-dialog>
              </div><!--table-1-2-->
            </div><!--table-1-->
            <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第{{(currentPageUser-1)*pagesizeUser+1}}到第{{(currentPageUser*pagesizeUser < userData.length)?currentPageUser*pagesizeUser:userData.length}}
              条记录，总共{{userData.length}}条记录
              <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
              <el-select v-model="pagesizeUser" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                <el-option label="10" value="10"></el-option>
                <el-option label="20" value="20"></el-option>

              </el-select>
              <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input  v-model="jumperUser" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;" @click="handleCurrentChangeUser(jumperUser)">跳转</el-button></span></div>

            <div style="float:right;margin-top:10px;margin-right: 30px;">

              <!-- *********************************分页按钮 -->
              <el-pagination
                      background="#E95513"
                      prev-text="上一页"
                      next-text="下一页"
                      jumper-text="转到"
                      @size-change="handleSizeChangeUser"
                      @current-change="handleCurrentChangeUser"
                      :current-page="currentPageUser"
                      :page-sizes="[1, 2, 3]"
                      :page-size="pagesizeUser"
                      :total="userData.length"
                      layout="slot, prev, pager, next, total">
                <!-- <slot name="as">dddd</slot> -->
              </el-pagination>
            </div>
          </el-tab-pane>

          <!-- 配置管理 -->
          <el-tab-pane label="配置管理">
            <div class="tab-2">
              <div class="tab-2-1 left-nav">
                <el-tabs tab-position="left" style="height: 500px;width: 100%">

                  <el-tab-pane label="部门管理" >
                    <el-main style="width: 100%" >
                      <div  id="main1">
                        <el-row>
                          <el-input v-model="searchDept" class="inputType1" placeholder="请输入查询信息" style="width: 200px" clearable></el-input>
                          <el-button  class="button1" @click="fuzzyQueryDept">查询</el-button>
                          <el-button  class="button1" @click="dialogFormVisible2_0 = true">添加</el-button>
                          <el-button  class="button1" @click="dialogFormVisible2_1 = true">修改</el-button>
                          <el-button  class="button1" @click="delDept">删除</el-button>
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
                                :data="deptData.slice((currentPageDept-1)*pagesizeDept,currentPageDept*pagesizeDept)"
                                @selection-change="handleSelectionChangeDept"
                                style="width: 100%">
                                <el-table-column
                                  type="selection"
                                  width="59">
                                </el-table-column>
                                <el-table-column
                                        type="index"
                                        :index="(currentPageDept-1)*pagesizeDept+1"
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
                                  width="843">
                                </el-table-column>
                              </el-table>
                            </div>
                            <el-dialog title="添加部门" :visible.sync="dialogFormVisible2_0"  >
                              <el-form :model="form2">
                                <el-form-item label="部门名称" :label-width="formLabelWidth">
                                  <el-input v-model="form2.department" placeholder=""></el-input>
                                </el-form-item>
                                <el-form-item label="部门负责人" :label-width="formLabelWidth">
                                  <el-input v-model="form2.departmentman" placeholder=""></el-input>
                                </el-form-item>
                              </el-form>
                              <div slot="footer" class="dialog-footer">
                                <el-button class="button3" @click="dialogFormVisible2_0 = false">取 消</el-button>
                                <el-button class="button2" @click="addDept">确 定</el-button>
                              </div>
                            </el-dialog>


                            <el-dialog title="修改部门" :visible.sync="dialogFormVisible2_1"  >
                              <el-form :model="form2_1">
                                <!-- *************************************** -->
                                <!-- option所含的部门需要修改，不能写死，未完成 -->
                                <el-form-item label="部门" :label-width="formLabelWidth">
                                  <el-select v-model="form2_1.department" placeholder="">
                                    <el-option v-for="dept in deptData" :key='dept.department' :label="dept.department" :value="dept.department">
                                    </el-option>
                                  </el-select>
                                </el-form-item>
                                <el-form-item label="部门负责人" :label-width="formLabelWidth">
                                  <el-input v-model="form2_1.departmentman" placeholder=""></el-input>
                                </el-form-item>
                              </el-form>
                              <div slot="footer" class="dialog-footer">
                                <el-button class="button3" @click="dialogFormVisible2_1 = false">取 消</el-button>
                                <el-button class="button2" @click="updateDept">确 定</el-button>
                              </div>
                            </el-dialog>
                          </el-main>
                        </el-container>
                      </div>
                      <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第{{(currentPageDept-1)*pagesizeDept+1}}
                        到第{{(currentPageDept*pagesizeDept < deptData.length)?currentPageDept*pagesizeDept:deptData.length}}条记录，
                        总共{{deptData.length}}条记录
                        <span style="position: relative;left: 33px;font-size: 12px;">每页显示</span>
                        <el-select v-model="pagesizeDept" slot="prepend" placeholder="" id="pagesize" style="width: 65px;height: 30px;border-radius: 0px;font-size: 12px;left: 35px;">
                          <el-option label="10" value="10"></el-option>
                          <el-option label="20" value="20"></el-option>

                        </el-select>
                        <span style="margin-left:2px;position: relative;left: 32px">条信息<span style="margin-left: 20px">转到<el-input v-model="jumperDept" style="width: 50px;height: 30px;margin-left: 2px;margin-right: 4px"></el-input>页</span><el-button class="button2" style="font-size: 12px;" @click="handleCurrentChangeDept(jumperDept)">跳转</el-button></span></div>

                      <div style="float:right;margin-top:10px;">

                        <!-- *********************************分页按钮 -->
                        <el-pagination
                                background="#E95513"
                                prev-text="上一页"
                                next-text="下一页"
                                jumper-text="转到"
                                @size-change="handleSizeChangeDept"
                                @current-change="handleCurrentChangeDept"
                                :current-page="currentPageDept"
                                :page-sizes="[1, 2, 3]"
                                :page-size="pagesizeDept"
                                :total="deptData.length"
                                layout="slot, prev, pager, next, total">
                          <!-- <slot name="as">dddd</slot> -->
                        </el-pagination>
                      </div>
                    </el-main>
                  </el-tab-pane>
                  <el-tab-pane label="安全配置"> <div id="main2">

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
                    <el-button class="button1"  style="margin-left: 39%;margin-top: 15px" @click="updateSystemSecurityConf">保存</el-button>
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
                        style="width: 100%;left:-33px">
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
                          width="224">
                        </el-table-column>
                        <el-table-column
                          prop="operationName"
                          label="操作名称"
                          width="305">
                        </el-table-column>
                        <el-table-column
                          prop="message"
                          label="备注"
                          width="737">
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
                        style="width: 100%;left:-33px">
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
                          width="254">
                        </el-table-column>
                        <el-table-column
                          prop="message"
                          label="备注"
                          width="602">
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
    color:#5EBF18;
  ;}

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
    background-color: #eee;
  }
  /*刚修改的分页背景颜色问题*/
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom: 2px solid #E95513;
    background: #fff;
  }
  .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
    border-bottom: 2px solid #E95513;}

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
    background: #fff;
  }
  /*侧面导航栏间距问题*/


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

    font-weight: bold;
    font-size: 12px;


    /*border-right: 1px solid #fff;*/

    font-size: 12px;



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
  import "../assets/css/new.css"

  export default {
      name: "honey-admin",
      data() {
          return {
              // 用户管理表格的勾选项
              multipleSelectionUser: [],
              // 配置管理/部门管理表格的勾选项
              multipleSelectionDept: [],
              jumperUser:1,
              pagesizeUser: 2,
              currentPageUser: 1,
              jumperDept: 1,
              pagesizeDept: 2,
              currentPageDept: 1,
              save_userData: [],
              userData: [],  // 用户管理表格所需的数据
              options: [{
                  value: '选项1',
                  label: '10'
              }, {
                  value: '选项2',
                  label: '20'
              }
              ],

              searchUser: '',
              searchDept: '',
              dialogFormVisible: false, // 添加用户对应对话框
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
              updateUsername: '',
              dialogFormVisible1: false,  // 修改用户信息对应对话框
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

              dialogFormVisible2_0: false,  // 添加部门对应对话框
              dialogFormVisible2_1: false,  // 修改部门信息对应对话框
              save_deptData: [],
              deptData: [],                 // 管理配置/部门管理的表格所需数据
              // 添加部门对应的form
              form2: {
                  department:'',
                  departmentman:'',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: ''
              },
              // 修改部门信息对应的form
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
              num1: 2,
              num2: 2,
              num3: 2,
              num4: 2,

          };
      },
      mounted:function(){
          this.getAllUsers()
          this.getAllDepts()
          this.getSystemSecurityConf()
      },
      watch: {
          searchUser(newValue, oldValue) {
              this.userData = this.save_userData
              this.currentPageUser = 1
          },
          searchDept(newValue, oldValue) {
              this.deptData = this.save_deptData
              this.currentPageDept = 1
          }
      },
      methods: {
          // 各方法中json的键要与后端对应，值要与前端如form中的变量名对应

          // 分页
          handleSizeChangeUser(val){
              this.pagesizeUser = val
          },
          handleCurrentChangeUser(val){
              this.currentPageUser = val
          },
          handleSizeChangeUser(val){
              this.pagesizeDept = val
          },
          handleCurrentChangeDept(val){
              this.currentPageDept = val
          },
          // 用户管理界面的勾选项
          handleSelectionChangeUser(val){
              this.multipleSelectionUser = val
          },
          // 配置管理/部门管理界面的勾选项
          handleSelectionChangeDept(val){
              this.multipleSelectionDept = val
          },
          // 模糊查询用户信息
          fuzzyQueryUser() {
              var fuzzyData = []
              for (var i = 0; i < this.save_userData.length; i ++) {
                  if(this.save_userData[i].username.indexOf(this.searchUser) != -1 || this.save_userData[i].realName.indexOf(this.searchUser) != -1 ||
                      this.save_userData[i].role.indexOf(this.searchUser) != -1 || this.save_userData[i].department.indexOf(this.searchUser) != -1)
                      fuzzyData.push(this.save_userData[i])
              }
              this.userData = fuzzyData
          },
          fuzzyQueryDept() {
              var fuzzyData = []
              for (var i = 0; i < this.save_deptData.length; i ++) {
                  if(this.save_deptData[i].department.indexOf(this.searchDept) != -1 ||
                      this.save_deptData[i].departmentman.indexOf(this.searchDept) != -1 )
                      fuzzyData.push(this.save_deptData[i])
              }
              this.deptData = fuzzyData
          },
          // 获取所有用户信息（除super外）
          getAllUsers(){
              var that = this;
              this.$axios.get('/honeycontrol/getAllUsers')
                  .then(function (response){
                      var jsondata = []
                      jsondata = response.data
                      that.userData = jsondata
                      that.save_userData = that.userData
                  })
          },
          // 添加用户
          addUser(){
              if (this.form.password != this.form.password1)
                  alert('密码不一致，请重新输入！')
              else{
                  var jsondata =
                      {
                          // 不清楚id的由来，暂时用不超过1000的随机数标记
                          'id': Math.floor(Math.random()*1000),
                          'username': this.form.name,
                          'password': this.form.password,
                          'realName': this.form.truename,
                          'authority': this.form.role,
                          'dept': this.form.department
                      };
                  var that = this
                  this.$axios.post('/honeycontrol/addUser', jsondata)
                      .then(function (response){
                          alert(JSON.stringify(response.data['result']))
                          that.dialogFormVisible = false
                          // 清空添加用户框中的数据
                          that.form.name = ''
                          that.form.password = ''
                          that.form.password1 = ''
                          that.form.truename = ''
                          that.form.role = ''
                          that.form.department = ''
                          // 获得最新的数据
                          that.getAllUsers()
                      })
              }
          },
          // 修改用户信息
          updateUser(){
              var that = this;
              // console.log(this.multipleSelectionUser)
              if(this.multipleSelectionUser.length != 1)
                  alert('修改时请仅选择一项！')
              else
              {
                  this.updateUsername = this.multipleSelectionUser[0].username
                  this.dialogFormVisible1 = true
              }
          },
          confirmUpdateUser() {
              var that = this
              if(this.form1.newpassword != this.form1.newpassword1)
                  alert('两次密码不一致，请重新输入！')
              else{
                  var jsondata =
                      {
                          // 后端根据用户名唯一确定要修改的用户
                          'username': this.updateUsername,
                          'oldpassword': this.form1.password0,
                          'newpassword': this.form1.newpassword,
                          'newrealname': this.form1.truename,
                          'newdept': this.form1.department
                      }
                  this.$axios.post('/honeycontrol/updateUser', jsondata)
                      .then(function (response){
                          alert(response.data['result'])
                          that.dialogFormVisible1 = false
                          // 清空数据
                          that.form1.password0 = ''
                          that.form1.newpassword = ''
                          that.form1.newpassword1 = ''
                          that.form1.truename = ''
                          that.form1.department = ''
                          // 获取最新数据
                          that.getAllUsers()
                      })
              }
          },
          cancelUpdateUser() {
              this.form1.password0 = ''
              this.form1.newpassword = ''
              this.form1.newpassword1 = ''
              this.form1.truename = ''
              this.form1.department = ''
              this.dialogFormVisible1 = false
          },
          // 删除勾选中的用户
          delUser(){
              var that = this;
              this.$confirm('您确定要删除选中的用户信息吗', '警告',{
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
              }).then(() => {
                  var jsonarray = [];
                  var i = 0;
                  for(; i < this.multipleSelectionUser.length; i ++){
                      var jsondata = {
                          // 根据username唯一删除用户
                          'username': this.multipleSelectionUser[i].username
                      }
                      jsonarray.push(jsondata)
                  }
                  this.$axios.post('/honeycontrol/delUser', jsonarray)
                      .then(function (response){
                          // 根据返回情况显示弹出不同的提示
                          if(response.data['result'] == 'success')
                              that.$message({
                                  type: 'success',
                                  message: '删除成功'
                              })
                          else
                              that.$message({
                                  type: 'error',
                                  message: '删除用户' + response.data['result'] + '发生错误'
                              })
                          // 获取最新数据
                          that.getAllUsers()
                          that.currentPageUser = 1
                      })
              }).catch(() => {
                  this.$message({
                      type: 'info',
                      message: '已取消删除'
                  })
              })
          },
          // 获取所有部门信息
          getAllDepts(){
              var that = this;
              this.$axios.get('/honeycontrol/getAllDepts')
                  .then(function (response){
                      var jsondata = []
                      jsondata = response.data
                      that.deptData = jsondata
                      that.save_deptData = that.deptData
                  })
          },
          // 添加部门
          addDept(){
              if(this.form2.department == '')
                  alert('部门名称不能为空')
              else{
                  var jsondata = {
                      // 同添加用户，暂时用不超过100的随机数
                      'id': Math.floor(Math.random()*100),
                      'depName': this.form2.department,
                      'dutyName': this.form2.departmentman
                  }
                  var that = this
                  this.$axios.post('/honeycontrol/addDept', jsondata)
                      .then(function (response){
                          alert(response.data['result'])
                          that.dialogFormVisible2_0 = false
                          // 清空数据
                          that.form2.department = ''
                          that.form2.departmentman = ''
                          // 获取最新数据
                          that.getAllDepts()
                      })
              }
          },
          // 修改部门信息
          updateDept(){
              var that = this
              var jsondata = {
                  'depName': this.form2_1.department,
                  'dutyName': this.form2_1.departmentman
              }
              this.$axios.post('/honeycontrol/updateDept', jsondata)
                  .then(function (response){
                      alert(response.data['result'])
                      that.dialogFormVisible2_1 = false
                      // 清空数据
                      that.form2_1.department = ''
                      that.form2_1.departmentman = ''
                      // 获取最新数据
                      that.getAllDepts()
                  })

          },
          // 删除部门信息
          delDept(){
              var that = this
              this.$confirm('您确定要删除选中的部门信息吗', '警告', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
              }).then(() => {
                  var jsonarray = []
                  var i = 0
                  for (; i < this.multipleSelectionDept.length; i ++){
                      var jsondata = {
                          'depName': this.multipleSelectionDept[i].department
                      }
                      jsonarray.push(jsondata)
                  }
                  this.$axios.post('/honeycontrol/delDept', jsonarray)
                      .then(function (response){
                          if(response.data['result'] == 'success')
                              that.$message({
                                  type: 'success',
                                  message: '删除成功'
                              })
                          else
                              that.$message({
                                  type: 'error',
                                  message: '删除部门' + response.data['result'] + '发生错误'
                              })
                          that.getAllDepts()
                      })
              }).catch(() => {
                  that.$message({
                      type: 'info',
                      message: '已取消删除'
                  })
              })
          },
          // 获取系统安全配置
          getSystemSecurityConf(){
              var that = this
              this.$axios.get('/honeycontrol/getSystemSecurityConf')
                  .then(function (response){
                      var jsondata = response.data
                      // num1 - num4 分别对应四项安全配置
                      that.num1 = jsondata.password_length
                      that.num2 = jsondata.try_times
                      that.num3 = jsondata.password_period
                      that.num4 = jsondata.lock_period
                  })
          },
          // 修改系统安全配置
          updateSystemSecurityConf(){
              var that = this
              // json的key与数据库system_security_conf表中的名称对应
              // 方便后端处理
              var jsondata = {
                  'password_length': this.num1,
                  'try_times': this.num2,
                  'password_period': this.num3,
                  'lock_period': this.num4
              }
              this.$axios.post('/honeycontrol/updateSystemSecurityConf', jsondata)
                  .then(function (response){
                      alert(response.data['result'])
                      // 获取最新数据
                      that.getSystemSecurityConf()
                  })
          },
          // 以上 用户管理和配置管理 项宇涵进行
          // --------------------------------------------------------------------------

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
