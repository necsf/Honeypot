<template>
  <el-container style="height:100%;" direction="vertrcal">
    <el-header class="h-input" height=150px; >
      <el-form :inline="true"
               :model="formInline"
               size="small"
               class="demo-form-inline"
               :label-position="right" >
         <el-row :gutter="0" type="flex">
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-form-item label="进程名:">
              <el-input v-model="formInline.progress" style="padding-left:27px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-form-item label="进程ID:">
              <el-input v-model="formInline.progressID" style="padding-left:15px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-form-item label="键名:">
              <el-input v-model="formInline.keyname" style="padding-left:15px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row> 
      <el-row :gutter="0" type="flex">
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-form-item label="注册表路径:">
              <el-input v-model="formInline.path" style="padding-left:1px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-form-item label="操作时间:">
              <el-input v-model="formInline.date" style="padding-left:1px;width:187px"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-form-item>
              <el-button style="background:#E95513;color:#ffffff;"  @click="onSubmit" class="funButton">查询</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
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
          prop="processID"
          label="进程ID"
          width="150">
        </el-table-column>
        <el-table-column
          prop="processName"
          label="进程名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="keyValue"
          label="键名"
          width="200">
        </el-table-column>
        <el-table-column
          prop="dataType"
          label="待写入数据类型"
          width="150">
        </el-table-column>
        <el-table-column
          prop="dataSize"
          label="数据大小"
          width="150">
        </el-table-column>
        <el-table-column
          prop="regPath"
          label="注册表路径"
          width="380">
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
  /* .table1 td{
          padding: 0;
          height: 30px;
  } */
  /*布局对齐*/
  .el-row {
    margin-bottom: 0px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #ffffff;
  }
  .bg-purple {
    background: #ffffff;
  }
  .bg-purple-light {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 10px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #ffffff;
  }
  
  .m-table{
    width: 100%;
    height: 100%;
  }
  .h-input{
    width: 100%;
  }
  .p-page{
    font-size: 12pt;
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
          progress:'',
          progressID:'',
          keyname:'',
          path:'',
          date:''
        },
        filemap:[],

      }
    },
    created(){
      this.getAllSetRegValueKey()
    },
    mounted:function(){
      this.getAllSetRegValueKey()
    },
    methods: {
      getAllSetRegValueKey(){
        var that = this;
        this.$axios.get('/getAllSetRegValueKey')
          .then(function (response) {
            that.filemap = response.data.AllSetRegValueKey;
          })
          .catch(function (error) {
            alert('handle error')
            console.log(error);
          })
          .then(function () {
          });
      },
      getAimSetRegValueKey(){
        var that = this;
        this.$axios.get('/getAimSetRegValueKey',{
          params:{
            processName
              :
            that.formInline.progress,
            processID
              :
            that.formInline.progressID,
            keyValue
              :
            that.formInline.keyname,
            regPath
              :
            that.formInline.path,

            time
              :
            that.formInline.date
          }
        })
          .then(function (response) {
            that.filemap = response.data.AimSetRegValueKey;
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
