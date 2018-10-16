<template>
  <el-container style="height:100%;" direction="vertrcal">
    <el-header class="h-input" height=150px; >
      <el-form :inline="true"
               :model="formInline"
               size="small"
               class="demo-form-inline"
               :label-position="right" >
        <el-row :gutter="0" type="flex">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form-item label="操作类型:">
              <el-input v-model="formInline.opType" style="padding-left:1px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form-item label="进程名:">
              <el-input v-model="formInline.processName" style="padding-left:1px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-form-item label="操作时间:">
              <el-input v-model="formInline.time" style="padding-left:1px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row> 
      <el-row :gutter="0" type="flex">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="进程ID:" >
              <el-input v-model="formInline.processNum" style="padding-left:15px;width:187px" ></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item label="模块名:" >
              <el-input v-model="formInline.regeditName" style="padding-left:1px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-form-item>
              <el-button style="background:#E95513;color:#ffffff;"  @click="getAimModule" class="funButton">查询</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row> 
        </el-form-item>
      </el-form>
    </el-header>
    <el-main class="m-table">
      <el-table
        :header-cell-style="{background:'#E95513',padding:0,color:'#FFFFFF'}"
        class="table1"
        row-style="30px"
        cell-style="padding:0"
        id="table11"
        :data="filemap.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%">
        <el-table-column
          prop="id"
          width="80"
          label="序号">

        </el-table-column>
        <el-table-column
          prop="opType"
          label="操作类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="processNum"
          label="进程ID"
          width="200">
        </el-table-column>
        <el-table-column
          prop="processName"
          label="进程名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="regeditName"
          label="模块名"
          width="250">
        </el-table-column>
        <el-table-column
          prop="time"
          label="操作时间">
        </el-table-column>
      </el-table>
      <div class="p-page" style="font-size: 12px;padding-left: 34px">显示第{{(currentPage-1) * pagesize +1}}到第{{((currentPage * pagesize)<(filemap.length))?currentPage * pagesize:filemap.length}}条记录，总共{{filemap.length}}条记录
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
          :page-size="pagesize"
          :total="filemap.length"
          layout="slot,prev, pager, next,total" >
          <!-- <slot name="as">dddd</slot> -->
        </el-pagination>
      </div>

    </el-main>
  </el-container>
</template>
<style scoped>
  .table-p1{
    font-family: 'Microsoft YaHei';
    font-size: 12pt;
    color:#BFBFBF;
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


</style>
<script>
    import '../../assets/css/new.css'
  export default {
    data(){
      return {
        jumper:10,
        pagesize:10,
        dialog:false,
        dialogFormVisible: false,
        dialogText: false,
        dialogTable: false,
        currentPage: 1,
        formInline: {
          opType:'',
          processName:'',
          time:'',
          processNum:'',
          regeditName:'',
        },
        filemap:[]
      }
    },
    created(){
      this.getAllModule()
    },
    mounted:function(){
      this.getAllModule();
    },
    methods: {
      getAllModule(){
        var that = this;
        this.$axios.get('/getAllModule')
          .then(function (response) {
            that.filemap = response.data.AllModule;
          })
          .catch(function (error) {
            alert('handle error')
            console.log(error);
          })
          .then(function () {
          });
      },
      getAimModule(){
        var that = this;
        this.$axios.get('/getAimModule',{
          params:{
            opType
              :
            that.formInline.opType,
            processNum
              :
            that.formInline.processNum,
            processName
              :
            that.formInline.processName,
            regeditName
              :
            that.formInline.regeditName,
            time
              :
            that.formInline.time,
          }
        })
          .then(function (response) {
            that.filemap = response.data.AimModule;
          })
          .catch(function (error) {
            alert('handle error')
          })
          .then(function () {
            //什么时候都执行的
          });
      },
      // 分页
      handleSizeChange(size) {
        this.pagesize = size;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        console.log(`当前页: ${val}`);
      },
      //      handleSizeChange(val) {
      //     console.log(`每页 ${val} 条`);
      //   },
      //   handleCurrentChange(val) {
      //     console.log(`当前页: ${val}`);
      //   }
      // },
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
